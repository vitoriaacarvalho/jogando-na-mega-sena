import "./Right.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Right(){

    const[game,setGame]= React.useState([]);
    var[myGameNumbers, setMyGameNumbers]=React.useState([]);

    React.useEffect(()=>{
        axios.get("http://localhost:8080/games/game12").then((response)=>{
         setGame(response.data);
        });
      }, []);
    if (!game) return null;

    function mappingNumbers(){
        game.map((game) => {
            setMyGameNumbers=[...myGameNumbers, game];
        });
        console.log(myGameNumbers);
    }

    return(
        <div className="box">
            <h6 className="title">Sortear um Jogo</h6>
            <div className="numbers-container">
                <p className="n1">{myGameNumbers}</p>
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