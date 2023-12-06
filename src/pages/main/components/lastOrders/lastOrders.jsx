import style from "../../style/LastOrders.module.scss"

import LRimage from "../../imgs/lastOrdersImg.svg"
import deadline_icon from "../../imgs/deadline.svg"

const Order = ({task, profile, cost, deadline}) =>{
    return(
        <div className={style.order}>
            <div className={style.txt}>
                <h4>{task}</h4>
                <p>{profile}</p>
            </div>
            <div className={style.info}>
                <h5>{cost}руб.</h5>
                <div className={style.deadline}>
                    <img src={deadline_icon} alt="" />
                    <p>Срок сдачи: {deadline}</p>
                </div>
            </div>
        </div>
    )
}

const LastOrders = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.info}>
                    <div className={style.title_content}>
                        <div className={style.title}>
                            <h3>Выберите задание</h3>
                            <div className={style.line}/>
                            <h1>Последние заказы</h1>
                        </div>
                    </div>
                    <div className={style.text}>
                        <p>На нашей платформе размещено огромное количество заказов, 
                            которые выполняют специалисты самого высокого уровня. 
                            При этом цены значительно ниже, так как сотрудничество 
                            проходит без посредников.</p>
                        <img src={LRimage} alt="" />
                    </div>
                </div>
                <div>
                    <div className={style.orders}>
                        <Order task = "Решить 3 задачи"
                            profile = "Решение задач, обоснование проектных решений, геодезия"
                            cost = {5000}
                            deadline = "22.11.2023, 21:00"/>
                        <div className={style.line}></div>
                        <Order task = "Решить 3 задачи"
                            profile = "Решение задач, обоснование проектных решений, геодезия"
                            cost = {5000}
                            deadline = "22.11.2023, 21:00"/>
                        <div className={style.line}></div>
                        <Order task = "Решить 3 задачи"
                            profile = "Решение задач, обоснование проектных решений, геодезия"
                            cost = {5000}
                            deadline = "22.11.2023, 21:00"/>
                        <div className={style.line}></div>
                        <Order task = "Решить 3 задачи"
                            profile = "Решение задач, обоснование проектных решений, геодезия"
                            cost = {5000}
                            deadline = "22.11.2023, 21:00"/>
                    </div>
                    <div className={style.btn}>
                        Все заказы
                    </div>
                </div>
                
            </div>
        </div> 
    )
}

export {LastOrders}