import React from "react";
import "./header.css";
import "./styles.css";

class Header extends React.Component<{}, {}>{
    render(): React.ReactNode {
        return(
            <div id="header">
                    <button><a id="selector">Pocetna</a></button>
                    <a id="border"> | </a>
                    <button id="menu-button"><a id="selector">Nacionalni parkovi</a></button>
                    <div id="dropdown-menu">
                        <a href="#">NP Brijuni</a>
                        <a href="#">NP Krka</a>
                        <a href="#">NP Paklenica</a>
                        <a href="#">NP Plitvička jezera</a>
                        <a href="#">NP Kornati</a>
                        <a href="#">NP Mljet</a>
                        <a href="#">NP Risnjak</a>
                        <a href="#">NP Sjeverni Velebit</a>
                    </div>
                    <a id="border"> | </a>
                    <button><a id="selector">Komentari</a></button>
            </div>
        );
    }
}

export default Header;