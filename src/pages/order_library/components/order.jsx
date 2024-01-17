import { useSelector } from "react-redux"
import { useState } from "react"
import style from "../style/order.module.scss"
import { Btn } from "../../../UI"

import responses_img from "../imgs/responses.svg"
import message from "../imgs/message.svg"
import chosen from "../imgs/chosen.svg"
import skrepka from "../imgs/skrepka.svg"

const Order = ({order}) =>{
    const theme = useSelector(state => state.user.selected_theme)

    const [dropActive, setDropActive] = useState(false)

    return(
        <div className={(theme === "light") ? style.order_container_light : style.order_container_dark}>
            
            <div className={style.order_content}>
                <div className={style.drop_btn} onClick={()=>setDropActive(!dropActive)}>
                    <p>подробнее</p>
                </div>
                <div className={style.content}>
                    <div className={style.main_content}>
                        <div className={style.left}>
                            <div className={style.deadline}>
                                <p>{order.date_posted}&nbsp;-&nbsp;</p>
                                <p>{order.date_deadline}</p>
                            </div>
                            <h2>{order.name}</h2>
                            <div className={style.type}>
                                <p>Тип работы:</p>
                                <h6>{order.type}</h6>
                            </div>
                            <div className={style.subject}>
                                <p>Предмет:</p>
                                <h6>{order.subject}</h6>
                            </div>
                            <div className={style.files}>
                                <img src={skrepka} alt="" />
                                <p>Файлы({order.files.length})</p>
                            </div>
                        </div>
                        <div className={style.right}>
                            <div className={style.responses}>
                                <img src={responses_img} alt="" />
                                <p>{order.responses} откликов</p>
                            </div>
                            <div className={style.budget}>
                                <p>Бюджет: </p>
                                <h5>{order.budget}руб.</h5>
                            </div>
                            <div className={style.chosen}>
                                <img src={chosen} alt="" />
                                <p>В избранное</p>
                            </div>
                            <div className={style.message}>
                                <img src={message} alt="" />
                                <p>Сообщение</p>
                            </div>
                        </div>
                    </div>
                    <div className={dropActive ? style.sub_content_active : style.sub_content_inactive}>
                        <div className={style.sub_content}>
                            <div className={style.line}></div>
                            <div className={style.body}>
                                <div className={style.user}>
                                    <img src={order.author.avatar} alt="" />
                                    <p>&bull;&nbsp;{order.author.name}</p>
                                </div>
                                <div className={style.volume}>
                                    <p>Объем:</p>
                                    <h6>{order.volume} страниц</h6>
                                </div>
                                <div className={style.btn_container}>
                                    <Btn fill="fill_gradient">
                                        <p>Откликнуться</p>
                                    </Btn>
                                </div>
                            </div>
                            <div className={style.line}></div>
                            <div className={style.body}>
                                <div className={style.description}>
                                    <p>Описание:</p>
                                    <h6>{order.description}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Order}