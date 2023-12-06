import style from "../../style/advantages.module.scss"

import { Star } from "../../../../UI"

import scientist from "../../imgs/scientist.svg"

const Advantage = ({num, title, text}) =>{
    return(
        <div className={style.advantage}>
            <div className={style.title}>
                <div className={style.num}><p>{num}</p></div>
                <h2>{title}</h2>
            </div>
            <div className={style.txt}>
                {text}
            </div>
        </div>
    )
}

const Advantages = () =>{
    return(
        <div className={style.container}>
            <img className={style.scientist} src={scientist} alt="" />
            <div className={style.content}>
                <div className={style.title_content}>
                    <div className={style.title}>
                        <h3>Преимущества</h3>
                        <div className={style.line}/>
                        <h1>Почему именно мы</h1>
                    </div>
                    <div className={style.raiting}>
                        <Star/><Star/><Star/><Star/><Star/>
                        <h5>101 255 оценок</h5>
                        <h6>(средняя оценка 4.9 из 5)</h6>
                    </div>
                </div>
                <div className={style.advantages}>
                    <div className={style.column}>
                        <Advantage num = "1"
                                title = "Всегда на связи"
                                text = "В случае, если автор выполнит работу не так,
                                        как следует, то мы всегда готовы разобраться в ситуации и 
                                        помочь вам! Администрация сайта ответит на любые ваши вопросы 
                                        в течение кратчайшего времени. Мы в сети 7 дней в неделю!"/>
                        <Advantage num = "2"
                                title = "Обширный выбор экспертов"
                                text = "На нашем проекте вы встретите большое количество авторов, 
                                        которые с удовольствием помогут вам с вашей работой. Стоит 
                                        лишь определиться с каким из них вы будете сотрудничать."/>
                        <Advantage num = "3"
                                title = "Предоставим гарантию"
                                text = "При возникновении любых проблем с автором, Вы можете обратиться в тех. 
                                        поддержку, где мы обязательно разберемся с проблемой и в зависимости 
                                        от ситуации вернем вам деньги в размере 100%. Нам можно доверять!"/>
                    </div>
                    <div className={style.column}>
                        <Advantage num = "4"
                                title = "Качественное выполнение"
                                text = "Все наши эксперты являются полноценными специалистами в 
                                        своих областях. Однако, если даже появятся какие-то недочеты по работе, 
                                        Вы всегда можете рассчитывать на нас!"/>
                        <Advantage num = "5"
                                title = "Низкие цены"
                                text = "Наш сайт предоставляет самые дешевые цены на рынке. 
                                        Зарегистрируйтесь, разместите Ваше задание и убедитесь в этом самостоятельно."/>
                        <Advantage num = "6"
                                title = "Хорошие условия"
                                text = "Мы предлагаем хорошие условия как для заказчика, так и для автора. 
                                        Авторы получают – хорошую прибыль, большой объем клиентов, комфортный 
                                        график, рейтинговую систему. Заказчики – большой выбор авторов, 
                                        быстрое выполнение работы, гарантию, удобный интерфейс."/>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export {Advantages};