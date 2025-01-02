import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isRoot = location.pathname === '/';

    return (
        <header
            className={`relative z-30 p-5 flex items-center justify-between text-white shadow-lg ${
                isRoot ? 'bg-transparent' : 'bg-black'
            }`}
        >
            <h1 className="text-4xl font-bold">Nari Nirmaan</h1>
            <Link to="/login" className='text-white font-bold text-xl hover:bg-white duration-300 hover:text-black rounded-md p-3' >Login</Link>
        </header>
    );
};

export default Header;
