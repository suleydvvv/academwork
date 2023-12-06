import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Main, PartnerProgramm} from "./pages";

import style from "./utils/style/theme.module.scss"
import { useSelector } from 'react-redux';
import { AboutProject } from './pages/about_project/about_project';

function App() {
  const Theme = useSelector(state => state.selected_theme)
  return (
    <BrowserRouter>
      <div className = {(Theme === "light") ? style.app_light: style.app_dark}>
        <Routes>
          <Route path='*' element = {<h1>В разработке...</h1>} />
          <Route path='/' element = {<Main/>} />
          <Route path='/partner-programm' element = {<PartnerProgramm/>} />
          <Route path='/about-project' element = {<AboutProject/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
