"use client"

import { useEffect, useState } from "react"
import { Card, Spin ,Button, Typography, Image} from "antd"


export default function MyApp() {

    const [products, setProduct] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    useEffect(fetchProducts, []);



    function fetchProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProduct(json)
                setisLoading(false)

            });
    }



    return (
        <main>
            <Typography.Title className="text-center">Data Coming from backend</Typography.Title>
            {

                isLoading ? <Spin size="large" /> :
                
                <div className="flex flex-wrap justify-center">
                    <MyCard product={products[0]} /> 
                    <MyCard product={products[1]} /> 
                    <MyCard product={products[2]} /> 
                    <MyCard product={products[3]} /> v
                    <MyCard product={products[4]} /> 
                    <MyCard product={products[5]} /> 
                    <MyCard product={products[6]} /> 
                    <MyCard product={products[7]} /> 
                    <MyCard product={products[8]} /> 
                    <MyCard product={products[9]} /> 
                    <MyCard product={products[10]} /> 
                    <MyCard product={products[11]} /> 
                    <MyCard product={products[12]} /> 
                    <MyCard product={products[13]} /> 
                </div>
            }



        </main>
    )


}

function MyCard({ product }) {
    return (
        <Card cover={<Image src={product?.image} alt="product image" width={200} height={200}/>} className="w-1/4 m-4">
            <Typography.Title level={3}>{product?.title}</Typography.Title>
            <p>{product?.description}</p>
            <p>NGN {product?.price}</p>
            <Button>Buy Now</Button>

        </Card>
    )


}