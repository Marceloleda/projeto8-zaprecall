import logo from "../home/logo1.svg"
import "./style-home.css";
import FlashCards from "../flashCards/flashCards";
import { useState } from "react";


export default function Home(){
    const [cards, setCards] = useState(
        <div className="tela1">
            <img src={logo} alt="logo" width="136px" height="161px"/>
            <h1>ZapRecall</h1>
            <button onClick={() => setCards(<FlashCards/>)}>Iniciar Recall!</button>
        </div>
    );

    return(
        <>
           {cards}
        </>
    );
}