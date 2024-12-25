import { ThemeProvider } from "../contexts/ThemeContext"
import { TranslationsProvider } from "../contexts/TranslationsContext"
import { WindowSizeProvider } from "../contexts/WindowSizeContext"

const AppProviders = ({ children }) => {
  return (
    <TranslationsProvider>
      <ThemeProvider>
        <WindowSizeProvider>
          {children}
        </WindowSizeProvider>
      </ThemeProvider>
    </TranslationsProvider>
  )
}

export default AppProviders