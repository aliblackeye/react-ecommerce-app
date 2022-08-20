import "./login.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";


function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password })
  }

  return (
    <div className="login">
      <div className="login-container">
        <form>
          <h1>Giriş Yap</h1>
          <div className="form-input">
            <label>E-Posta</label>
            <input required type={"email"} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-input">
            <label>Şifre</label>
            <input required type={"password"} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" onClick={handleClick}>Giriş</button>
        </form>
      </div>
    </div>
  )
}

export default Login