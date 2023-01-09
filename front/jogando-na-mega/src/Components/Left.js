import "./Left.css"
import axios from 'axios';
import ReactDOM from 'react-dom';
import React, {Component,useState, useEffect} from 'react';

function Left(){

    const[game,setGame]= React.useState([]);
    React.useEffect(()=>{
        axios.get("http://localhost:8080/games/game12").then((response)=>{
        setGame(response.data);
        });
    }, []);
    if (!game) return null;

    const gameNumbers= game.map((game, index) => {
        return(
            <>
                <p className="n1">{game(index)}</p>
            </>
        )
      });
      aqui eu tenho que fazer tanta coisa que nem sei
        return(
            <div className="main-div">
                <h6 className="my-title">Meus Jogos</h6>
                <main>
                    {game.length ? (
                        <div id="scroll">
                            <div className="game">
                                <p>
                            
                                </p>
                            </div>
                        </div>
                    ): (
                        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
                    )
                    }
                    
                </main>
                
            </div>
        );
    
}
export default Left;