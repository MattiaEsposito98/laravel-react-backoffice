import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import GlobalProvider from './context/GlobalContext'
function App() {

  return (
    <>
      <h1>ciao</h1>
      <GlobalProvider>
        <ul>

        </ul>
      </GlobalProvider >
    </>
  )
}

export default App
