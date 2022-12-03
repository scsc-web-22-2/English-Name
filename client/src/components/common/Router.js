import Main from '../../pages/Main';
import Test from '../../pages/Test';
import Result from '../../pages/Result';
import Custom404 from '../../pages/Custom404';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Router() {
    const [json, setJson] = useState([]);
    const [progress, setProgress] = useState(0);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main/> }/>
                <Route path='/test' element={ <Test setJson={setJson} json={json} progress={progress} setProgress={setProgress}/> }/>
                <Route path='/result/:id' element={ <Result/> }/>
                <Route path='/404' element={ <Custom404/> }/>
                <Route path='/*' element={ <Custom404/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;