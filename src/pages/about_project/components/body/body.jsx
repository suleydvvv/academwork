import style from "../../style/body.module.scss"

import { Btn } from "../../../../UI"

import body_img from "../../imgs/body_img.svg"

const Body = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.offer}>
                    <h1>О проекте</h1>
                    <h5>AcademWork – это безопасный онлайн-сервис 
                        помощи студентам. Здесь заказчики напрямую обращаются 
                        за помощью к экспертам, а сайт является гарантом на оказанные услуги.</h5>
                    <div className={style.btns_container}>
                        <Btn fill="fill_gradient">
                            <div className={style.btn}><p>Разместить задание</p></div>
                        </Btn>
                        <Btn fill="not_fill">
                            <div className={style.btn}><p>Стать экспертом</p></div>
                        </Btn>
                    </div>
                </div>
                <img src={body_img} alt="" />
            </div>
        </div>
    )
}

export {Body}