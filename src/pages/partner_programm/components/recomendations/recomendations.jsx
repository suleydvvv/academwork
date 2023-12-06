import style from "../../style/recomandations.module.scss"

import { Btn } from "../../../../UI"

import recs_img from "../../imgs/recs.svg"

const Recomedations = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title}>
                    <h3>Наши рекомендации</h3>
                    <div className={style.line}/>
                    <h1>Как привлекать клиентов</h1>
                </div>
                <div className={style.info}>
                    <div className={style.txt}>
                        <h5>Через различные форумы, социальные сети и сайты</h5>
                        <h6>В наше время почти у каждого человека существует социальная сеть, 
                            притом не одна. Поэтому, скорее всего, данный способ является самым 
                            простым и легкодоступным для любого пользователя.</h6>

                        <h5>Прикрепив (приклеив) надпись на свой автомобиль. Раздавая визитки или листовки</h5>
                        <h6>На таких наклейках, визитках и листовках вы сможете указать вашу реферальную ссылку, 
                            зарегистрировавшись по которой пользователь будет приносить вам прибыль.</h6>
                        
                        <h5>Используя свой личный сайт или канал на YouTube</h5>
                        <h6>У вас есть свой сайт или блог? Возможно, вы ведете канал на YouTube? 
                            Тогда просто разместите уникальную партнерскую ссылку или баннер на своем ресурсе.</h6>
                    </div>
                    <div className={style.img}>
                        <img src={recs_img} alt="" />
                        <p>
                            Последние два способа доступны не для всех, поэтому наш 
                            сайт все-таки рекомендует поработать с различными форумами или 
                            с социальной сетью Вконтакте.
                        </p>
                    </div>
                </div>
                <div className={style.btn_container}>
                    <Btn fill="fill_gradient">
                        <div className={style.btn}><p>Пригласить друзей</p></div>
                    </Btn>
                </div>
            </div>
        </div>
    )
}

export {Recomedations}