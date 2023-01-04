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
                 <p className="n1">{game.numbers[0]}</p>
                    <p className="n2">{game.numbers[1]}</p>
                    <p className="n3">{game.numbers[2]}</p>
                    <p className="n4">{game.numbers[3]}</p>
                    <p className="n5">{game.numbers[4]}</p>
                    <p className="n6">{game.numbers[5]}</p> 
        
               
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