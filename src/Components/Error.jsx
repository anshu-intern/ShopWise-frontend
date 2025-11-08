import { Link, useLocation } from "react-router-dom";
import monkey from '../assets/monkey.png';

function Error(){
    const location = useLocation();
    const error_message = location.state?.message;
    const error_name = location.state?.name;
    const error_status = location.state?.status;
    const errorUrl = location.state?.url || "Unknown error occurred";

    return(
        <>
        <div className="flex flex-col justify-center items-center gap-2 bg-gray-100 h-[100vh] w-[100vw]">
            <img src={monkey} alt='monkey'/>
            <span className="text-gray-500 p-2">{errorUrl}</span>
            <div className="flex flex-col justify-center items-center gap-0">
                <span>This page isn't available. Sorry about that.</span>
                <span>Try again after some time.</span>
            </div>
            <span className="text-gray-500 p-2">{error_name}</span>
            <span className="text-gray-500 p-2">{error_status}</span>
            <span className="text-gray-500 p-2">{error_message}</span>
            <Link to={'/'}><span className="text-blue-700 hover:underline cursor-pointer">Go back to home page - ShopWise.com</span></Link>
        </div>
        </>
    )
}

export default Error;