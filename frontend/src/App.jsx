import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import GlobalProvider from './context/GlobalContext'
import Header from "./layouts/Header"
function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Header}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider >
    </>
  )
}

export default App
