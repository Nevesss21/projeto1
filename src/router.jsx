import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/app/index';
import Contato from './pages/contato';
import Naoencotrado from './pages/naoencontrado'


export default function Nave() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />

                <Route path='*' element={<Naoencotrado />}   />
            </Routes>
        </BrowserRouter>
    )

}