import { Switch } from "../../../UI"
import style from "../style/filter.module.scss"
import arrow from "../imgs/arrow.svg"
import reset from "../imgs/reset.svg"

import { useSelector } from "react-redux"
import { useState } from "react"

const ChosenOrders = () =>{
    const [chosen, setChosen] = useState(false)
    return(
        <div className={style.chosen_orders}>
            <h2>Избранные работы</h2>
            <Switch active={chosen} setActive={setChosen}/>
        </div>
    )
}

const Types = () =>{
    const [open, setOpen] = useState(true)
    
    return(
        <div className={style.option_container}>
            <div onClick={()=>setOpen(!open)} className={style.option_header}>
                <p>Типы работ</p>
                <img className={open ? style.arrow_uo : style.arrow_down} src={arrow} alt="" />
            </div>
            <div className={open ? style.option_content_active : style.option_content_inactive}>
                content
            </div>
        </div>
    )
}

const Subjects = () =>{
    const [open, setOpen] = useState(true)
    
    return(
        <div className={style.option_container}>
            <div onClick={()=>setOpen(!open)} className={style.option_header}>
                <p>Предметы</p>
                <img className={open ? style.arrow_uo : style.arrow_down} src={arrow} alt="" />
            </div>
            <div className={open ? style.option_content_active : style.option_content_inactive}>
                content
            </div>
        </div>
    )
}

const Budget = () =>{
    const [open, setOpen] = useState(true)
    const [all, setAll] = useState(false)
    const [min, setMin] = useState(500)
    const [max, setMax] = useState(5000)

    function changeMin(value){
        setMin(value)
    }

    function changeMax(value){
        setMax(value)
    }
    return(
        <div className={style.option_container}>
            <div onClick={()=>setOpen(!open)} className={style.option_header}>
                <p>Бюджет, ₽</p>
                <img className={open ? style.arrow_uo : style.arrow_down} src={arrow} alt="" />
            </div>
            <div className={open ? style.option_content_active : style.option_content_inactive}>
                <div className={style.inputs}>
                    <div className={style.myinput}>
                        <p>от:</p>
                        <input onChange={(e)=>changeMin(e.target.value)} type="text" placeholder="500" value={min}/>
                    </div>
                    <div className={style.myinput}>
                        <p>до:</p>
                        <input onChange={(e)=>changeMax(e.target.value)} type="text" placeholder="5000" value={max}/>
                    </div>
                </div>
                <div className={style.switch}>
                    <h2>Любой бюджет</h2>
                    <Switch active={all} setActive={setAll}/>
                </div>
            </div>
        </div>
    )
}

const Deadline = () =>{
    const [open, setOpen] = useState(true)
    const [all, setAll] = useState(false)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10)

    function changeMin(value){
        setMin(value)
    }

    function changeMax(value){
        setMax(value)
    }
    return(
        <div className={style.option_container}>
            <div onClick={()=>setOpen(!open)} className={style.option_header}>
                <p>Срок сдачи, дни</p>
                <img className={open ? style.arrow_uo : style.arrow_down} src={arrow} alt="" />
            </div>
            <div className={open ? style.option_content_active : style.option_content_inactive}>
                <div className={style.inputs}>
                    <div className={style.myinput}>
                        <p>от:</p>
                        <input disabled={all} onChange={(e)=>changeMin(e.target.value)} type="text" placeholder="500" value={min}/>
                    </div>
                    <div className={style.myinput}>
                        <p>до:</p>
                        <input disabled={all} onChange={(e)=>changeMax(e.target.value)} type="text" placeholder="5000" value={max}/>
                    </div>
                </div>
                <div className={style.switch}>
                    <h2>Любой срок</h2>
                    <Switch active={all} setActive={setAll}/>
                </div>
            </div>
        </div>
    )
}

const Unique = () =>{
    const [open, setOpen] = useState(true)
    const [all, setAll] = useState(false)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100)

    function changeMin(value){
        setMin(value)
    }

    function changeMax(value){
        setMax(value)
    }
    return(
        <div className={style.option_container}>
            <div onClick={()=>setOpen(!open)} className={style.option_header}>
                <p>Уникальность, %</p>
                <img className={open ? style.arrow_uo : style.arrow_down} src={arrow} alt="" />
            </div>
            <div className={open ? style.option_content_active : style.option_content_inactive}>
                <div className={style.inputs}>
                    <div className={style.myinput}>
                        <p>от:</p>
                        <input disabled={all} onChange={(e)=>changeMin(e.target.value)} type="text" placeholder="500" value={min}/>
                    </div>
                    <div className={style.myinput}>
                        <p>до:</p>
                        <input disabled={all} onChange={(e)=>changeMax(e.target.value)} type="text" placeholder="5000" value={max}/>
                    </div>
                </div>
                <div className={style.switch}>
                    <h2>Уникальность отсутствует</h2>
                    <Switch active={all} setActive={setAll}/>
                </div>
            </div>
        </div>
    )
}

const Responses = () =>{
    const [open, setOpen] = useState(true)
    const [all, setAll] = useState(false)
    const [mine, setMine] = useState(false)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10)

    function changeMin(value){
        setMin(value)
    }

    function changeMax(value){
        setMax(value)
    }
    return(
        <div className={style.option_container}>
            <div onClick={()=>setOpen(!open)} className={style.option_header}>
                <p>Отклики в заказе</p>
                <img className={open ? style.arrow_uo : style.arrow_down} src={arrow} alt="" />
            </div>
            <div className={open ? style.option_content_active : style.option_content_inactive}>
                <div className={style.inputs}>
                    <div className={style.myinput}>
                        <p>от:</p>
                        <input onChange={(e)=>changeMin(e.target.value)} type="text" placeholder="500" value={min}/>
                    </div>
                    <div className={style.myinput}>
                        <p>до:</p>
                        <input onChange={(e)=>changeMax(e.target.value)} type="text" placeholder="5000" value={max}/>
                    </div>
                </div>
                <div className={style.switch}>
                    <h2>Нет откликов</h2>
                    <Switch active={all} setActive={setAll}/>
                </div>
                <div className={style.switch}>
                    <h2>Мои отклики</h2>
                    <Switch active={mine} setActive={setMine}/>
                </div>
            </div>
        </div>
    )
}

const RadioCheck = () =>{
    const [premium, setPremium] = useState(false)
    const [online, setOnline] = useState(false)
    const [files, setFiles] = useState(false)
    return(
        <div className={style.radio_checks}>
            <div className={style.stroke}>
                <h2>Премиум заказы</h2>
                <Switch active={premium} setActive={setPremium}/>
            </div>
            <div className={style.stroke}>
                <h2>Заказчик онлайн</h2>
                <Switch active={online} setActive={setOnline}/>
            </div>
            <div className={style.stroke}>
                <h2>Наличие файлов</h2>
                <Switch active={files} setActive={setFiles}/>
            </div>
        </div>
    )
}

const Btns = () =>{
    return(
        <div className={style.btns}>
            <div className={style.reset}>
                <img src={reset} alt="" />
                <h3>Сбросить фильтры</h3>
            </div>
        </div>
    )
}

const Filter = () =>{
    const theme = useSelector(state => state.user.selected_theme)
    return(
        <div className={(theme === "light") ? style.filter_light : style.filter_dark}>
            <div className={style.content}>
                <ChosenOrders/>
                <div className={style.line}></div>
                <Types/>
                <div className={style.line}></div>
                <Subjects/>
                <div className={style.line}></div>
                <Budget/>
                <div className={style.line}></div>
                <Deadline/>
                <div className={style.line}></div>
                <Unique/>
                <div className={style.line}></div>
                <Responses/>
                <div className={style.line}></div>
                <RadioCheck/>
                <div className={style.line}></div>
                <Btns/>
            </div>
        </div>
    )
}

export {Filter}