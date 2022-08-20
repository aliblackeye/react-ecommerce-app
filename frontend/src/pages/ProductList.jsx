import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div`
`

const Title = styled.div`
    margin:20px;

    ${mobile({margin:"10px"})}
`

const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`

const Filter = styled.div`
    display:flex;
    align-items: center;
    gap:10px;
    margin:20px;
    ${mobile({margin:"10px"})}
`

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;

    ${mobile({fontSize:"14px"})}
`

const Select = styled.select`
    padding: 10px;
    outline: 0;
    margin-right: 5px;
    ${mobile({padding:"5px"})}
`

const Option = styled.option`

`


function ProductList() {

    const location = useLocation()
    const category = location.pathname.split("/")[2];

    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    

    console.log(filters)

    return (
        <Container>
            <Title>{category === "headphones" && "Kulaklıklar"}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrele:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option value="all">Hepsi</Option>
                        <Option value="black">Siyah</Option>
                        <Option value="white">Beyaz</Option>
                        <Option value="red">Kırmızı</Option>
                        <Option value="blue">Mavi</Option>
                        <Option value="yellow">Sarı</Option>
                        <Option value="green">Yeşil</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sırala:</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">En Yeni</Option>
                        <Option value="desc">Fiyat (azalan)</Option>
                        <Option value="asc">Fiyat (artan)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort}/>
        </Container>
    )
}

export default ProductList