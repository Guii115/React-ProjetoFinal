import "./SignUp.css"
import loginSVG from "../assets/login.svg"
import userSVG from "../assets/user.svg"
import userPreenchidoSVG from "../assets/userPreenchido.svg"
import passwordSVG from "../assets/password.svg"
import passwordPreenchidoSVG from "../assets/passwordPreenchida.svg"
import { getDadosUsuarios } from "../SignIn/LocalStorageUtils"
import { useFocus } from "../../hooks/focus"

function SignUp() {
  function handleLoginSubmit(e) {
    e.preventDefault()
    const username = document.getElementById("loginName").value
    const password = document.getElementById("passwordName").value

    const users = getDadosUsuarios()
    const user = users.find(
      (u) => u.name === username && u.password === password
    )

    if (user) {
      alert("Login bem-sucedido!")
      window.location.href = "/home"
    } else {
      alert("Usuário ou senha incorretos")
    }
  }
  const { isPasswordFocused, handlePasswordFocus, handlePasswordBlur } =
    useFocus()
  const { isUserFocused, handleUserFocus, handleUserBlur } = useFocus()

  return (
    <>
      <div className="signInAndSignUp">
        <form id="signUp" className="formStyles" onSubmit={handleLoginSubmit}>
          <fieldset>
            <h1 className="titleForm">
              <img src={loginSVG} alt="" />
              Login
            </h1>
            <hr className="line" />
            <label htmlFor="loginName">Usuário:</label>
            <div className="inputContainer">
              <input
                type="text"
                name="loginName"
                id="loginName"
                placeholder="Digite seu usuário..."
                onFocus={handleUserFocus}
                onBlur={handleUserBlur}
              />
              <img
                className="iconInputs"
                src={isUserFocused ? userPreenchidoSVG : userSVG}
                alt=""
              />
            </div>

            <label htmlFor="passwordName">Senha:</label>
            <div className="inputContainer">
              <input
                type="password"
                name="passwordName"
                id="passwordName"
                placeholder="Digite sua senha..."
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <img
                className="iconInputs"
                src={isPasswordFocused ? passwordPreenchidoSVG : passwordSVG}
                alt=""
              />
            </div>
          </fieldset>
          <hr className="line" />
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </>
  )
}

export default SignUp
