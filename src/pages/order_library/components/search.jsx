import { useState } from "react"
import style from "../style/search.module.scss"

const DropDownMenu = () =>{
    const typesArr = [
        {
            name: "Везде",
            selected: true
        },
        {
            name: "По нику пользователя",
            selected: false
        },
        {
            name: "По названию заказа",
            selected: false
        },
        {
            name: "По предметам",
            selected: false
        },
        {
            name: "По типу работ",
            selected: false
        }
    ]
    const [types] = useState(typesArr)
    const [selectedType, setSelectedType] = useState(types[0])
    const [dropDownMenuActive, setDropDownMenuActive] = useState(false)

    function changeType(clickedType){
        if(clickedType.name === selectedType.name){
            setDropDownMenuActive(false)
            return
        }
        types.find((type) => type.name === selectedType.name).selected = false
        types.find((type) => type.name === clickedType.name).selected = true
        setSelectedType(clickedType)
        setDropDownMenuActive(false)
    }

    let typeTags = types.map(function(element){
        return <p className={element.selected ? style.selected : style.type} onClick={()=>changeType(element)}>{element.name}</p>
    })

    return(
        <div className={style.dropdownmenu}>
            <div className={style.selected_type_container}>
                <p className={style.selected_type} onClick={()=>setDropDownMenuActive(!dropDownMenuActive)}>{selectedType.name} {dropDownMenuActive? "▲" :"▼"}</p>
            </div>
            <div className={dropDownMenuActive ? style.dropdown_content_active : style.dropdown_content}>
                {typeTags}
            </div>
        </div>
    )
}

const Search = () =>{
    return(
        <div className={style.container}>
            <input type="text" placeholder="Введите поисковой запрос" />
            <div className={style.line}></div>
            <DropDownMenu/>
            <button>Найти заказ</button>
        </div>
    )
}

export {Search}