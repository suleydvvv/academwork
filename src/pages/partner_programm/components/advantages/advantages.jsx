import style from "../../style/advantages.module.scss"

import adv_img from "../../imgs/advantages_partner.svg"

import icon1 from "../../imgs/1.svg"
import icon2 from "../../imgs/2.svg"
import icon3 from "../../imgs/3.svg"
import icon4 from "../../imgs/4.svg"

const Paragraph = ({icon, title, txt}) =>{
    return(
        <div className={style.paragraph}>
            <img src={icon} alt="" />
            <div>
                <h5>{title}</h5>
                <h6>{txt}</h6>
            </div>
        </div>
    )
}

const Advantages = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title}>
                    <h3>Почему мы</h3>
                    <div className={style.line}/>
                    <h1>Преимущества нашей партнерской системы</h1>
                </div>
                <div className={style.info}>
                        <img src={adv_img} alt="" />
                        <div className={style.paragraphs}>
                            <Paragraph icon={icon1} 
                                       title="Быстрый вывод" 
                                       txt="После поступления бонусных денег к вам на счет, вы можете вывести их куда вам будет удобнее."/>
                            <Paragraph icon={icon2} 
                                       title="Предоставляем баннеры для рекламы" 
                                       txt="Вам не стоит ломать голову какой бы текст написать для привлечения аудитории."/>
                            <Paragraph icon={icon3} 
                                       title="Пассивный доход" 
                                       txt="После привлечения хотя бы одного человека, Вы получаете с него доход в течение всего года."/>
                            <Paragraph icon={icon4} 
                                       title="Минимальные затраты" 
                                       txt="Вам не стоит вкладываться финансово, единственное, что вы вложите – ваше время и труд."/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export {Advantages}