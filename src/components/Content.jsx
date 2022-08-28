import React from "react";
import { Routes, Route } from "react-router-dom";
import Avisos from "./Avisos";
import Contato from "./Contato";
import Home from "./Home";
import Local from "./Local";
import Professores from "./Professores";
import './Content.css'

const Content = props => {

    return (
        <section className="main-area">
            <div className="main-content-area">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/avisos" element={<Avisos />} />
                    <Route path="/professores" element={<Professores />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/local" element={<Local />} />
                </Routes>
            </div>
        </section>
    )
}

export default Content