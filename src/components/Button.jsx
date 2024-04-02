import { useTheme } from "../themes/ThemeContext";

function ButtonTheme () {
    const {theme, changeTheme} = useTheme()
    const handleChangeTheme = () => {
        const newTheme = theme==='light' ? 'dark' : 'light';
        changeTheme(newTheme)
    }
    return (
        <>
            <button type="button" onClick={handleChangeTheme}>Light/dark</button>
        </>
    )
}

export default ButtonTheme