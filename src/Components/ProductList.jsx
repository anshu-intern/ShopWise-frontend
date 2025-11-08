import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { Link, useNavigate } from "react-router-dom";

function ProductList(){
    const [ products, setProducts ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            try{
                const response = await axios.get("/api/product");
                setProducts(response.data.data);
            }
            catch(err){
                setProducts([]);
                navigate('/error', { state: { message: err.message, name: err.name, status: err.response?.status, url: err.url } });
            }
        }
        fetchProducts();
    }, []);

    function slug(name){
        return name
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')       // replace spaces with -
        .replace(/[^\w\-]+/g, '')   // remove all non-word char
        .replace(/\-\-+/g, '-');    // replace multiple - with single -
    }

    return(
        <>
        <section className="relative flex h-auto w-[100%] justify-center items-center flex-wrap gap-12 py-20">
            { products.map( (item, index) => ( <Link key={item._id} to={`/product/${slug(item.name)}/${item._id}`}><Product key={item._id} value={item} /></Link>) )}
        </section>
        </>
    )
}

export default ProductList;