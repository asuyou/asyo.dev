import { useEffect, useState } from "react"

export default function usePrefersDarkMode() {
  const [value, setValue] = useState(true)
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
    setValue(prefersDark.matches)
  }, [])
  return value
}
