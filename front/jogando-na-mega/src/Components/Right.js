import "./Right.css"
import CircumIcon from "@klarr-agency/circum-icons-react";

const Right=()=>{
    return(
        <div className="box">
            <h6 className="title">Sortear um Jogo</h6>
            <div className="numbers-container">
                <p className="n1">02</p>
                <p className="n2">17</p>
                <p className="n3">19</p>
                <p className="n4">22</p>
                <p className="n5">45</p>
                <p className="n6">54</p>
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