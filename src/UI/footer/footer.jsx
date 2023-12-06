import style from "../../UI/footer/footer.module.scss"

import vk from "../imgs/vk.svg"
import facebook from "../imgs/facebook.svg"
import telegram from "../imgs/telegram.svg"
import whatsapp from "../imgs/whatsapp.svg"


import { OrangeBox } from ".."
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { popular_services, about_project, for_customers } from "../../utils/links/footer_links"

const Footer = () =>{
    const theme = useSelector(state => state.selected_theme)
    const navigate = useNavigate()

    function parse_links_to_p(links){
        let tags = []
        tags = links.map(function(element){
            return <p onClick={()=>navigate(element.path)}>{element.name}</p>
        })
        return tags;
    }

    let popular_services_tags = parse_links_to_p(popular_services)
    let about_project_tags = parse_links_to_p(about_project)
    let for_customers_tags = parse_links_to_p(for_customers)

    let link_orBox_btn = {
        txt: "Оставить заявку",
        path: "/fff"
    }

    return(
        <div>
            <OrangeBox title="Нужна помощь с решением нестандартной задачи?"
                       subtitle="Просто оставьте заявку и наши специалисты Вам помогут"
                       link={link_orBox_btn}/>
            <div className={style.footer_container}>
                <div className={style.content}>
                    <div className={style.contacts}>
                        <h2>support@academwork.ru</h2>
                        <h3>Работаем ежедневно</h3>
                        <p>с 9:00 до 22:00</p>
                        <div className={style.support}>
                            <h4>Поддержка:</h4>
                            <div className={style.social_icons}>
                                <div className={style.icon}><img className={(theme === "light")?style.img_light:style.img_dark} src={vk} alt="" /></div>
                                <div className={style.icon}><img className={(theme === "light")?style.img_light:style.img_dark} src={facebook} alt="" /></div>
                                <div className={style.icon}><img className={(theme === "light")?style.img_light:style.img_dark} src={telegram} alt="" /></div>
                                <div className={style.icon}><img className={(theme === "light")?style.img_light:style.img_dark} src={whatsapp} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.collumn_links}>
                        <h2>Популярные услуги</h2>
                        {popular_services_tags}
                    </div>
                    <div className={style.collumn_links}>
                        <h2>О проекте</h2>
                        {about_project_tags}
                    </div>
                    <div className={style.collumn_links}>
                        <h2>Информация для заказчика</h2>
                        {for_customers_tags}
                    </div>
                </div>
            </div>
            <div className={style.copyright}>
                <div className={style.content}>
                    <div className={style.txt}><p>© 2021 AcademWork. Все права защищены.</p></div>
                </div>
            </div>
        </div>
    )
}

export {Footer}