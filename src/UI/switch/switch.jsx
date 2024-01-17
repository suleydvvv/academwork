import style from "./switch.module.scss"

const Switch = ({active, setActive}) =>{
    
    return(
        <div className={active ? style.back_active : style.back_inactive} onClick={() => setActive(!active)}>
            <div className={style.circle}></div>
        </div>
    )
}

export {Switch}