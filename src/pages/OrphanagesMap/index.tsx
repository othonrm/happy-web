import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";

import "../../styles/pages/orphanages-map.css";
import "leaflet/dist/leaflet.css";

import AppIcon from "../../assets/images/icon.svg";
import { ReactComponent as PlusIcon } from "../../assets/images/plus-icon.svg";

const OrphanagesMap: React.FC = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={AppIcon} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Vicente</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.9607855, -46.3720675]}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <PlusIcon />
            </Link>
        </div>
    );
};

export default OrphanagesMap;
