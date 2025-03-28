import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import GlobalProvider from './context/GlobalContext'
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import Show from "./pages/Show";
import 'animate.css';


function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={DefaultLayout}>
              <Route index Component={HomePage}></Route>
              <Route path="/:id" Component={Show}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider >
    </>
  )
}

export default App
