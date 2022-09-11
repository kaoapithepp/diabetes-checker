import { Routes, Route } from 'react-router-dom';

import Fonts from "./styles/Fonts";
import Reset from "./styles/Reset";
import Variables from "./styles/Variables";

// import modules
import Welcome from './modules/welcome/pages/Welcome';
import PersonalInfo from './modules/input/pages/PersonalInfo';
import Result from './modules/result/pages/Result';

function App() {
  return (
    <>
      <Fonts />
      <Reset />
      <Variables />
      <Routes>
        <Route exact path="/" element={<Welcome/>}/>
        <Route exact path="/input" element={<PersonalInfo/>}/>
        <Route exact path="/result" element={<Result/>}/>
      </Routes>
    </>
  );
}

export default App;
