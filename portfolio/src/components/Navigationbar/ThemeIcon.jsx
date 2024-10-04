import { useTheme } from "../Toggle/Toggle";



const Toggle = () => {
    const {theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    )

}

export default Toggle;