import { createServer } from 'http';
import { parse } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import process from 'process';

// Only load .env in development
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

// Create Nodemailer transporter with OAuth2 following the article's approach
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.SENDER_EMAIL,
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
            // Optional: Include access token if available
            ...(process.env.ACCESS_TOKEN && { accessToken: process.env.ACCESS_TOKEN })
        }
    });
};

// Helper function to parse JSON body
const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(error);
            }
        });
        req.on('error', (error) => {
            reject(error);
        });
    });
};

// Helper function to send JSON response
const sendResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end(JSON.stringify(data));
};

// Email sending function with proper error handling
const sendEmailWithOAuth2 = async (mailOptions) => {
    const transporter = createTransporter();
    
    try {
        // Verify transporter configuration
        await transporter.verify();
        console.log('SMTP server is ready to take our messages');
        
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        return { success: true, info };
        
    } catch (error) {
        console.error('Email sending failed:', error);
        
        // Handle specific OAuth2 errors
        if (error.code === 'EAUTH' || error.responseCode === 535) {
            console.error('Authentication failed - refresh token may be expired');
            throw new Error('Email authentication failed. Please check OAuth2 credentials.');
        }
        
        throw error;
    }
};

// Main handler function for Vercel
export default async function handler(req, res) {
    const { pathname } = parse(req.url, true);

    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });
        res.end();
        return;
    }

    // Contact form endpoint
    if (pathname === '/api/contact' && req.method === 'POST') {
        try {
            // Validate required environment variables
            const requiredEnvVars = [
                'SENDER_EMAIL', 
                'FIRM_EMAIL', 
                'GOOGLE_CLIENT_ID', 
                'GOOGLE_CLIENT_SECRET', 
                'GOOGLE_REFRESH_TOKEN'

            ];
            
            const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
            if (missingVars.length > 0) {
                console.error('Missing environment variables:', missingVars);
                return sendResponse(res, 500, {
                    success: false,
                    message: 'Server configuration error. Please contact support.'
                });
            }

            const { fullName, email, company, message } = await parseBody(req);

            // Validate required fields
            if (!fullName || !email || !message) {
                return sendResponse(res, 400, {
                    success: false,
                    message: 'Please fill in all required fields.'
                });
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return sendResponse(res, 400, {
                    success: false,
                    message: 'Please provide a valid email address.'
                });
            }

            // Email content for the law firm
            const firmMailOptions = {
                from: process.env.SENDER_EMAIL,
                to: process.env.FIRM_EMAIL,
                subject: `New Contact Form Submission from ${fullName}`,
                html: `
                    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background-color: #f1faee; padding: 30px; border-radius: 12px;">
                        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            <div style="border-bottom: 3px solid #e76f51; padding-bottom: 20px; margin-bottom: 30px;">
                                <h1 style="color: #2c2c2c; font-size: 28px; margin: 0;">New Contact Form Submission</h1>
                                <p style="color: #666; font-size: 16px; margin: 10px 0 0 0;">Legal Inquiry from Your Website</p>
                            </div>
                            
                            <div style="margin-bottom: 25px;">
                                <h3 style="color: #2c2c2c; font-size: 18px; margin: 0 0 8px 0; border-left: 4px solid #e76f51; padding-left: 12px;">Client Information</h3>
                                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                                    <tr>
                                        <td style="padding: 12px; background-color: #f8f9fa; border: 1px solid #e9ecef; font-weight: bold; color: #2c2c2c; width: 140px;">Full Name:</td>
                                        <td style="padding: 12px; border: 1px solid #e9ecef; color: #2c2c2c;">${fullName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px; background-color: #f8f9fa; border: 1px solid #e9ecef; font-weight: bold; color: #2c2c2c;">Email:</td>
                                        <td style="padding: 12px; border: 1px solid #e9ecef; color: #2c2c2c;"><a href="mailto:${email}" style="color: #e76f51; text-decoration: none;">${email}</a></td>
                                    </tr>
                                    ${company ? `
                                    <tr>
                                        <td style="padding: 12px; background-color: #f8f9fa; border: 1px solid #e9ecef; font-weight: bold; color: #2c2c2c;">Company:</td>
                                        <td style="padding: 12px; border: 1px solid #e9ecef; color: #2c2c2c;">${company}</td>
                                    </tr>
                                    ` : ''}
                                </table>
                            </div>
                            
                            <div style="margin-bottom: 25px;">
                                <h3 style="color: #2c2c2c; font-size: 18px; margin: 0 0 15px 0; border-left: 4px solid #e76f51; padding-left: 12px;">Legal Matter Details</h3>
                                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #e76f51;">
                                    <p style="color: #2c2c2c; line-height: 1.6; margin: 0; white-space: pre-line;">${message}</p>
                                </div>
                            </div>
                            
                            <div style="background-color: #e76f51; color: white; padding: 15px; border-radius: 6px; text-align: center; margin-top: 30px;">
                                <p style="margin: 0; font-size: 14px;">📧 Reply directly to this email to respond to the client</p>
                            </div>
                            
                            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                                <p style="color: #666; font-size: 12px; margin: 0;">This message was sent from the contact form on your website</p>
                                <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">Time: ${new Date().toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `,
                replyTo: email
            };

            // Confirmation email for the client
            const clientMailOptions = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: 'Thank you for contacting our law firm - We\'ll be in touch soon',
                html: `
                    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background-color: #f1faee; padding: 30px; border-radius: 12px;">
                        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            <div style="text-align: center; border-bottom: 3px solid #e76f51; padding-bottom: 25px; margin-bottom: 30px;">
                                <h1 style="color: #2c2c2c; font-size: 28px; margin: 0 0 10px 0;">Thank You for Reaching Out</h1>
                                <p style="color: #666; font-size: 16px; margin: 0;">We've received your legal inquiry</p>
                            </div>
                            
                            <div style="margin-bottom: 25px;">
                                <p style="color: #2c2c2c; font-size: 16px; line-height: 1.6;">Dear ${fullName},</p>
                                <p style="color: #2c2c2c; font-size: 16px; line-height: 1.6;">
                                    Thank you for contacting our law firm. We have received your inquiry regarding your legal matter and appreciate you taking the time to provide detailed information.
                                </p>
                            </div>
                            
                            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #e76f51; margin-bottom: 25px;">
                                <h3 style="color: #2c2c2c; font-size: 18px; margin: 0 0 15px 0;">What happens next?</h3>
                                <ul style="color: #2c2c2c; line-height: 1.8; padding-left: 20px; margin: 0;">
                                    <li>Our legal team will review your case details within 24 hours</li>
                                    <li>We'll assess how we can best assist you with your legal matter</li>
                                    <li>You'll receive a response from one of our attorneys shortly</li>
                                    <li>If needed, we'll schedule a consultation to discuss your case in detail</li>
                                </ul>
                            </div>
                            
                            <div style="background-color: #e76f51; color: white; padding: 20px; border-radius: 6px; text-align: center; margin-bottom: 25px;">
                                <p style="margin: 0 0 10px 0; font-size: 18px; font-weight: bold;">⚖️ Professional Legal Guidance</p>
                                <p style="margin: 0; font-size: 14px; line-height: 1.4;">We're committed to providing you with expert legal advice and personalized solutions for your case.</p>
                            </div>
                            
                            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                                <p style="color: #666; font-size: 14px; margin: 0;">If you have any urgent questions, please don't hesitate to call us directly.</p>
                                <p style="color: #666; font-size: 12px; margin: 10px 0 0 0;">This is an automated confirmation email.</p>
                            </div>
                        </div>
                    </div>
                `
            };

            // Send both emails using the OAuth2 function
            await Promise.all([
                sendEmailWithOAuth2(firmMailOptions),
                sendEmailWithOAuth2(clientMailOptions)
            ]);

            sendResponse(res, 200, {
                success: true,
                message: 'Your message has been sent successfully. We\'ll get back to you within 24 hours.'
            });

        } catch (error) {
            console.error('Error in contact endpoint:', error);
            
            // Provide specific error messages based on error type
            let errorMessage = 'There was an error sending your message. Please try again or contact us directly.';
            
            if (error.message.includes('authentication failed')) {
                errorMessage = 'Email service is temporarily unavailable. Please try again later or contact us directly.';
            } else if (error.code === 'ECONNREFUSED') {
                errorMessage = 'Unable to connect to email service. Please try again later.';
            }
            
            sendResponse(res, 500, {
                success: false,
                message: errorMessage
            });
        }
    }
    // Health check endpoint with OAuth2 verification
    else if (pathname === '/api/health' && req.method === 'GET') {
        try {
            // Test OAuth2 connection
            const transporter = createTransporter();
            await transporter.verify();
            
            sendResponse(res, 200, { 
                status: 'Server is running',
                emailService: 'OAuth2 connection verified'
            });
        } catch (error) {
            console.error('Health check failed:', error);
            sendResponse(res, 500, { 
                status: 'Server is running',
                emailService: 'OAuth2 connection failed'
            });
        }
    }
    // 404 for other routes
    else {
        sendResponse(res, 404, { message: 'Route not found' });
    }
}

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    const server = createServer(handler);
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log('OAuth2 email service configured');
    });
}