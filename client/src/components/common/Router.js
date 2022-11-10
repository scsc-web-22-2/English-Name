import Main from '../../pages/Main';
import Test from '../../pages/Test';
import Result from '../../pages/Result';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailTest from '../../pages/DetailTest';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main/> }/>
                <Route path='/Test' element={ <Test/> }/>
                <Route path='/Detail/:id' element={ <DetailTest/> }/>
                <Route path='/Result/:id' element={ <Result/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;