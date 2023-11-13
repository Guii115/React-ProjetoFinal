import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "./LocalStorageUtils"

export const handleSubmit = (formData) => {
  const dadosUsuario = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    date: formData.date,
    state: formData.state,
    country: formData.country,
  }

  const dadosAntigos = getDataFromLocalStorage("dadosUsuarios") || []
  const novosDados = [...dadosAntigos, dadosUsuario]

  saveDataToLocalStorage("dadosUsuarios", novosDados)
}
