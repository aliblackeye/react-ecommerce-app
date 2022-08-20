import React from 'react'
import styled from 'styled-components'

import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

import { mobile, smallMobile } from '../responsive'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })};
    
    
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};

`

const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
    ${mobile({ display: "none" })};
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

    ${mobile({ marginLeft: "15px" })};
    ${smallMobile({ marginLeft: "5px" })};
`

const Input = styled.input`
    border:none;
    outline: none;
    ${mobile({ width: "60px" })};
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex:1;
    text-align: center;

`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })};
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    gap:25px;
    ${mobile({ justifyContent: 'center', flex: "2", gap: "6px" })};


`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;


    ${mobile({ fontSize: "12px" })};
    ${smallMobile({ fontSize: "12px" })};


    
`


function Navbar({ user }) {
    const quantity = useSelector(state => state.cart.quantity);


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>TR</Language>
                    <SearchContainer>
                        <Input placeholder='Ürün ara' />
                        <SearchIcon style={{ cursor: "pointer", color: "gray", fontSize: "16" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo><NavLink to="/">Keypi</NavLink></Logo>
                </Center>
                <Right>


                    {user

                        ?
                        <>
                            <Link to="/"><MenuItem>ÜRÜNLER</MenuItem></Link>
                            <Link to="/profile"><MenuItem>HESABIM</MenuItem></Link>
                        </>
                        :
                        <>
                            <Link to="/register"><MenuItem>KAYIT OL</MenuItem></Link>
                            <Link to="/login"><MenuItem>GİRİŞ YAP</MenuItem></Link>
                        </>


                    }

                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary" max={9}>
                                <ShoppingCartOutlined color="action" />
                            </Badge>

                        </MenuItem>
                    </Link>


                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar