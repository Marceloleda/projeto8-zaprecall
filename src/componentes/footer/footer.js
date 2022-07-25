import "../footer/style-footer.css"
import redd from "../footer/red.png"
import orange from "../footer/orange.png"
import green from "../footer/green.png"


export default function Footer({qtdade, complete, plus, red, orange, green}){
    console.log(red, orange, green)
    
    return(
        <>
            <div className="footer">
                <h2>/{qtdade} CONCLUÍDOS</h2>
                <div className="check">
                    {red === "red" ? <img src={redd} alt="red"/> : <img src={redd} alt="red"/>}
                </div>
            </div>
        </>
    );
}