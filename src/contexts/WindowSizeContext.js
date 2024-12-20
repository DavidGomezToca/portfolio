import { createContext, useState, useEffect, useContext } from 'react'

const WindowSizeContext = createContext()

export const useWindowSize = () => useContext(WindowSizeContext)

export const WindowSizeProvider = ({ children }) => {
    const [isBelow1100px, setIsBelow1100px] = useState(window.innerWidth <= 1100)

    useEffect(() => {
        const handleResize = () => {
            setIsBelow1100px(window.innerWidth <= 1100)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <WindowSizeContext.Provider value={isBelow1100px}>
            {children}
        </WindowSizeContext.Provider>
    )
}