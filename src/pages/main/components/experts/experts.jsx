import style from "../../style/experts.module.scss"

import avatar from "../../imgs/expert_image.svg"
import { Star, Btn } from "../../../../UI"

const Expert = ({avatar, name, section, raiting, reviews, orders}) =>{

    let count_raiting = () =>{
        let rait = Math.round(raiting)
        let stars = []
        for(let i = 0; i < rait; i++){
            stars.push(<Star key={i}/>)
        }
        return stars;
    }

    let stars = count_raiting()

    return(
        <div className={style.expert}>
            <img src={avatar} alt="" />
            <h2>{name}</h2>
            <h3>{section}</h3>
            <div className={style.raiting}>
                {stars}
                <p>Средняя оценка {raiting} из 5</p>
            </div>
            <div className={style.expert_stats}>
                <h4>Отзывов: {reviews}</h4>
                <h4>Заказов: {orders}</h4>
            </div>
        </div>
    )
}

const Experts = ()=>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title_content}>
                    <div className={style.title}>
                        <h3>Наши эксперты</h3>
                        <div className={style.line}/>
                        <h1>Популярные авторы</h1>
                    </div>
                    <div className={style.right_txt}>
                        <h6>Мы предлагаем сотрудничество с лучшими авторами нашего сайта. 
                            Все эксперты являются профессионалами в своих сферах.</h6>
                    </div>
                </div>
                <div className={style.experts}>
                    <Expert avatar={avatar} 
                            name = "Александр Иванов"
                            section= "Экономика"
                            raiting = {4.9}
                            reviews= {987}
                            orders= {1235}/>
                    <Expert avatar={avatar} 
                            name = "Александр Иванов"
                            section= "Экономика"
                            raiting = {1.3}
                            reviews= {987}
                            orders= {1235}/>
                    <Expert avatar={avatar} 
                            name = "Александр Иванов"
                            section= "Экономика"
                            raiting = {3.2}
                            reviews= {987}
                            orders= {1235}/>
                    <Expert avatar={avatar} 
                            name = "Александр Иванов"
                            section= "Экономика"
                            raiting = {4.3}
                            reviews= {987}
                            orders= {1235}/>
                </div>
                <div className={style.btns}>
                    <Btn fill="fill_gradient"><div className={style.btn}><p>Все авторы</p></div></Btn>
                    <Btn foll="not_fill"><div className={style.btn}><p>Стать экспертом</p></div></Btn>
                </div>
            </div>
        </div>
    )
}

export {Experts}