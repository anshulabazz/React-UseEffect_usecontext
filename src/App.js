import React, { useState ,useEffect} from 'react'
import './App.css';
import Login from './component/Login/Login'
import MainHeader from './component/Navigation/MainHeader'
import Home from './component/Home/Home'
import AuthContext from './component/Store/Auth-Context'
function App(props) {
    const [islogged, setLogged] = useState(false)
    useEffect(() => {
        const online = window.localStorage.getItem("1")
        if (online === "2") {
            setLogged(true)
        }
    },[])

    const loginHandler = (email,password) => {
        setLogged(true)
        window.localStorage.setItem("1","2")
    }
    const logoutHandler = () => {
        window.localStorage.removeItem("1")
        setLogged(false)
    }
    return (
        <Auth.Context value={{ isloggedIN: isLogged,  onlogout: loginHandler }}>
            <MainHeader isLogin={islogged} onLogout={ logoutHandler} />
            <main>
                {!islogged && <Login setCred={loginHandler} />}
               {islogged && < Home />}
            </main>
        </Auth.Context>
  );
}

export default App;
