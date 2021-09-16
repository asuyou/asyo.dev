import { useEffect } from "react"
import usePrefersDarkMode from "src/hooks/prefersDarkMode"
import localStorage from "src/hooks/localStorage"

export function isDarkMode() {
  const prefersDark = usePrefersDarkMode()
  const [isEnabled, setEnabled] = localStorage("dark", undefined)

  const enabled = isEnabled === undefined ? prefersDark : isEnabled

  useEffect(() => {
    if (window === undefined) return
    const root = window.document.documentElement
    root.classList.add(enabled ? "dark" : "light")
    root.classList.remove(enabled ? "light" : "dark")
  }, [enabled])

  return [enabled, setEnabled]
}
