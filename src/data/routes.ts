import { Route } from "src/types/navbar"
import { CgHome } from "@react-icons/all-files/cg/CgHome"
import { nanoid } from "nanoid"

export const RouteData: Route[] = [
  {
    href: "/",
    text: "Home",
    ariaLabel: "home",
    Icon: CgHome,
    uid: nanoid(),
  },
  {
    href: "/links",
    text: "Links",
    uid: nanoid(),
  },
  {
    href: "/blog",
    text: "Blog",
    type: "dropdown",
    uid: nanoid(),
  },
  {
    href: "/projects",
    text: "Projects",
    type: "dropdown",
    uid: nanoid(),
  },
]
