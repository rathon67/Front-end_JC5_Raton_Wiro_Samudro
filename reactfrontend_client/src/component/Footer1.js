import React, { Component } from 'react';

class Footer1 extends Component {
    render() 
    {
    return (
        <div>
            <footer className="bottom" style={{backgroundColor:'black'}}>     
                <blockquote className="blockquote text-center">
                    <p className="mb-0"/>
                    <img src='./icon/rsz_ratoniconwhite.png'  />                   
                </blockquote>
                <p className="text-center" style={{color:"#F7FCF8"}}>© 2018 All Right Reserved <cite title="Source Title" style={{fontFamily: 'fantasy', color:"#FDFEFE"}}>RustymoTo</cite></p>     
            </footer>
        </div>
    );
    }
    } export default Footer1;