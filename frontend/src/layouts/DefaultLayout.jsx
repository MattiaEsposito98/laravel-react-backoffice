import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Loader from "../components/Loader"

export default function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        {isLoading && <Loader />}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}