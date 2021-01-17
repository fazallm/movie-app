import React from 'react';
import camera from '../static/camera.png'
import setting from '../static/setting.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo-container">
                    <Link to="/">
                        <img src={camera} alt="MOVIE" className="logo"></img>
                    </Link>
                </div>
                <div className="plus-sign">
                    <div href="/form">
                        <a><img src={setting} className="sign"/></a>
                    </div>
                </div>
            </header>
            <style jsx>
            {`
                header{
                    background-image: linear-gradient(#E8B6B6, #F2E4E4);
                    height: 85px;
                    border: 1px solid #C0BBBA;
                    font-family: Lato;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .logo{
                    margin: 17px 25px;
                    height: 75px;
                }
                .sign{
                    height: 30px;
                    margin: 17px 25px;
                    background-color: transparent;
                }
            `}
            </style>
        </div>
    );
}

export default Header;