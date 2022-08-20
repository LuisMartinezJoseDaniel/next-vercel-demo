import styles from "./Navbar.module.css"
import { ActiveLink } from "./ActiveLink"
//Menu semidinamico
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];


export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({text, href}) => (
        <ActiveLink key={href} href={href}>{ text }</ActiveLink>
      ))}
    </nav>
  );
}
