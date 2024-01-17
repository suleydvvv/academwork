import { Authorisation, Registration } from "../../components"


const ModalProvider = () =>{
    return(
        <div>
            <Registration/>
            <Authorisation/>
        </div>
    )
}

export {ModalProvider}