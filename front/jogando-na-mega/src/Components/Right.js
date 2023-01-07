import "./Right.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Right(){

    const[game,setGame]= React.useState([]);
    
    React.useEffect(()=>{
            axios.get("http://localhost:8080/games/game12").then((response)=>{
            setGame(response.data);
            });
    }, []);
    if (!game) return null;
    
    window.onload=function(){
        let button = document.getElementById("button");
        button.addEventListener('click', ()=>{
            game.map((game, index) => {
                return(
                    <>
                        <p className="n1">{game}</p>
                    </>
                )
            });
        })
    }

    return(
        <div className="box">
            <h6 className="title">Sortear um Jogo</h6>
            <div className="numbers-container">
                
            </div>  
            <a href="#" className="bttn-2"> 
                <p className="bttn-2-p">Adicionar jogo</p>
            </a>
            <a href="#" className="button" id="button" >
                <p className="bttn-p" >GERAR NÚMEROS</p>
            </a>
            
        </div>
    );
}

export default Right;