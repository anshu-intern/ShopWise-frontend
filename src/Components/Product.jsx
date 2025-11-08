function Product({value}){
    return(
        <>
        <div className="relative flex flex-col h-[400px] w-[280px] gap-2 border border-gray-200 rounded-xl overflow-hidden shadow-xl hover:scale-105 duration-300 cursor-pointer hover:border-blue-400 hover:border-3 hover:shadow-2xl">

            <div className="relative w-[100%] h-[70%] overflow-hidden">
                <img src={value.variant[0].imageUrl} alt={value.name} className="h-[100%] w-[100%] p-14" />
            </div>

            <div className="flex flex-col justify-start items-start px-2 pb-2">
                <span className="font-bold">{value.name} {value.variant[0].storage} {value.variant[0].storageUnit} {value.variant[0].color}</span>
                <span> {value.price.toLocaleString("en-IN", { style: "currency",currency: "INR",})} /-</span>
                <span className="text-sm font-light"> + {value.variant.length - 1} other variant</span>
                <span className="text-green-700">in Stock</span>
            </div>

        </div>
        </>
    )
}

export default Product;