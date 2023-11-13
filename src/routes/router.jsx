import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "../pages/notFound/notFound"
import { ROUTES } from "./routes"

function AppRouter() {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.meta.title}
            path={route.path}
            element={route.component}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
