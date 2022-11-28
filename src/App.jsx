import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header"
import {Search} from "./components/pages/Buscar"
import { Register } from "./components/Register/Register"
import './App.css'
import { Pie } from './components/Footer/Pie'
import { Login } from "./components/Login/Login"
import NotFoundPage from "./components/pages/NotFoundPages"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="Registro" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Pie />
      </Router>
    </div>
  )
}

export default App
