import "./Right.css";
import React from 'react';
import axios from 'axios';

const Right=()=>{
    const[game,setGame]= React.useState([]);

    React.useEffect(()=>{
        axios.get("http://localhost:8080/games/1").then((response)=>{
         setGame(response.data);
        });
      }, []);
      if (!game) return null;

    const gameNumbers=game.map((game, index) => {
        return(
            <>
                <p className="n1">{game}</p>
            </>
        )
        // this was me testing the console but the same thing happens in any index: console.log(game.numbers[2]);
    });
    return(
        <div className="box">
            <h6 className="title">Sortear um Jogo</h6>
            <div className="numbers-container">
                {gameNumbers}
            </div>  
            <a href="#" className="bttn-2"> 
                <p className="bttn-2-p">Adicionar jogo</p>
            </a>
            <a href="#" className="button">
                <p className="bttn-p">GERAR NÚMEROS</p>
            </a>
            
        </div>
    );
}

export default Right;