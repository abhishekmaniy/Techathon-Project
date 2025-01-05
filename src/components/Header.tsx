import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header = () => {
    const location = useLocation();
    const isRoot = location.pathname === '/';
    const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0()

    return (
        <header
            className={`relative z-30 p-5 flex items-center justify-between text-white shadow-lg ${isRoot ? 'bg-transparent' : 'bg-black'}`}
        >
            <h1 className="text-4xl font-bold">Nari Nirmaan</h1>
            <div className='flex items-center gap-2' >
                <div className='flex gap-2 rounded-md border-white border-2 p-2' >English <ChevronDown /> </div>
                {
                    isAuthenticated
                        ? <div className='flex items-center gap-2 ' >
                            <Avatar>
                                <AvatarImage src={user?.picture} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>{user?.name}</div>
                            <Button className='bg-black border-white border-2 ' onClick={async () => await logout()} >Logout</Button>
                        </div>
                        : <Button onClick={async () => await loginWithRedirect()} className='text-white font-bold border-white border-2 text-xl hover:bg-white duration-300 hover:text-black rounded-md p-2' >Login</Button>

                }
            </div>
        </header>
    )
};

export default Header;
