import "./Right.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Right(){

    const[game,setGame]= React.useState([]);
    const[isShowingNumbers, setIsShowingNumbers]=React.useState(false);

    React.useEffect(()=>{
        axios.get("http://localhost:8080/games/game12").then((response)=>{
         setGame(response.data);
        });
      }, []);
    if (!game) return null;

    function mappingNumbers(){
        axios.get("http://localhost:8080/games/game12").then((response)=>{
            setGame(response.data);
        });
        setIsShowingNumbers(true); 
    }

    return(
        <div className="box">
            <h6 className="title">Sortear um Jogo</h6>
            <div className="numbers-container">
                {game.map((game) => {
                    return(
                        <p className="n1">{isShowingNumbers && game}</p>
                    );
                })}
            </div>  
            <a href="#" className="bttn-2"> 
                <p className="bttn-2-p">Adicionar jogo</p>
            </a>
            <a href="#" className="button" >
                <p className="bttn-p" onClick={() => mappingNumbers()}>GERAR NÚMEROS</p>
           </a>
            
        </div>
    );
}

export default Right;