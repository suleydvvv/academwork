
import style from "../../style/join.module.scss"

import join_img from "../../imgs/join.svg"
import vk from "../../imgs/vk.svg"
import fb from "../../imgs/fb.svg"
import tg from "../../imgs/tg.svg"
import wa from "../../imgs/wa.svg"

const Join = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <img src={join_img} alt="" />
                <div className={style.title_content}>
                    <div className={style.title}>
                        <h3>Сообщество</h3>
                        <div className={style.line}/>
                        <h1>Присоединяйся к нашему сообществу</h1>
                    </div>
                    <div className={style.icons}>
                        <a href="/"><img src={vk} alt="" /></a>
                        <a href="/"><img src={fb} alt="" /></a>
                        <a href="/"><img src={tg} alt="" /></a>
                        <a href="/"><img src={wa} alt="" /></a>
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Join}