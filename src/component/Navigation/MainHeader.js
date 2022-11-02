import React from 'react'
import Navigation from './Navigation'
import style from './MainHeader.module.css'

const MainHeader = (props) => {
    return (
        <header className={style['main-header']}>
            <h1>A tropical Page</h1>
            <Navigation onLogout={props.onLogout} isAuth={props.isLogin}/>
        </header>
        )
}
export default MainHeader