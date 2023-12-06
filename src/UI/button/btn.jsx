import { useSelector } from "react-redux";
import style from "./btn.module.scss"

const Btn = ({children, fill}) =>{
    const theme = useSelector(state => state.selected_theme)
    function switchClass(fill) {
        switch(theme){
            case "light":
                switch(fill){
                    case "yellow":
                        return style.btn_yellow;
                    case "fill_gradient":
                        return style.btn_fill;
                    case "not_fill":
                        return style.btn;
                    default:
                        return style.btn;
                }
            case "dark":{
                switch(fill){
                    case "yellow":
                        return style.btn_yellow_dark;
                    case "fill_gradient":
                        return style.btn_fill_dark;
                    case "not_fill":
                        return style.btn_dark;
                    default:
                        return style.btn_dark;
                }
            }
            default:
                return style.btn;
        }
        
    }


    return(
        <div className={switchClass(fill, theme)}>
            {children}
        </div>
    )
}

export {Btn};