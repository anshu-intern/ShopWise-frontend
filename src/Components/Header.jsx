import userIcon from '../assets/user.svg';
import emiIcon from '../assets/emi.svg';
import searchIcon from '../assets/search.svg';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="sticky top-0 z-10 flex justify-between items-center h-[80px] w-[100%] bg-white border-b border-gray-300">
            
            <div className="relative w-[25%] h-[100%] flex justify-start items-center">
                <Link to={"/"}><h1 className="font-bold text-4xl cursor-pointer">ShopWise</h1></Link>
            </div>

            <div className="hidden relative h-[48px] w-[50%] p-1 lg:flex justify-center items-center border rounded">
                <input type="text" placeholder="Search for product here..." className="relative w-[95%] h-[40px] px-1 bg-white border border-white outline-0"></input>
                <button className="relative w-[5%] h-[40px] bg-blue-400 border border-blue-400 rounded flex justify-center items-center cursor-pointer hover:bg-blue-500"><img src={searchIcon} alt={"search"} className='h-[26px]'/></button>
            </div>

            <div className="relative w-[25%] h-[100%] flex justify-end items-center gap-2">
                <div className="hidden lg:flex justify-center gap-2 items-center cursor-pointer hover:bg-blue-100 p-2 rounded">
                    <img src={emiIcon} alt="icon" className='h-[28px]'/>
                    <span>Pay EMI</span>
                </div>
                <div className="flex justify-center items-center cursor-pointer hover:bg-blue-100 p-2 rounded">
                    <img src={userIcon} alt="icon" className='h-[28px]'/>
                    <span>Log In</span>
                </div>
            </div>

        </header>
    )
}

export default Header;