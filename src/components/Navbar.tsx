import * as React from "react"
import { Link } from "gatsby"
import { RouteData } from "src/data/routes"
import { Route } from "src/types/navbar"
import Dropdown from "components/Dropdown"
import ToggleTheme from "components/ToggleTheme"

export const NavbarItem = ({ href, text, Icon, ariaLabel }: Route) => {
  return (
    <Link
      to={href}
      className="navbar-item text-custom-muted underline mx-4 ul-anim"
      activeClassName="text-custom-primary font-semibold"
    >
      {Icon && <Icon className="fill-current" aria-label={ariaLabel} />}
      {!Icon && text}
    </Link>
  )
}

const Navbar = () => {
  return (
    <nav className="bg-custom-accent flex justify-center items-center rounded p-2 mt-2 ">
      {RouteData.filter((route: Route) => route.type !== "dropdown").map(
        (route: Route) => (
          <NavbarItem
            text={route.text}
            href={route.href}
            Icon={route.Icon}
            ariaLabel={route.ariaLabel}
            key={route.uid}
          />
        )
      )}
      <Dropdown className="navbar-item navbar-color" />
      <ToggleTheme className="navbar-item navbar-color mx-4" />
    </nav>
  )
}
export default Navbar
