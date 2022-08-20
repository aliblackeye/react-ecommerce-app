import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
 flex:1;
 margin: 3px;
 position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;


`
const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #fff;
    color: gray;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover {
        transform: scale(1.2);
    }
    
    
`

function CategoryItem({ item }) {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.category}`}>
                    <Button>İNCELE</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem