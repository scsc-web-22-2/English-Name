import Main from '../../pages/Main';
import Test from '../../pages/Test';
import Result from '../../pages/Result';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailTest from '../../pages/DetailTest';

function Router() {
    const [json, setJson] = useState([]);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main/> }/>
                <Route path='/test' element={ <Test setJson={setJson}/> }/>
                <Route path='/detail' element={ <DetailTest json={json}/> }/>
                <Route path='/result/:id' element={ <Result/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;