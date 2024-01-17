import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Main, OrderLibrary, PartnerProgramm} from "./pages";

import style from "./utils/style/theme.module.scss"
import { useSelector } from 'react-redux';
import { AboutProject } from './pages/about_project/about_project';
import { ModalProvider } from './UI';

function App() {
  const Theme = useSelector(state => state.user.selected_theme)
  return (
    <BrowserRouter>

      {/* Провайдер темы */}
      <div className = {(Theme === "light") ? style.app_light: style.app_dark}>

        {/* Модальные окна */}
        <ModalProvider/>

        {/* Страницы */}
        <Routes>
          <Route path='*' element = {<h1>В разработке...</h1>} />
          <Route path='/' element = {<Main/>} />
          <Route path='/partner-programm' element = {<PartnerProgramm/>} />
          <Route path='/about-project' element = {<AboutProject/>} />
          <Route  path='/order-library' element = {<OrderLibrary/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
