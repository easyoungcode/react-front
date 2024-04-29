import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'

import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            {/* 브라우저 라우팅 */}
            <BrowserRouter>
            <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />

                    <Route path='*' element={<ErrorComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}