import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonTheme from '../components/Button';
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import MyJob from '../pages/MyJob';
import { useTheme } from '../themes/ThemeContext';

function RoutesApp () {
    const {theme} = useTheme()
    return (
        <Router>
            <section className={`App ${theme}`}>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/myjob" element={<MyJob/>}></Route>
                </Routes>
            </section>
            <ButtonTheme />
        </Router>
    )
}

export default RoutesApp