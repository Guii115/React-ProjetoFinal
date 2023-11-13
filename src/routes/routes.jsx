import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Home from "../pages/home/home"

export const ROUTES = [
  {
    path: "/",
    label: "Cadastro",
    meta: {
      title: "Cadastro",
      description: "",
      keywords: "",
    },
    icon: "",
    component: <SignIn />,
  },
  {
    path: "/signup",
    label: "Login",
    meta: {
      title: "Login",
      description: "",
      keywords: "",
    },
    icon: "",
    component: <SignUp />,
  },
  {
    path: "/home",
    label: "Home",
    meta: {
      title: "HomePage",
      description: "",
      keywords: "",
    },
    icon: "",
    component: <Home />,
  },
]
