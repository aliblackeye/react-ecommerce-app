import { popularProducts } from "../data"
import styled from "styled-components"
import Product from "./Product"
import { mobile } from "../responsive"
import { useEffect, useState } from "react"
import axios from "axios"
import { areArraysEqual } from "@mui/base"

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${mobile({ padding: "10px" })}
`

const Image = styled.img`

`

function Products({ category, filters, sort }) {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await axios.get(category ? `http://localhost:5000/products?category=${category}` : `http://localhost:5000/products/`)
                setProducts(data);
            } catch (err) {
                console.log(err)
            }
        }
        getProducts();
    }, [category])

    useEffect(() => {
        category && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        )

    }, [products, category, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        }
        else if (sort === "asc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
        }
        else {
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    return (
        <Container>
            {category ? filteredProducts.map(item => (
                <Product item={item} key={item.id} />
            )) : products.slice(0,8).map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products