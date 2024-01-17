import { useSelector } from "react-redux";
import "./modal.scss";

const Modal = ({active, setActive, children}) =>{
    const theme = useSelector(state => state.user.selected_theme)
    return(
        <div className={(theme === "light")? "light": "dark"}>
            <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
                <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export {Modal};