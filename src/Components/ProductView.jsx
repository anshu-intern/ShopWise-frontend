import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function ProductView(){
    const [ product, setProduct ] = useState({});
    const [ selectedVariant, setSelectedVariant ] = useState({});
    const [ emiPlans, setEmiPlans ] = useState([]);
    const { product_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getProduct(){
            try{
                const response = await axios.get(`http://localhost:8080/api/product/${product_id}`);
                setProduct(response.data.data);
                setSelectedVariant(response.data.data.variant[0]);
            }
            catch(err){
                setProduct({});
                setSelectedVariant({});
                navigate('/error', { state: { message: err.message, name: err.name, status: err.response?.status } });
            }
        }
        async function getEMIdetails(){
            try{
                const emiResponse = await axios.get(`http://localhost:8080/api/emi/${product_id}`);
                setEmiPlans(emiResponse.data.data.plans);
            }
            catch(err){
                setEmiPlans([]);
                navigate('/error', { state: { message: err.message, name: err.name, status: err.response?.status } });
            }
        }
        getProduct();
        getEMIdetails();
    }, [ product_id ]);

    function calcEmi(amount, month, interest){
        if (interest === 0) {
            return (amount / month).toFixed(2);
        }
        const rate = (interest/12/100)
        const emi = (amount * rate * Math.pow(1 + rate, month)) / (Math.pow(1 + rate, month) - 1);
        return emi.toLocaleString("en-IN", { style: "currency",currency: "INR",});
    }

    return(
        <>
        <section className="relative w-[100%] h-auto py-1 pb-20">
            <div className="flex justify-start items-center gap-2 py-4">
                <Link to={"/"}><span className="hover:underline">Shopwise</span></Link>
                <span> {'>'} </span>
                <Link to={"/"}><span className="hover:underline">Products</span></Link>
                <span> {'>'} </span>
                <span>{product.name}</span>
            </div>
            <div className="relative w-[100%] max-w-[1500px] h-auto flex flex-col lg:flex-row justify-center items-center lg:items-start">
                { Object.keys(product).length > 0 && 
                <>
                <div className="relative w-[80%] lg:w-1/2 h-auto flex flex-col justify-center items-center gap-6 p-2 lg:p-20">

                    <img src={selectedVariant.imageUrl} alt={product.name} className="relative h-[100%] w-[50%]"/>

                    <div className="relative flex flex-col justify-center gap-2 items-center p-2 ">
                        <span>Variant: {selectedVariant.storage} {selectedVariant.storageUnit}, {selectedVariant.color}</span>
                    
                        <select id="variant" value={selectedVariant} onChange={(e) => {
                                const selected = product.variant?.find( (v) => v._id === e.target.value );
                                setSelectedVariant(selected);
                            }} 
                            className="text-sm cursor-pointer p-2">
                            <option>Available in {`${product.variant.length}`} variants</option>
                            { product?.variant?.map( (variant) => (
                                <option key={variant._id} value={variant._id}>
                                    {variant.storage} {variant.storageUnit} {variant.color}
                                </option>
                            )) }
                        </select>
                    </div>

                </div>

                <div className="relative w-[80%] lg:w-1/2 h-auto flex flex-col justify-start items-start p-4 gap-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <div className="flex justify-start items-center gap-2">
                        <span>Storage: {selectedVariant.storage} {selectedVariant.storageUnit} ,</span>
                        <span>Color: {selectedVariant.color}</span>
                    </div>
                    <span className="font-bold text-xl"> {product.price.toLocaleString("en-IN", { style: "currency",currency: "INR",}) } </span>
                    <div className="flex flex-col gap-0 justify-start items-start">
                        <span className="font-bold">Shipping Details:</span>
                        <span className="font-light">Free Shipping. Dispatch in less than 48 hours and delivery in 3-7 working days after dispatch.</span>
                    </div>
                    <div className="flex flex-col gap-0 justify-start items-start">
                        <span className="font-bold text-gray-600">Sold by:</span>
                        <span className="font-light text-gray-500">ShopWise</span>
                    </div>
                    <label htmlFor="inputId">EMI plans backed by Mutual Funds</label>
                    {
                        emiPlans.map( emi => (
                            <div key={emi._id} className="relative w-[100%] h-auto flex flex-col md:flex-row justify-between items-center p-2 border">
                                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                                    <input type="radio" id="inputId" name="emi" value={emi._id} defaultChecked={emiPlans[0]._id === emi._id} className="cursor-pointer"></input>

                                    <div className="flex flex-col justify-start items-start gap-2">
                                        <div className="flex justify-center items-center gap-2">
                                            <span>{ calcEmi(product.price, emi.month, emi.interestRate )}</span>
                                            <span>{'x'}</span>
                                            <span>{emi.month} months</span>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <span className="text-green-700">{ emi.cashBack > 0 ? `Additional cashback of ${emi.cashBack.toLocaleString("en-IN", { style: "currency",currency: "INR",})}` : '' }</span>
                                        </div>    
                                    </div>

                                </div>

                                <div className="flex flex-row md:flex-col justify-end items-end gap-2">
                                    <span>{emi.interestRate}% interest</span>
                                    <span className="font-medium text-sm">backed by {emi.backedByFund}</span>
                                </div>

                            </div>
                        ))
                    }
                    
                    <div className="relative w-[100%] flex justify-center items-center py-2">
                        <button className="w-[70%] lg:w-[50%] p-2 lg:p-3 border border-blue-600 text-blue-600 rounded-full font-medium cursor-pointer hover:bg-blue-500 hover:text-white">Proceed to Checkout</button>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1 py-2">
                        <span className="font-bold">Returns, Replacements & Refunds T&C*</span>
                        <span>ShopWise will accept under following conditions:</span>
                        <ul className='list-disc ml-5'>
                            <li>Unboxing Video is mandatory for the Return/Replacement & Refund claims.</li>
                            <li>Deffective or damaged items delivered.</li>
                        </ul>
                    </div>
                
                </div>

                </>
                }
            </div>
        </section>
        </>
    )
}

export default ProductView;