//import style from "./style/main.module.scss"
import { Header, Footer } from "../../UI";
import { Advantages, Body, Experts, HowWeWroking, LastOrders, Reviews} from "./components";
import ScrollToTop from '../../utils/scroll-reset/scroll_reset';
import { Helmet } from "react-helmet";
import style from "./style/main.module.scss"



const Main = () =>{
    return(
        <div className={style.main}>
            <Helmet>
                <title>AcademWork - профессиональная помощь студентам</title>
            </Helmet>
            <ScrollToTop/>
            <Header/>
            <Body/>
            <Advantages/>
            <Experts/>
            <HowWeWroking/>
            <LastOrders/>
            <Reviews/>
            <Footer/>
        </div>
        
    )
}

export {Main};