
import Navbar from './components/Navbar'

const Header = () => {
    return (

        <div className='flex justify-around items-center bg-[#262530]'>
            <div className='flex items-center grow'>
                <a href="/" className='text-[#c9d1d3] text-2xl font-bold p-4 '>

                    ALA
                </a>

            </div>
            <Navbar />
        </div>

    );
};
export default Header;