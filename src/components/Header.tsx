import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isRoot = location.pathname === '/';

    return (
        <header
            className={`relative z-30 p-5 flex items-center justify-between text-white shadow-lg ${isRoot ? 'bg-transparent' : 'bg-black'
                }`}
        >
            <h1 className="text-4xl font-bold">Nari Nirmaan</h1>
            <div className='flex items-center gap-2' >
                <div className='flex gap-2 rounded-md border-white border-2 p-2' >English <ChevronDown /> </div>
                <Link to="/login" className='text-white font-bold border-white border-2 text-xl hover:bg-white duration-300 hover:text-black rounded-md p-2' >Login</Link>
            </div>
        </header>
    );
};

export default Header;
