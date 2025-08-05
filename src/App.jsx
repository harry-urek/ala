import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import TeamMember from './components/TeamMember'
import Footer from './components/Footer'
// import Header from './Header'
import './index.css'

function App() {
  // Team members data - easily add/remove members here
  const teamMembers = [
    {
      id: 1,
      name: "MRS. SMRITI SAHAY",
      position: "SENIOR PARTNER",
      qualifications: [
        "Chartered Accountant",
        "Company Secretary",
        "Practicing Advocate",
        "8+ years of experience in taxation, corporate laws, and constitutional issues"
      ],
      description: "Ms. Smriti Sahay is a Chartered Accountant, Company Secretary, and practicing Advocate with over 8 years of experience. She appears before the Delhi High Court, Supreme Court, and other forums, handling matters related to taxation (direct, indirect, PMLA, benami), corporate laws, and constitutional issues. She also represents clients in NCLT/NCLAT under IBC, consumer disputes up to NCDRC, and civil recovery matters.",
      image: "/src/assets/hero.png"
    },
    {
      id: 2,
      name: "John Smith",
      position: "Senior Partner",
      qualifications: [
        "J.D. from Yale Law School",
        "Bar Admitted in New York and California",
        "Specialized in Corporate Law and Litigation",
        "20+ years of legal practice"
      ],
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/src/assets/hero.png"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Legal Counsel",
      qualifications: [
        "J.D. from Stanford Law School",
        "LL.M. in International Law",
        "Bar Admitted in Texas and New York",
        "Expertise in Employment and Immigration Law"
      ],
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
      image: "/src/assets/hero.png"
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "Associate Attorney",
      qualifications: [
        "J.D. from Columbia Law School",
        "Bar Admitted in New York",
        "Specialized in Criminal Defense and Family Law",
        "5+ years of courtroom experience"
      ],
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      image: "/src/assets/hero.png"
    }
  ];

  return (
    <>
      <div className="pt-20">
        <Navbar />
        <Hero />
        <Services />
        <TeamMember teamMembers={teamMembers} />
        <Footer />
      </div>
    </>
  )
}

export default App
