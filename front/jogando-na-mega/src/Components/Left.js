import "./Left.css"
import axios from 'axios';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

function Left (){
    const[games,setGames]= React.useState([]);
    
    React.useEffect(()=>{
        axios.get("http://localhost:8080/games").then((response)=>{
         setGames(response.data);
        });
      }, []);
    if (!games) return null;
    
    console.log(games);
        return(
            <div className="main-div">
                <h6 className="my-title">Meus Jogos</h6>
                <div id="scroll">
                    <div className="scroll-box">
                        {games.map((game) => {
                            return(
                                <div className="game" key={game.gameId}>
                                        {game.numbers.map((number)=>{
                                            return(
                                                <p>{number}</p>
                                            )
                                        })} 
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
}
export default Left;