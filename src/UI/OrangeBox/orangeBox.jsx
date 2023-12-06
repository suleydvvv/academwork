import style from "./orangeBox.module.scss"

import { Btn } from ".."

import logo_yellow from "../imgs/logo-yellow.svg"

const OrangeBox = ({title, subtitle, link}) =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <img src={logo_yellow} alt="" />
                <div className={style.txt}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
                <div className={style.btn_container}>
                    <Btn fill="not_fill">
                        <div className={style.btn}><p>{link.txt}</p></div>
                    </Btn>
                </div>
            </div>
        </div>
    )
}

export {OrangeBox}