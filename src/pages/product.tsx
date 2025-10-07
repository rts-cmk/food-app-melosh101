import { useLoaderData, useNavigate } from "react-router"
import "./css/pruduct.css";
import type { Burger } from "../util";
import { useState } from "react";


export default function ProductPage() {
    const { product }: { product: Burger, hello: string } = useLoaderData()
    const navigate = useNavigate()
    const [count, setCount] = useState(1);
    return <>
        <header className="product-header">
            <button aria-label="Back" className="back" onClick={() => navigate(-1)}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.1666 12.25H11.9081L14.7536 9.40448C15.0819 9.07635 15.2664 8.63123 15.2665 8.16706C15.2666 7.7029 15.0823 7.2577 14.7542 6.9294C14.426 6.60111 13.9809 6.41661 13.5167 6.4165C13.0526 6.41639 12.6074 6.60068 12.2791 6.92882L8.09542 11.1125C7.33098 11.879 6.9017 12.9174 6.9017 14C6.9017 15.0826 7.33098 16.1209 8.09542 16.8875L12.2791 21.0712C12.6074 21.3993 13.0526 21.5836 13.5167 21.5835C13.9809 21.5834 14.426 21.3989 14.7542 21.0706C15.0823 20.7423 15.2666 20.2971 15.2665 19.8329C15.2664 19.3687 15.0819 18.9236 14.7536 18.5955L11.9081 15.75H22.1666C22.6307 15.75 23.0758 15.5656 23.404 15.2374C23.7322 14.9092 23.9166 14.4641 23.9166 14C23.9166 13.5359 23.7322 13.0907 23.404 12.7625C23.0758 12.4344 22.6307 12.25 22.1666 12.25Z" />
                </svg>

            </button>
            <button aria-label="Search" className="search">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_133)">
                        <path d="M19.6345 17.8712L15.7636 13.9986C18.66 10.128 17.8702 4.64213 13.9996 1.7457C10.129 -1.15074 4.64312 -0.360973 1.74669 3.50967C-1.14974 7.38032 -0.359982 12.8661 3.51066 15.7626C6.61989 18.0892 10.8903 18.0892 13.9996 15.7626L17.8722 19.6352C18.3588 20.1218 19.1479 20.1218 19.6345 19.6352C20.1211 19.1485 20.1211 18.3595 19.6345 17.8729L19.6345 17.8712ZM8.7874 15.0151C5.34736 15.0151 2.55868 12.2265 2.55868 8.78641C2.55868 5.34637 5.34736 2.55769 8.7874 2.55769C12.2274 2.55769 15.0161 5.34637 15.0161 8.78641C15.0125 12.2249 12.2259 15.0115 8.7874 15.0151Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_133">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </header>
        <main className="product-main">
            <img src={product.image} alt="" className="hero-img" />
            <h1 className="product-name">{product.name} {product.summary}</h1>
            <p className="product-details"><span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9781 15.5435L8.00013 11.8848L3.02213 15.5435L4.93346 9.63481L-0.0418701 5.99948H6.1008L8.00013 0.0808105L9.89946 5.99948H16.0415L11.0668 9.63481L12.9781 15.5435Z" fill="#FF9633" />
                </svg>
                {product.rating.toFixed(1)}</span> - <span>{product.time} mins</span>
            </p>
            <p className="product-description">
                {product.description}
            </p>
            <section className="product-order">
                <div className="product-spicy">
                    <p>Spicy</p>
                    <progress max="10" value={product.heat} id="" />

                    <div className="product-heat">
                        <p>Mild</p>
                        <p>Hot</p>
                    </div>
                </div>
                <div className="product-portions">
                    <button onClick={() => setCount(count + 1)}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7H12" stroke="white" stroke-width="3" stroke-linecap="round" />
                            <path d="M7 12L7 2" stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>

                    </button>
                    <p>{count}</p>
                    <button onClick={() => setCount(Math.max(0, count - 1))}>
                        <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H12" stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
            </section>
            <section className="product-order">
                <p className="product-price">$ {product.price * count}</p>
                <button className="add-to-cart" disabled={count === 0}>Order now</button>
            </section>
        </main>
    </>
}