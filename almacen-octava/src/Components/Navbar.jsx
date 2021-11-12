import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <img src="https://image.freepik.com/foto-gratis/vaso-cerveza-espuma-sobre-fondo-amarillo_144627-6852.jpg" alt="" width="40" height="50" />
                    <a className="navbar-brand" href="#">Ingresar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ventas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Usuarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleSlidesOnly" className="container carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://thumbs.dreamstime.com/b/cheerful-old-friends-having-fun-drinking-beer-bar-counter-pub-cheerful-old-friends-business-men-having-fun-drinking-197031215.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://thumbs.dreamstime.com/b/szcz%C4%99%C5%9Bliwi-fan-target1043-1-tv-w-karczemnym-dopingu-25150100.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th?id=OIF.wyM0I4Lrb%2f8DMzm2TxEbpg&pid=ImgDet&rs=1" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Navbar;
