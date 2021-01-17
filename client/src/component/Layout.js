import React from 'react';
// import Link from 'next/link'
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ title="default title", children}) => {
    return (
        <div>
            <body>
                <Header/>
                <div className="item">
                    <div className="child">{children}</div>
                </div>
            </body>
            
            <style jsx global>
                {`
                    body{
                        margin: 0;
                        overflow-x: hidden;
                        min-width: 750px;
                        background-color: #EAE7E6;
                        font-family: Lato;
                    }
                    .child{
                        width: 80%;
                        margin-left: 10%;
                        margin-right:10%;
                    }
                `}
            </style>
        </div>
    );
}

Layout.propTypes = {
    title: PropTypes.string,
  };

export default Layout;