import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext)

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}