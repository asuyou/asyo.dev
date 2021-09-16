import * as React from "react"
import { isDarkMode } from "src/hooks/useDarkMode"
import { CgSun } from "@react-icons/all-files/cg/CgSun"
import { CgMoon } from "@react-icons/all-files/cg/CgMoon"

const ToggleTheme = props => {
  const [isDark, setDarkMode] = isDarkMode()
  return (
    <button
      onClick={() => setDarkMode(!isDark)}
      aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
      {...props}
    >
      {isDark ? <CgSun /> : <CgMoon />}
    </button>
  )
}

export default ToggleTheme
