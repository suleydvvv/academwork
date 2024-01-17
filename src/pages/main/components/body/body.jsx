import style from "../../style/body.module.scss"

import main_offer from "../../imgs/main_offer.svg"

import {Btn} from "../../../../UI"
import { useDispatch } from "react-redux"
import { setAsCustomer, setAsExpert, setRegActive } from "../../../../store/reducers/modalSlice"

const Stat = ({num, title, txt}) =>{
    return(
        <div className={style.stat}>
            <h1>{num}</h1>
                <div className={style.txt}>
                    <h2>{title}</h2>
                    <h3>{txt}</h3>
                </div>
        </div>
    )
}

const Body = () =>{
    const dispatch = useDispatch()

    function pushTask(){
        dispatch(setRegActive(true))
        dispatch(setAsExpert(false))
        dispatch(setAsCustomer(true))
    }
    function becomeExpert(){
        dispatch(setRegActive(true))
        dispatch(setAsCustomer(false))
        dispatch(setAsExpert(true))
    }
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.offer}>
                    <div className={style.offer_txt}>
                        <h1>StudMaps</h1>
                        <h2>Профессиональная помощь студентам</h2>
                        <h3>Платформа, объединяющая студентов, которым нужна помощь 
                            и экспертов, готовых ее предоставить</h3>
                        
                        <div className={style.btns_container}>
                            <Btn fill="fill_gradient">
                                <div className={style.btn} onClick={()=>pushTask()}><p>Разместить задание</p></div>
                            </Btn>
                            <Btn fill="not_fill">
                                <div className={style.btn} onClick={()=>becomeExpert()}><p>Стать экспертом</p></div>
                            </Btn>
                        </div>
                    </div>
                    <img className={style.offer_img} src={main_offer} alt="offer" />

                </div>
                <div className={style.statistics}>
                    <Stat 
                        num = "51 045" 
                        title = "студентов" 
                        txt = "зарегистрировались на нашем сервисе"/>
                    <div className={style.line}></div>
                    <Stat 
                        num = "23 182" 
                        title = "экспертов" 
                        txt = "готовы помочь студентам в любой момент"/>
                    <div className={style.line}></div>
                    <Stat 
                        num = "112 754" 
                        title = "заданий" 
                        txt = "размещено и выполнено за текущий год"/>
                </div>
            </div>
        </div>
    )
}

export {Body};