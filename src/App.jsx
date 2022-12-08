import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import Wallet from './components/Wallet'
import Paymentform from './components/Paymentform'

function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/signin" element={ <Signin/> } />
          <Route path="/wallet" element={ <Wallet/> } />
          <Route path="/paymentform" element={ <Paymentform /> } />

        </Routes>
      </BrowserRouter>
  )
}

export default App;
