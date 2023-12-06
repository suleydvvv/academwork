import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./header.module.scss"

import logo_light from "../imgs/logo-light.svg"
import logo_dark from "../imgs/logo-dark.svg"
import icon_user from "../imgs/icon_user.svg"
import arrow_down from "../imgs/keyboard_arrow_down.svg"
import notifications from "../imgs/notifications_none.svg"
import messages from "../imgs/messages.svg"
import moon from "../imgs/moon.svg"
import sun from "../imgs/sun.svg"
import { Btn } from "../button/btn";
import { setTheme } from "../../store/reducers/userSlice";

import { Links, LinksForAuth } from "../../utils/links/header_links";

const Header = () =>{
    const isAuth = useSelector(state => state.isAuth)
    const user = useSelector(state => state.user)
    const theme = useSelector(state => state.selected_theme)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let nav_links = []
    
    if(isAuth){
        nav_links = LinksForAuth.map(function(element){
            return <Link to = {element.path} key={element.path} className = {(theme === "light" ? style.nav_link_auth : style.nav_link_auth_dark)}>
                        {element.text}
                    </Link>
        })
    } else{
        nav_links = Links.map(function(element){
            return <Link to = {element.path} key={element.path} className = {(theme === "light" ? style.nav_link_auth : style.nav_link_auth_dark)}>
                        {element.text}
                    </Link>
        })
    }
    
    return(
        <div className={(theme === "light") ? style.container : style.container_dark}>
            <header className={style.header}>
                <div className={style.logo} onClick={() => {window.scrollTo(0, 0); navigate('/')}}>
                    <img src={(theme === "light") ? logo_light : logo_dark} alt="Studmaps logo"/>
                    {!isAuth && 
                        <div className={style.logo_txt_block}>
                            <div className={style.line}></div>
                            <p>Сервис помощи студентам</p>
                        </div>}
                </div>
                <div className={style.navbar}>
                    {nav_links}
                </div>
                {isAuth?
                    <div className={style.btn_container}>
                        <div className={style.line}></div>
                        <img className={(theme === "light")?style.img_light:style.img_dark} src={notifications} alt="notifications" />
                        <img className={(theme === "light")?style.img_light:style.img_dark} src={messages} alt="messages" />
                        <div className={style.line}></div>
                        <p>{user.balance}₽</p>
                        <Btn fill="yellow" theme="dark">
                            <div className={style.btn_auth}>
                                <img src={icon_user} alt="user icon" />
                                <p>Мой кабинет</p>
                                <img className = {style.arrow} src={arrow_down} alt="arrow" />
                            </div>
                        </Btn>
                    </div>
                    :
                    <Btn fill="not_fill">
                        <div className={style.btn}>
                            <p>Личный кабинет</p>
                        </div>
                    </Btn>
                }
                
            </header>
            <div className={style.theme_changer} onClick={()=>dispatch(setTheme())}>
                {
                    (theme === "light")?
                        <img className={style.moon} src={moon} alt="" />:
                        <img className={style.sun} src={sun} alt="" />
                }
            </div>
        </div>
        
    )
}

export {Header};