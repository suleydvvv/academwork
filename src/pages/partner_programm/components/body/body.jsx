import style from "../../style/body.module.scss"

import body_img from "../../imgs/body.svg"
import { Btn } from "../../../../UI";

const Body = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.offer}>
                    <h1>Приглашайте друзей</h1>
                    <h2>и получайте бонусы с их заказов</h2>
                    <div className={style.underline}></div>
                    <p>Мы предлагаем два варианта партнерской программы. Выбирайте оптимальный для Вас и получайте прибыль!</p>
                    <Btn fill="fill_gradient">
                        <div className={style.btn}><p>Стать партнером</p></div>
                    </Btn>
                </div>
                <img src={body_img} alt="" />
            </div>
        </div>
    )
}

export {Body};