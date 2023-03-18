import { ImStatsBars } from 'react-icons/im';


function Nav(){
    return <header className='container max-w-2xl px-6 py-6 mx-auto'>
        <div className="flex items-center justify-between">
            {/* User info */}
            <div className="flex items-center gap-2">
                {/* image */}
                <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover"
                        src="/dp ai.jpg"
                        alt="profile picture"
                    />
                </div>

                {/* name */}
                <small>Hi, User</small>
            </div>

            {/* right hand side of navigation */}
            <nav className="flex items-center gap-2">
                <div><ImStatsBars className='text-2xl' /></div>
                <div><button className='btn btn-danger'>Signout</button></div>
            </nav>
        </div>
    </header>
}

export default Nav;