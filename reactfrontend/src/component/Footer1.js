import React, { Component } from 'react';

class Footer1 extends Component {
    render() 
    {
    return (
        <div>
            <footer className="bottom" style={{backgroundColor:'black'}}>     
                <blockquote className="blockquote text-center">
                    <p className="mb-0"/>
                    <img src='./icon/rsz_ratoniconwhite.png'  alt=""/>
                    <footer className="blockquote-footer" style={{color:'Red'}}/>© 2018 All Right Reserved <cite title="Source Title">RustymoTo</cite>
                </blockquote>      
            </footer>
        </div>
    );
    }
    } export default Footer1;