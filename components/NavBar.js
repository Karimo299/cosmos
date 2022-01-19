// Imports Needed
import Link from "next/link";
import { useRouter } from "next/router";
import NavStyles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={NavStyles.nav}>
      <ul>
        <li>
          <NavLink href="/" exact={true} className="links">Home</NavLink>
        </li>
        <li>
          <NavLink href="/likes" exact={true} className="links">Likes</NavLink>
        </li>
      </ul>
      <div className={NavStyles.userInfo}>
        <p>Cosmos</p>
      </div>
    </nav>
  );
}

function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  if (isActive) {
    props.className += ` ${NavStyles.active}`;
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
