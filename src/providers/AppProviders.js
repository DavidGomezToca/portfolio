import { ThemeProvider } from '../contexts/ThemeContext'
import { TranslationsProvider } from '../contexts/TranslationsContext'

const AppProviders = ({ children }) => {
  return (
    <TranslationsProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </TranslationsProvider>
  )
}

export default AppProviders