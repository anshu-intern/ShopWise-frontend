function Footer(){
    return(
        <footer className="flex flex-col justify-center items-center h-auto w-[100%] bg-white pt-10 py-2 gap-2 border-t">
            
            <div className="relative flex flex-col lg:flex-row justify-center items-center lg:justify-around lg:items-start gap-4 h-[100%] w-[100%] h-auto bg-white">
                <div className="relative w-[70%] lg:w-1/3 h-[100%] flex flex-col justify-center items-start pr-4 gap-2">
                    <h1 className="font-bold text-3xl py-4">ShopWise</h1>
                    <span className="pb-1">ShopWise Credit Advisory Private Limited</span>
                    <span>Office No. 201, 2nd Floor, C-Wing, Neelkanth Business Park, Nr. Vidyavihar Station, Vidyavihar (West), Mumbai - 400086</span>
                    <span className="pb-1">Contact number: 022-48931351</span>
                    <span>Monday to Sunday (10AM to 7PM)</span>
                </div>

                <div className="relative w-[70%] lg:w-1/3 h-[100%] flex flex-col justify-start items-start gap-2">
                    <h2 className="text-2xl pb-6">Quick Links</h2>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">About Us</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">FAQs</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Join as a EMI Store Merchant</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Request EMI Payment Solution</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Partners</span>
                </div>

                <div className="relative w-[70%] lg:w-1/3 h-[100%] flex flex-col justify-start items-start gap-2">
                    <h2 className="text-2xl pb-6">Support Links</h2>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Return Policy</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Contact Us</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Terms and Conditions</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Refund Policy</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Privacy Policy</span>
                    <span className="cursor-pointer hover:underline hover:text-blue-800">Corporate Information</span>
                </div>
            </div>

            <div className="flex justify-center items-center py-8">
                <span className="font-light">Proudly Made in India!</span>
            </div>

        </footer>
    )
}

export default Footer;