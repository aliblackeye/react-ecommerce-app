import { useState } from "react"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"
import { useDispatch, useSelector } from "react-redux"

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

  ${mobile({ width: "80%" })}
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

const Button = styled.button`
  background-color: teal;
  color: #fff;
  border: 1px solid transparent;
  padding: 10px 40px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  transition: all 0.3s ease;


  &:disabled {
    cursor: default;
    opacity: 0.1;
  }
`

const Link = styled.span`
  display: block;
  margin: 20px 10px 0 0;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;

`

const Error = styled.span`
  color:red;
  font-size:14px;
`

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { email, password });
  }

  return (
    <Container>
      <Wrapper>
        <Title>Giriş Yap</Title>
        <Form>
          <Input placeholder="E-Posta" onChange={(e) => setEmail(e.target.value)} />
          <Input type={"password"} placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>Giriş Yap</Button>
          {error && <Error>Oops! Bir şeyler yanlış gitti.</Error>}

          
        </Form>
        <Link>Şifrenizi mi unuttunuz?</Link>
        <Link>Hesabınız yok mu? Kayıt Ol</Link>
      </Wrapper>
    </Container>
  )
}

export default Login