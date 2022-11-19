import Main from '../../pages/Main';
import Test from '../../pages/Test';
import Result from '../../pages/Result';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailTest from '../../pages/DetailTest';

function Router() {
    const [gender, setGender] = useState("")
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main setGender={setGender}/> }/>
                <Route path='/test' element={ <Test gender={gender}/> }/>
                <Route path='/detail/:id' element={ <DetailTest/> }/>
                <Route path='/result/:id' element={ <Result/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;