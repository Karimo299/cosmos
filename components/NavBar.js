import Link from "next/link";
import { useRouter } from "next/router";

import NavStyles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (  
    <nav id ={NavStyles.nav}>
      <ul>
        <li>
          <Link href="/" className={NavStyles.current}> Home </Link>
        </li>
        <li>
          <Link href="/liked"> Liked </Link>
        </li>
      </ul>
      <div id={NavStyles.userInfo}>
        <p>Cosmos</p>
      </div>
    </nav>
  );
}
