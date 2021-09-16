import * as React from "react"
import { CgChevronDown } from "@react-icons/all-files/cg/CgChevronDown"
import { motion, AnimatePresence } from "framer-motion"
import { RouteData } from "src/data/routes"
import { NavbarItem } from "components/Navbar"

interface props {
  className?: string
}

const Dropdown = (props: props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="flex mx-2">
      <motion.button
        animate={isOpen ? { rotate: 180 } : {}}
        onClick={() => setIsOpen(!isOpen)}
        className={props.className}
        transition={{
          type: "spring",
          bounce: 1,
          duration: 0.2,
        }}
      >
        <CgChevronDown aria-label="Toggle dropdown" />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onMouseLeave={() => setIsOpen(false)}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.2,
            }}
            className="absolute text-custom-muted m-10 ml-0 p-2 rounded flex flex-col bg-custom-accent"
          >
            {RouteData.filter(route => route.type == "dropdown").map(route => (
              <NavbarItem
                href={route.href}
                text={route.text}
                Icon={route.Icon}
                ariaLabel={route.ariaLabel}
                key={route.uid}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown
