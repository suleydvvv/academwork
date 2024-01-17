import { Helmet } from "react-helmet";
import ScrollToTop from './../../utils/scroll-reset/scroll_reset';
import { Header, Footer } from "../../UI";

import { Advantages, Body, Join } from "./components";


const AboutProject = () =>{
    return(
        <div>
            <Helmet>
                <title>О AcademWork</title>
            </Helmet>
            <ScrollToTop/>
            <Header/>
            <Body/>
            <Advantages/>
            <Join/>
            <Footer orangeBox={true}/>
        </div>
    )
}

export {AboutProject};