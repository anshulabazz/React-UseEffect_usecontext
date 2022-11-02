import React, { useContext } from 'react'
import style from './Navigation.module.css'
import AuthContext from '../Store/Auth-Context'
const Navigation = (props) => {
    const ctx = useContext(AuthContext)
    return (
        <React.Fragment>
            <nav className={style.nav}>
                <ul>
                    {ctx.isloggedIn &&
                        <li>Home
                    </li>
                    }
                    {ctx.isloggedIn &&
                    <li>Users
                    </li>}
                    {ctx.isloggedIn &&
                        <li><button onClick={ctx.onLogout}>Logout</button>
                        </li>}
                    
                    </ul>
            </nav>
        </React.Fragment>
        )
}
export default Navigation