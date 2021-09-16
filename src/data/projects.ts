import { Project } from "src/types/projects"
import { nanoid } from "nanoid"

// Icons
import { SiRust } from "@react-icons/all-files/si/SiRust"

export const ProjectData: Project[] = [
  {
    name: "pi-range",
    desc: "A small project to get the basics of Rust. Sends a range sensor data via web sockets",
    href: "https://github.com/asuyou/pi-range",
    Icon: SiRust,
    uid: nanoid(),
  },
]
