import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"
import { useSelector } from "react-redux"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    ${mobile({ marginBottom: "20px" })}
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "2px solid transparent"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "#fff"};

    transition: all 0.5s ease;

    &:hover {
        border: ${props => props.type === "filled" ? "2px solid black" : "2px solid transparent"};
        background-color: ${props => props.type === "filled" ? "#fff" : "teal"};
        color: ${props => props.type === "filled" ? "#333" : "#fff"};
    }
    
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex:3;
`


const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    ${mobile({ padding: "0", flexDirection: "column" })}
`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;

    ${mobile({ width: "150px", height: "150px" })}
`

const Details = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`
    
`

const ProductId = styled.span`
    
`

const ColorContainer = styled.div`
    display: flex;
    gap: 10px;
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid teal;
    font-size: 24px;
    margin: 5px;;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

    ${mobile({ marginBottom: "20px" })}
`

const Splitter = styled.div`

    margin: 5px 0;
    height: 1px;
    width: 100%;
    background-color: #eee;
`


const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

    ${mobile({ marginTop: "20px" })}
`

const SummaryTitle = styled.h1`
    font-weight: 300;

`

const SummaryItem = styled.div`
    margin: 30px 0;
    display:flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span`


`

const SummaryItemPrice = styled.span`


`

const Button = styled.button`
    width: 100%;
    padding:10px;
    background: black;
    color:#fff;
    font-weight:600;
    cursor: pointer;

    transition: all 0.5s ease;

    &:hover {
        background-color: #fff;
        color: black;
    }
`


function Cart() {

    const cart = useSelector(state => state.cart)

    return (
        <Container>
            <Wrapper>
                <Title>Sepetim</Title>
                <Top>
                    <TopButton>Alışverişe Devam Et</TopButton>
                    <TopTexts>
                        <TopText>Alışveriş Sepeti({cart.products.length})</TopText>
                        <TopText>İstek Listesi (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Alışverişi Tamamla</TopButton>
                </Top>
                <Bottom>
                    <Info>

                        {cart.products.map(product => (
                            <>
                                <Product>
                                    <ProductDetail>
                                        <Image src={product.img}/>
                                        <Details>
                                            <ProductName><b>Ürün:</b> {product.title}</ProductName>
                                            <ProductId><b>ID:</b> {product._id}</ProductId>
                                            <ColorContainer>Renk: <ProductColor color={`${product.color}`} /></ColorContainer>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Add style={{ cursor: "pointer" }} />
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Remove style={{ cursor: "pointer" }} />
                                        </ProductAmountContainer>
                                        <ProductPrice>{product.price * product.quantity}</ProductPrice>
                                    </PriceDetail>
                                </Product>

                                <Splitter />
                            </>
                        ))

                        }

                    </Info>
                    <Summary>
                        <SummaryTitle>ÖZET</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Sepet Tutarı</SummaryItemText>
                            <SummaryItemText>{cart.total} TL</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Kargo Ücreti</SummaryItemText>
                            <SummaryItemText>15 TL</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Kargo İndirimi</SummaryItemText>
                            <SummaryItemText>-15 TL</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Toplam Tutar</SummaryItemText>
                            <SummaryItemText>{cart.total} TL</SummaryItemText>
                        </SummaryItem>
                        <Button>ALIŞVERİŞİ TAMAMLA</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart