import styled from "styled-components"
import { categories } from "../data.js"
import { mobile } from "../responsive.js"
import CategoryItem from "./CategoryItem.jsx"


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({flexDirection: 'column',padding:"0"})};
    
`

function Categories() {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories