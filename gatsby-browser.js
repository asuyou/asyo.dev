import "./src/styles/global.css"
import { Toaster } from "react-hot-toast"
import React from "react"
import "@fontsource/inter"
import { AnimatePresence } from "framer-motion"
export const wrapPageElement = ({ element }) => (
  <>
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    <Toaster
      position="top-right"
      toastOptions={{
        className: "",
      }}
    />
  </>
)
