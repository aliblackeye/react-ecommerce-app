import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0080801b;

  display: flex;
  justify-content: center;
  align-items: center;

`

const Wrapper = styled.div`
  width: 40%;
  padding:20px;
  background-color: #fff;
  ${mobile({width:"80%"})}
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 20px;
`

const Form = styled.form`
  display:flex;
  flex-wrap: wrap;
  gap: 20px;
`

const Input = styled.input`
   width: 100%;
   padding: 10px;
   border: 2px solid #acacac;
   outline:0;
`

const Agreement = styled.span`
  font-size: 14px;
  ${mobile({fontSize:"12px"})}
`

const Button = styled.button`
  background-color: teal;
  color: #fff;
  border: 1px solid transparent;
  padding: 10px 40px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    border: 1px solid #333;
    color: #333;
  }
`

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Kayıt Ol</Title>
        <Form>
          <Input placeholder="Ad" />
          <Input placeholder="Soyad" />
          <Input placeholder="E-Posta" />
          <Input placeholder="Şifre" />
          <Input placeholder="Tekrar Şifre" />
          <Agreement>
            Kişisel verileriniz, <b>Aydınlatma Metni</b> kapsamında işlenmektedir. Üyelik Sözleşmesi’ni, Rıza Metni’ni, <b>Çerez Politikası</b>’nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
          </Agreement>

          <Button>Kayıt Ol</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register