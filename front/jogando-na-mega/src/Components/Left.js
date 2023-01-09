import "./Left.css"
import axios from 'axios';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Left extends Component{
    render(){
        return(
            <div className="main-div">
                <h6 className="my-title">Meus Jogos</h6>
                <div id="scroll">
                    <div className="game">
                        <p>
                            02 03 47 35 12 23
                        </p>
                    </div>
                    <div className="game">
                        <p>
                            02 03 47 35 12 23
                        </p>
                    </div>
                    <div className="game">
                        <p>
                            02 03 47 35 12 23
                        </p>
                    </div>
                    <div className="game">
                        <p>
                            02 03 47 35 12 23
                        </p>
                    </div>
                    <div className="game">
                        <p>
                            02 03 47 35 12 23
                        </p>
                    </div>
                </div>
            </div>
        );
    } 
}
export default Left;