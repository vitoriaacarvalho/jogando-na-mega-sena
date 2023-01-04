import "./Left.css"
import axios from 'axios';

const Left=()=>{
    return(
        <aside>
            <h6>Meus Jogos</h6>
            <div game-container>
                <ul>
                    <li>
                        <p className="a1">30</p>
                        <p className="a2">30</p>
                        <p className="a3">30</p>
                        <p className="a4">30</p>
                        <p className="a5">30</p>
                        <p className="a6">30</p>
                    </li>
                    
                </ul>

            </div>
        </aside>
    );
}

export default Left;