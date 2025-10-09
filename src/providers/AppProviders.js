import { ThemeProvider } from "../contexts/ThemeContext"
import { WindowSizeProvider } from "../contexts/WindowSizeContext"
import { TranslationsProvider } from "../contexts/TranslationsContext"

/**
 * @component App Providers.
 * @param {object} children - The child of the component.
 * @returns {JSX.Element} - The App Providers component.
 */
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