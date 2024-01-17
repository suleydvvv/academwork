import { Header, Footer } from "../../UI"
import { Advantages, Body, Conditions, Recomedations, Reviews } from "./components"
import { Helmet } from 'react-helmet';
import ScrollToTop from '../../utils/scroll-reset/scroll_reset';

const PartnerProgramm = () =>{
    return(
        <div>
            <Helmet>
                <title>Партнерская программа - AcademWork</title>
            </Helmet>
            <ScrollToTop/>
            <Header/>
            <Body/>
            <Advantages/>
            <Conditions/>
            <Recomedations/>
            <Reviews/>
            <Footer orangeBox={true}/>
        </div>
    )
}

export {PartnerProgramm}