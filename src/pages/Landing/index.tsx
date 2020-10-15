import React from "react";
import { Link } from "react-router-dom";

import "../../styles/pages/landing.css";

import logoImg from "../../assets/images/logo.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow-icon.svg";

const Landing: React.FC = () => {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="App Logo" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>São Vicente</strong>
                    <span>São Paulo</span>
                </div>

                <Link to="/app" className="enter-app">
                    <ArrowIcon />
                </Link>
            </div>
        </div>
    );
};

export default Landing;
