import style from "../../style/conditions.module.scss"

const Punct = ({num, txt}) =>{
    return(
        <div className={style.punct}>
            <div className={style.num}><h4>{num}</h4></div>
            <p>{txt}</p>
        </div>
    )
}

const InfoBox = ({variant}) =>{
    if(variant === 1){
        return(
            <div className={style.info_box}>
                <h2>Вариант &nbsp;{variant}</h2>
                <div className={style.underline}></div>
                <div className={style.puncts}>
                    <Punct num={1}
                           txt="Вы, используя реферальную ссылку, приглашаете людей."/>
                    <Punct num={2}
                           txt="Они заказывают и оплачивают работу."/>
                    <Punct num={3}
                           txt="За каждые 1300 рублей Вы получаете 100 рублей."/>
                    <Punct num={4}
                           txt="Следите за партнерскими поступлениями."/>
                </div>
                <h5>Подключиться к программе</h5>
            </div>
        )
    }else{
        return(
            <div className={style.info_box}>
                <h2>Вариант &nbsp;{variant}</h2>
                <div className={style.underline}></div>
                <div className={style.puncts}>
                    <Punct num={1}
                           txt="С помощью вашей реферальной (партнерской) ссылки привлекаете аудиторию"/>
                    <Punct num={2}
                           txt="Пользователи переходят по вашей ссылке и делают на сайте заказы"/>
                    <Punct num={3}
                           txt="За все оплаченные заказы вам в течение 3 дней начисляются 10% от стоимости заказа."/>
                    <Punct num={4}
                           txt="Далее вы сможете следить за всеми своими поступлениями. Перейдите во вкладку «Баланс», и нажмите «Мои рефералы»."/>
                </div>
                <h5>Подключиться к программе</h5>
            </div>
        )
    }
}

const Conditions = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title}>
                    <h3>Мы предлагаем</h3>
                    <div className={style.line}/>
                    <h1>Условия партнерской программы</h1>
                </div>
                <div className={style.info}>
                    <InfoBox variant={1}/>
                    <InfoBox variant={2}/>
                </div>
            </div>
        </div>
    )
}

export {Conditions}