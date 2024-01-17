import { useDispatch, useSelector } from "react-redux"
import { Btn, Modal } from "../../UI"
import { setAsCustomer, setAsExpert, setLogActive, setRegActive } from "../../store/reducers/modalSlice"

import expert from "./imgs/expert.svg"
import customer from "./imgs/customer.svg"

import style from "./style/auth.module.scss"


const Registration = () =>{
    const regActive = useSelector(state => state.modal.regActive)
    const asExpert = useSelector(state => state.modal.asExpert)
    const asCustomer = useSelector(state => state.modal.asCustomer)
    const dispatch = useDispatch()

    function changeActive(state){
        dispatch(setRegActive(state))
    }
    
    function changeAsCustomer(){
        dispatch(setAsCustomer(true))
        dispatch(setAsExpert(false))
    }

    function changeAsExpert(){
        dispatch(setAsCustomer(false))
        dispatch(setAsExpert(true))
    }

    function goToAuth(){
        dispatch(setRegActive(false))
        dispatch(setLogActive(true))
    }

    return(
        <Modal active={regActive} setActive={changeActive}>
            <div className={style.window}>
                {asExpert && <h1>Регистрация как исполнитель</h1>}
                {asCustomer && <h1>Регистрация как заказчик</h1>}
                <div className={style.content}>
                    <div className={style.imgs}>
                        <div className={asExpert?style.img_active:style.img_inactive} onClick={()=>changeAsExpert()}>
                            <img src={expert} alt="" />
                            <h3>Я - исполнитель</h3>
                        </div>
                        <div className={asCustomer?style.img_active:style.img_inactive} onClick={()=>changeAsCustomer()}>
                            <img src={customer} alt="" />
                            <h3>Я - заказчик</h3>
                        </div>
                    </div>
                    <div className={style.inputs}>
                        <input type="text" placeholder="Имя"/>
                        <input type="text" placeholder="Логин"/>
                        <input type="email" placeholder="Электронная почта"/>
                        <input type="password" placeholder="Пароль"/>
                        <input type="password" placeholder="Повторите пароль"/>
                    </div>
                </div>
                <div className={style.btn}>
                    <Btn fill={"fill_gradient"}>
                        <p>Регистрация</p>
                    </Btn>
                </div>
                <div className={style.orange}>
                    <h5>Уже зарегестрированы?</h5>
                    <h6 onClick={()=>goToAuth()}>Войти</h6>
                </div>
            </div>
        </Modal>
    )
}

export {Registration}