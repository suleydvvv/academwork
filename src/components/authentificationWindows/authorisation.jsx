import { useDispatch, useSelector } from "react-redux"
import { Modal, Btn } from "../../UI"

import style from "./style/auth.module.scss"
import { setLogActive, setRegActive } from "../../store/reducers/modalSlice"


const Authorisation = () =>{
    const dispatch = useDispatch()
    const logActive = useSelector(state => state.modal.logActive)

    function changeActive(state){
        dispatch(setLogActive(state))
    }

    function goToReg(){
        dispatch(setLogActive(false))
        dispatch(setRegActive(true))
    }

    return(
        <Modal active={logActive} setActive={changeActive}>
            <div className={style.window}>
                <h1>Войти в личный кабинет</h1>
                <div className={style.content}>
                    <div className={style.inputs}>
                        <input type="text" placeholder="Логин" />
                        <input type="password" placeholder="Пароль" />
                    </div>
                </div>
                <div className={style.btn}>
                    <Btn fill={"fill_gradient"}>
                        <p>Войти</p>
                    </Btn>
                </div>
                <h4>Забыли логин или пароль?</h4>
                <div className={style.orange}>
                    <h5>Еще не зарегестрированы?</h5>
                    <h6 onClick={()=>goToReg()}>Регистрация</h6>
                </div>
            </div>
        </Modal>
    )
}

export {Authorisation}