import { Social } from "src/types/socials"
import { nanoid } from "nanoid"

// Icons
import { CgLink } from "@react-icons/all-files/cg/CgLink"
import { CgScreen } from "@react-icons/all-files/cg/CgScreen"
import { IoLogoDiscord } from "@react-icons/all-files/io5/IoLogoDiscord"
import { IoLogoGithub } from "@react-icons/all-files/io5/IoLogoGithub"
import { SiSteam } from "@react-icons/all-files/si/SiSteam"

export const SocialData: Social[] = [
  {
    name: "Discord",
    type: "open",
    href: "https://discordapp.com/users/350708685481312257",
    data: "asyo#0001",
    desc: "A link to my discord profile",
    Icon: IoLogoDiscord,
    uid: nanoid(),
  },
  {
    name: "Github",
    type: "open",
    href: "https://github.com/asuyou",
    desc: "It's not got much since I just migrated",
    Icon: IoLogoGithub,
    uid: nanoid(),
  },
  {
    name: "Anilist",
    type: "open",
    href: "https://anilist.co/user/asyo/",
    desc: "My anime list",
    Icon: CgScreen,
    uid: nanoid(),
  },
  {
    name: "Steam",
    type: "open",
    href: "https://steamcommunity.com/id/asyo",
    desc: "My steam",
    Icon: SiSteam,
    uid: nanoid(),
  },
  {
    name: "Site",
    type: "copy",
    href: "asyo.dev",
    Icon: CgLink,
    uid: nanoid(),
  },
]
