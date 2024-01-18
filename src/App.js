import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Login from './Components/Authentication/Login';
import Dashboard from './Components/Dashboard/Dashboard';
// import MainGallery from './Components/Gallery/mainGallery';
import SuperDResolution from './Components/SuperDNetwork/SuperDResolution/SuperDResolution';
import SuperDBGRemover from './Components/SuperDNetwork/SuperDBGRemover/SuperDBGRemover';
import Error from "./Components/404/index"
// import SDRindex from './Components/Gallery/SuperDResolutionGallery/SDRindex';
// import SDBGRindex from './Components/Gallery/SuperDBGRemoverGallery/SDBGRindex';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/Error" element={<Error />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Resolution" element={<SuperDResolution />} />
        <Route path="/BGRemover" element={<SuperDBGRemover />} />
        {/* <Route path="/dashboard/Gallery" element={<MainGallery />} />
        <Route path="/dashboard/Gallery/SuperDBGR" element={<SDBGRindex />} />
        <Route path="/dashboard/Gallery/SuperDResolution" element={<SDRindex />} /> */}



      </Routes>
    </BrowserRouter>
  )
}

export default App;
