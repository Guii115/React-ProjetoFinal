// FocusContext.js
import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

const FocusContext = createContext()

export const FocusProvider = ({ children }) => {
  const [isUserFocused, setIsUserFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [isEmailFocused, setIsEmailFocused] = useState(false)

  const handleUserFocus = () => {
    setIsUserFocused(true)
  }

  const handleUserBlur = () => {
    setIsUserFocused(false)
  }

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true)
  }

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false)
  }

  const handleEmailFocus = () => {
    setIsEmailFocused(true)
  }

  const handleEmailBlur = () => {
    setIsEmailFocused(false)
  }

  return (
    <FocusContext.Provider
      value={{
        isUserFocused,
        handleUserFocus,
        handleUserBlur,
        isPasswordFocused,
        handlePasswordFocus,
        handlePasswordBlur,
        isEmailFocused,
        handleEmailFocus,
        handleEmailBlur,
      }}
    >
      {children}
    </FocusContext.Provider>
  )
}

FocusProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useFocus = () => {
  const context = useContext(FocusContext)
  if (!context) {
    throw new Error("useFocus deve ser usado dentro de um FocusProvider")
  }
  return context
}
