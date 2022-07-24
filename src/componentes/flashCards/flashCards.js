import "../flashCards/style-flashCards.css"
import Topo from "../topo/topo"
import Footer from "../footer/footer"
import { PlayOutline} from 'react-ionicons'
import { useState } from "react"



export default function FlashCards(){
    const flashCards = [
        {
            "Pergunta":"O que é JSX?",
            "Resposta":"Uma extensão de linguagem do JavaScript"
        },
        {
            "Pergunta":"O React é __",
            "Resposta":"uma biblioteca JavaScript para construção de interfaces"
        },
        {
            "Pergunta":"Componentes devem iniciar com __",
            "Resposta":"letra maiúscula"
        },
        {
            "Pergunta":"Podemos colocar __ dentro do JSX",
            "Resposta":"expressões"
        },
        {
            "Pergunta":"O ReactDOM nos ajuda __ ",
            "Resposta":"interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            "Pergunta":"Usamos o npm para __",
            "Resposta":"gerenciar os pacotes necessários e suas dependências"
        },
        {
            "Pergunta":"gerenciar os pacotes necessários e suas dependências",
            "Resposta":"passar diferentes informações para componentes"
        },
        {
            "Pergunta":"Usamos estado (state) para __",
            "Resposta":"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

    const [questions, setQuestions] = useState(
        flashCards.map((card, index) => 
            <div className="card" key={index} onClick={() => (console.log(card))}>
                <p>Pergunta {index +1}</p>
                <PlayOutline/>
            </div>)
    );
    return(
        <>  
            <Topo/>
            <div className="cards">
                {questions}
            </div>            
            <Footer/>
        </>
    );
}