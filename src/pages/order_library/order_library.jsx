import { Footer, Header } from '../../UI';
import { Helmet } from 'react-helmet';
import style from './style/order_library.module.scss'
import { Filter, Order, Search } from './components';

const order = {
    name: "Геодезическая гравиметрия 3 расчетных задания/65дмф",
    date_posted: "05.01.2024",
    date_deadline: "10.01.2024",
    type: "Контрольная работа",
    subject: "Геодезия",
    files: [1, 2],
    volume: "5-10 страниц",
    responses: 12,
    budget: 5000,
    author: {
        name: "dinar",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlQUnl3-uIAOAkLNyv3QRNhz2BLN9uF1l5wF9XJpIRg&s"
    },
    description: "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст."
}

const OrderLibrary = () =>{
    
    return(
        <div>
            <Helmet>
                <title>Библиотека заказов - AcademWork</title>
            </Helmet>
            <Header/>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.head}>
                        <h1>Библиотека заказов</h1>
                        <Search/>
                    </div>
                    <div className={style.body}>
                        <div className={style.filter}>
                            <Filter/>
                        </div>
                        <div className={style.orders}>
                            <Order order = {order}/>
                            <Order order = {order}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer orangeBox={false}/>
        </div>
        
    )
}

export {OrderLibrary};