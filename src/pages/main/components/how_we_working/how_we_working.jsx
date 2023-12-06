import style from "../../style/howweworking.module.scss"

import p1 from "../../imgs/paragraph1.svg"
import p2 from "../../imgs/paragraph2.svg"
import p3 from "../../imgs/paragraph3.svg"
import p4 from "../../imgs/paragraph4.svg"

import garant from "../../imgs/garant.svg"
import scientist from "../../imgs/scientist2.svg"

const Paragraph = ({image, num, txt}) =>{
    return(
        <div className={style.paragraph}>
            <div className={style.num}>
                <div className={style.circle}>
                    <img src={image}  alt="" />
                </div>
                <div className={style.number}>
                    <p>{num}</p>
                </div>
            </div>
            <div className={style.txt}>
                <p>{txt}</p>
            </div>
        </div>
    )
}

const HowWeWroking = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title}>
                    <h3>Схема сотрудничества</h3>
                    <div className={style.line}/>
                    <h1>Как мы работаем</h1>
                </div>
                <div className={style.info_box}>
                    <div className={style.paragraphs}>
                        <Paragraph image = {p1} num={1} txt = "Выставляете заказ, после чего эксперты отправляют вам отклики."/>
                        <Paragraph image = {p2} num={2} txt = "Выбираете специалиста для своей работы, исходя из отзывов и цен."/>
                        <Paragraph image = {p3} num={3} txt = "После выполнения работы, автор отправляет ее Вам на проверку."/>
                        <Paragraph image = {p4} num={4} txt = "Подтверждаете, что работу приняли и, если желаете, оставляете отзыв автору."/>
                    </div>
                </div>
                <div className={style.bottom_box}>
                    <div className={style.garant}>
                        <img src={garant} alt="" />
                        <h3>Гарантия возврата денег</h3>
                        <p>Мы гарантируем возврат полной уплаченой суммы, если что-то пойдет не так.</p>
                    </div>
                    <img src={scientist} alt="" />
                </div>
            </div>
        </div>
    )
}

export {HowWeWroking}