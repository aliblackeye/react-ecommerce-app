import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({fontSize:"12px"})};
`

function Announcement() {
    return (
        <Container>
            Süper Fırsat! 200 TL ve üzeri alışverişlerde kargo ücretsiz!
        </Container>
    )
}

export default Announcement