import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"
import { publicRequest } from "../requestMethods"
import { mobile } from "../responsive"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    gap:40px;

    ${mobile({ flexDirection: "column" })}
`

const ImageContainer = styled.div`
    flex:1;

`

const InfoContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    flex:1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({ height: "40vh" })}
`

const Title = styled.h1`
    font-weight: 300;
    font-size: 40px;

    ${mobile({ fontSize: "30px" })}
`

const Desc = styled.p`
    font-size: 18px;

    ${mobile({ fontSize: "16px" })}
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;

    ${mobile({ fontSize: "30px" })}
`

const FilterContainer = styled.div`
    display: flex;
`

const Filter = styled.div`
    display:flex;
    align-items: center;
    gap: 6px;
`

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    margin-bottom: -2px;
    border-radius: 50%;
    
    filter: brightness(0.95);
    background-color: ${props => (props.color)};
    cursor: pointer;
`



const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;

    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 0 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: #fff;
font-weight: 500;
cursor: pointer;
transition: all 0.3s ease;

    &:hover {
    background-color: teal;
    color: #fff;
}
`

function Product() {

    const location = useLocation()
    const productId = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await publicRequest.get("/products/find/" + productId)
                setProduct(data);
            }
            catch (err) {
                console.log(err);
            }
        }

        getProduct();
    }, [productId]);


    const handleQuantity = (type) => {
        type === "inc" ? setQuantity(quantity + 1) : setQuantity(quantity > 1 ? quantity - 1 : 1);
    }

    const handleCart = () => {
        // update cart
        dispatch(addProduct({ ...product,quantity,color}))
    }

    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price} TL</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Renk:</FilterText>

                            {
                                product ? product.color?.map((c) => (

                                    <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                                )) : null

                            }

                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} style={{ cursor: "pointer" }} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} style={{ cursor: "pointer" }} />
                        </AmountContainer>
                        <Button onClick={handleCart}>SEPETE EKLE</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default Product