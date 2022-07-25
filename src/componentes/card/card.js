import { PlayOutline} from 'react-ionicons'
import { useState } from "react"
import Footer from '../footer/footer'
import "../card/style-card.css"
import Return from "../card/Vector.svg"
import Buttons from '../buttons/buttons'
import redd from "../card/red.png"
import orange from "../card/orange.png"
import green from "../card/green.png"
import "../footer/style-footer.css"


export default function Card({card, id}){
    const [open, setOpen] = useState("")

    
    if(open === "Question"){
        return(
            <div className='question'>{card.Pergunta}
                <div className='return'>
                    <img src={Return} alt="return" onClick={() => 
                    setOpen("response") }
                    />
                </div>
            </div>
            
        );
    }
 
    if(open === "response"){
        return(
            <>
                <div className='question'>{card.Resposta}
                    <div className='buttons'>
                        <button className='red' onClick={() => setOpen("red")}>Não lembrei</button>
                        <button className='orange' onClick={() => setOpen("orange")}>Quase não lembrei</button>
                        <button className='green' onClick={() => setOpen("green")}>Zap!</button>
                    </div>
                </div>
            </>
        );
    }

    if(open === "red"){
        return(
            <>
                <div className="card"  onClick={() => setOpen("Question")}>
                    <h3 className='redd'>Pergunta  {id}</h3>
                    <img src={redd} alt="img"/>    
                </div>
                         
            </>
        );
    }

    if(open === "orange"){
        return(
            <div className="card"  onClick={() => setOpen("Question")}>
                <h3 className='orangee'>Pergunta  {id}</h3>
                <img src={orange} alt="img"/>
            </div>
        );
    }
    if(open === "green"){
        return(
            <div className="card"  onClick={() => setOpen("Question")}>
                <h3 className='greenn'>Pergunta  {id}</h3>
                <img src={green} alt="img"/>
            </div>
        );
    }

    return(
        <>
            <div className="card" onClick={() => setOpen("Question")}>
                <p>Pergunta  {id}</p>
                <PlayOutline/>
            </div>
        </>

    );
}