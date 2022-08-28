import React from "react";
import MenuItem from "./MenuItem";
import "./Header.css"

const Header = (props) => {

    return (
        <section className="header">
            <div className="menu-area">
                <ul className="menu-list">
                    <MenuItem text="Início" link="/" icon="home-outline" />
                    <MenuItem text="Avisos" link="/avisos" icon="newspaper-outline" />
                    <MenuItem text="Professores" link="/professores" icon="people-outline" />
                    <MenuItem text="Contato" link="/contato" icon="call-outline" />
                    <MenuItem text="Localização" link="/local" icon="map-outline" />
                    <div className="indicator"></div>
                </ul>
            </div>
        </section>
    )
}

export default Header