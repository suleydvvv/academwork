import style from "../../style/reviews.module.scss"

import like from "../../imgs/like.svg"
import smile from "../../imgs/smile.svg"
import avatar from "../../imgs/expert_image.svg"
import { Star } from "../../../../UI"
import { useSelector } from "react-redux"

const Review = ({avatar, name, raiting, review_txt}) =>{
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
        <div className={style.review}>
            <img className={style.avatar} src={avatar} alt="" />
            <div className={style.info}>
                <h3>{name}</h3>
                <div className={style.raiting}>
                    {stars}
                    <p>{raiting}/5</p>
                </div>
                <h4>{review_txt}</h4>
                {
                    (raiting > 3.5)?
                    <div className={style.verdict_positive}>
                        <img src={smile} alt="" />
                        <p>Положительный</p>
                    </div>:
                    <div className={style.verdict_negative}>
                        <img src={smile} alt="" />
                        <p>Отрицательный</p>
                    </div>
                }
                
            </div>
        </div>
    )
}

const Reviews = () =>{
    const theme = useSelector(state => state.selected_theme)
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title_content}>
                    <div className={style.title}>
                        <h3>О нас говорят</h3>
                        <div className={style.line}/>
                        <h1>Отзывы о сайте</h1>
                    </div>
                    <div className={style.raiting}>
                        <div className={style.like}>
                            <div className={style.stars}>
                                <p className={style.side}><Star/></p>
                                <p className={style.middle}><Star/></p>
                                <p className={style.side}><Star/></p>
                            </div>
                            <img className={(theme === "dark")?style.img_dark:style.img_light} src={like} alt="" />
                        </div>
                        <h5>4.9</h5>
                        <h6>средняя оценка</h6>
                        <p>(25000 положительных отзывов)</p>
                    </div>
                </div>
                <div className={style.reviews}>
                    <Review avatar={avatar} 
                            name = "Андрей Петров" 
                            raiting = {4.5} 
                            review_txt="Работы выполняются по приемлемой цене и на высоком уровне, но пока мало авторов. Иногда приходится долго искать..."/>
                            <Review avatar={avatar} 
                            name = "Андрей Петров" 
                            raiting = {3.2} 
                            review_txt="Работы выполняются по приемлемой цене и на высоком уровне, но пока мало авторов. Иногда приходится долго искать..."/>
                </div>
                <div className={style.btn}>
                    Все отзывы
                </div>
            </div>
        </div>
    )
}

export {Reviews}