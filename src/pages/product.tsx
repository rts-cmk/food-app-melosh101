import { useLoaderData } from "react-router"
import "./css/pruduct.css";


export default function ProductPage() {
    const { product } = useLoaderData()


    return <>
        <header className="product-header">
            
        </header>
        <main className="product-main">

        </main>        
    </>
}