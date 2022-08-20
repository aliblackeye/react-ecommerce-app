import { Send } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize: "40px"})};
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    border: 0;
    outline: 0;
    padding: 0px 10px;
    flex: 8;
`

const Button = styled.button`

    background-color: teal;
    color:#fff;
    border:0;
    cursor: pointer;
    flex: 1;
`


function Newsletter() {
    return (
        <Container>
            <Title>Haber Bülteni</Title>
            <Desc>Yeni ürünlerden haberdar ol.</Desc>
            <InputContainer>
                <Input placeholder='E-Posta adresi' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter