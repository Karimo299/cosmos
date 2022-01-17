import { Main } from "next/document";
import NavBar from "../components/NavBar";
import LayoutStyles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={LayoutStyles.container}>
        <NavBar />
        <div className={LayoutStyles.main}>
            {children}
        </div>
      </div>
    </>
  );
}
