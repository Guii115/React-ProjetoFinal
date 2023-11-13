import "bootstrap/dist/css/bootstrap.css"
import "./SignIn.css"
import { useState, useEffect } from "react"
import { handleSubmit } from "./formData"
import registerSVG from "../assets/register.svg"
import userSVG from "../assets/user.svg"
import userPreenchidoSVG from "../assets/userPreenchido.svg"
import passwordSVG from "../assets/password.svg"
import passwordPreenchidoSVG from "../assets/passwordPreenchida.svg"
import emailSVG from "../assets/email.svg"
import emailPreenchidoSVG from "../assets/emailPreenchido.svg"
import { useFocus } from "../../hooks/focus"

function SignIn() {
  const [redirect, setRedirect] = useState(false)
  const [selectState, setSelectState] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    state: "",
    country: "",
  })

  const statesOfCountrys = {
    "Estados Unidos": [
      "Califórnia",
      "Texas",
      "Nova York",
      "Flórida",
      "Illinois",
      "Pensilvânia",
      "Ohio",
      "Geórgia",
      "Carolina do Norte",
      "Michigan",
    ],
    China: [
      "Pequim",
      "Xangai",
      "Cantão (Guangzhou)",
      "Shenzhen",
      "Tianjin",
      "Hong Kong",
      "Macau",
      "Chongqing",
      "Chengdu",
      "Wuhan",
    ],
    Índia: [
      "Uttar Pradesh",
      "Maharashtra",
      "Bihar",
      "Bengala Ocidental",
      "Andhra Pradesh",
      "Tamil Nadu",
      "Karnataka",
      "Gujarat",
      "Rajasthan",
      "Odisha",
    ],
    Brasil: [
      "Amapá",
      "Acre",
      "Amazonas",
      "São Paulo",
      "Rio de Janeiro",
      "Minas Gerais",
      "Bahia",
      "Brasília",
      "Paraná",
      "Rio Grande do Sul",
      "Pernambuco",
      "Sergipe",
      "Espírito Santo",
      "Santa Catarina",
      "Goiás",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Piauí",
      "Maranhão ",
      "Ceará ",
      "Paraíba ",
    ],
    Rússia: [
      "Moscou",
      "São Petersburgo",
      "Novosibirsk",
      "Ecaterimburgo",
      "Nijni Novgorod",
      "Cazã",
      "Cheliabinsk",
      "Omsk",
      "Samara",
      "Rostov do Don",
    ],
    Japão: [
      "Tóquio",
      "Osaka",
      "Quioto",
      "Hokkaido",
      "Aichi",
      "Kanagawa",
      "Hyogo",
      "Fukuoka",
      "Chiba",
      "Saitama",
    ],
    Alemanha: [
      "Renânia do Norte-Vestfália",
      "Baviera",
      "Baixa Saxônia",
      "Baden-Württemberg",
      "Hesse",
      "Renânia-Palatinado",
      "Brandemburgo",
      "Saxônia",
      "Sarre",
      "Schleswig-Holstein",
    ],
    "Reino Unido": [
      "Londres",
      "Manchester",
      "Birmingham",
      "Edimburgo",
      "Glasgow",
      "Cardiff",
      "Belfast",
    ],
    França: [
      "Île-de-France (região de Paris)",
      "Auvergne-Rhône-Alpes",
      "Nouvelle-Aquitaine",
      "Occitanie",
      "Hauts-de-France",
      "Provence-Alpes-Côte d'Azur",
      "Grand Est",
      "Pays de la Loire",
      "Bretanha",
      "Centre-Val de Loire",
    ],
    Canadá: [
      "Ontário",
      "Quebec",
      "Colúmbia Britânica",
      "Alberta",
      "Manitoba",
      "Saskatchewan",
      "Nova Escócia",
      "Novo Brunswick",
      "Terra Nova e Labrador",
      "Ilha do Príncipe Eduardo",
    ],
    Austrália: [
      "Nova Gales do Sul",
      "Victoria",
      "Queensland",
      "Austrália Ocidental",
      "Austrália do Sul",
      "Tasmânia",
      "Território da Capital Australiana",
      "Território do Norte",
    ],
    Itália: [
      "Lombardia",
      "Lácio",
      "Campânia",
      "Sicília",
      "Vêneto",
      "Emília-Romanha",
      "Piemonte",
      "Apúlia",
      "Toscana",
      "Calábria",
    ],
    Espanha: [
      "Catalunha",
      "Madrid",
      "Andaluzia",
      "Catalunha",
      "Comunidade Valenciana",
      "Galícia",
      "País Basco",
      "Castela e Leão",
      "Castela-Mancha",
      "Ilhas Canárias",
    ],
    México: [
      "Cidade do México",
      "Estado do México",
      "Jalisco",
      "Veracruz",
      "Puebla",
      "Guanajuato",
      "Nuevo León",
      "Chiapas",
      "Oaxaca",
      "Chihuahua",
    ],
    "Coreia do Sul": [
      "Seul",
      "Busan",
      "Incheon",
      "Daegu",
      "Daejeon",
      "Gwangju",
      "Ulsan",
      "Sejong",
      "Gyeonggi",
      "Gangwon",
    ],
    "Arábia Saudita": [
      "Riade",
      "Meca",
      "Medina",
      "Al-Ola",
      "Jidá",
      "Dammam",
      "Khobar",
      "Abha",
      "Jazan",
      "Najran",
    ],
  }

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value
    setFormData({ ...formData, country: selectedCountry, state: "" })
    setSelectState(selectedCountry === "Brasil")
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(formData)

    setFormData({
      name: "",
      email: "",
      password: "",
      date: "",
      state: "",
      country: "",
    })

    setRedirect(true)
  }

  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.target.value })
  }

  const { isPasswordFocused, handlePasswordFocus, handlePasswordBlur } =
    useFocus()
  const { isUserFocused, handleUserFocus, handleUserBlur } = useFocus()

  const { isEmailFocused, handleEmailFocus, handleEmailBlur } = useFocus()

  useEffect(() => {
    if (redirect) {
      window.location.href = "/signup"
    }
  }, [redirect])

  return (
    <>
      <div className="signInAndSignUp">
        <form id="signIn" className="formStyles" onSubmit={handleFormSubmit}>
          <fieldset>
            <h1 className="titleForm">
              <img src={registerSVG} alt="Register SVG" />
              Cadastro
            </h1>
            <hr className="line" />

            <label htmlFor="name">Nome Completo </label>
            <div className="inputContainer">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Digite seu nome..."
                minLength={3}
                maxLength={25}
                pattern="[^\d]+"
                onFocus={handleUserFocus}
                onBlur={handleUserBlur}
              />
              <img
                className="iconInputs"
                src={isUserFocused ? userPreenchidoSVG : userSVG}
                alt=""
              />
            </div>

            <label htmlFor="email">E-mail </label>
            <div className="inputContainer">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="exemplo@gmail.com"
                required
                minLength={10}
                maxLength={255}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
              />
              <img
                className="iconInputs"
                src={isEmailFocused ? emailPreenchidoSVG : emailSVG}
                alt=""
              />
            </div>

            <label htmlFor="password">Senha </label>
            <div className="inputContainer">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Digite sua senha..."
                minLength={8}
                maxLength={25}
                required
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <img
                className="iconInputs"
                src={isPasswordFocused ? passwordPreenchidoSVG : passwordSVG}
                alt=""
              />
            </div>

            <label htmlFor="date">Data de nascimento </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
            />
          </fieldset>

          <fieldset>
            <section>
              <label htmlFor="validationCustom04" className="form-label">
                País{" "}
              </label>
              <select
                className="form-select state border border-primary"
                name="country"
                id="validationCustom04"
                value={formData.country}
                onChange={handleCountryChange}
                required
              >
                <option disabled value="">
                  Selecione um País
                </option>
                <option>Estados Unidos</option>
                <option>China</option>
                <option>Índia</option>
                <option>Brasil</option>
                <option>Rússia</option>
                <option>Japão</option>
                <option>Alemanha</option>
                <option>Reino Unido</option>
                <option>França</option>
                <option>Canadá</option>
                <option>Austrália</option>
                <option>Itália</option>
                <option>Espanha</option>
                <option>México</option>
                <option>Coreia do Sul</option>
                <option>Arábia Saudita</option>
              </select>
            </section>

            <section>
              <label htmlFor="validationCustom04" className="form-label">
                Estado{" "}
              </label>
              <select
                className={`form-select country border border-primary ${
                  selectState ? "" : "disabled"
                }`}
                name="state"
                id="validationCustom05"
                value={formData.state}
                onChange={handleStateChange}
                required
              >
                <option disabled value="">
                  Selecione um Estado
                </option>
                {statesOfCountrys[formData.country]?.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </section>
          </fieldset>
          <hr className="line" />
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </>
  )
}

export default SignIn
