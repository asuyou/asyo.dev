import { useState } from "react"

export default function getStorageValue(key: string, defaultValue: any) {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : defaultValue
    } catch {
      return defaultValue
    }
  })

  const setValue = (value: any) => {
    try {
      localStorage.setItem(key, value)
      setStorageValue(value)
    } catch {
      setStorageValue(value)
    }
  }

  return [storageValue, setValue]
}
