import style from "../../style/advantages.module.scss"

import { Btn } from "../../../../UI"

import woman from "../../imgs/woman.svg"
import man from "../../imgs/man.svg"
import mark from "../../imgs/mark.svg"

const Paragraph = ({title, txt}) =>{
    return(
        <div className={style.paragraph}>
            <img src={mark} alt="" />
            <p><b>{title}</b>{txt}</p>
        </div>
    )
}

const Advantages = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title_content}>
                    <div className={style.title}>
                        <h3>Преимущества</h3>
                        <div className={style.line}/>
                        <h1>Почему нужно выбрать именно нас</h1>
                    </div>
                </div>
                <div className={style.content_block}>
                    <img src={woman} alt="" />
                    <div className={style.content_txt}>
                        <h4>Заказчикам</h4>
                        <Paragraph title="Низкая комиссия." 
                                   txt=" Сотрудничая с нашим сайтом, 
                                       Вы оплачиваете минимальную комиссию, 
                                       которая в 2-3 раза меньше других сервисов."/>
                        <Paragraph title="Быстрое нахождение Исполнителя." 
                                   txt=" Сразу же после выставления заказа вам поступят пару 
                                        откликов от Экспертов. Какого выбрать из них – выбор ваш! "/>
                        <Paragraph title="Тщательная проверка каждого Исполнителя." 
                                   txt=" Каждый Пользователь нашего сайта, который желает 
                                        стать экспертом, проходит строгую проверку и доказывает нам свою работоспособность. "/>
                        <Paragraph title="Гарантия." 
                                   txt=" Заказывая у нас, Вы получаете качественно выполненную работу в кратчайший срок. 
                                        Однако, если вас работа не устроит, то мы вернем вам вашу сумму. Все денежные 
                                        средства на протяжении всей работы будут заморожены, и Исполнитель получит их лишь 
                                        после вашего подтверждения. "/>
                        <Paragraph title="Удобное общение с Исполнителем." 
                                   txt=" Выбор эксперта – важная составляющая успешной работы. 
                                        Для этого мы постарались сделать максимально удобным общение между Исполнителем и Заказчиком."/>
                        <div className={style.btn_container}>
                            <Btn fill="fill_gradient">
                                <div className={style.btn}><p>Разместить задание</p></div>
                            </Btn>
                        </div>
                    </div>
                </div>
                <div className={style.content_block}>
                    <div className={style.content_txt}>
                        <h4>Исполнителям</h4>
                        <Paragraph title="Быстрый и удобный вывод." 
                                   txt=" Вы можете вывести свои заработанные деньги в любое удобное вам время. 
                                        Наша команда с удовольствием обработает вашу заявку. В среднем на это уходит 5-10 минут. 
                                        Вывод осуществляется на банковские карты, электронные кошельки, телефон. "/>
                        <Paragraph title="Общение с Заказчиком происходит напрямую." 
                                   txt=" Для более удобного общения AcademWork позволяет обеим сторонам вести диалог напрямую, 
                                        без каких-либо посредников. "/>
                        <Paragraph title="Быстрое нахождение Заказчика." 
                                   txt=" В библиотеке наших заказов предоставлены множество работ разных предметов, типов работ и 
                                        уровней сложности. Вам стоит лишь определиться какой из них выбрать."/>
                        <Paragraph title="Гарантия." 
                                   txt=" Наш сервис работает по принципу безопасной сделки, 
                                        поэтому мы даем гарантию как для Заказчика, так и для Исполнителя."/>
                        <div className={style.btn_container}>
                            <Btn fill="fill_gradient">
                                <div className={style.btn}><p>Стать исполнителем</p></div>
                            </Btn>
                        </div>
                    </div>
                    <img src={man} alt="" />
                </div>
            </div>
        </div>
    )
}

export {Advantages}