import logoPequeno from "../topo/logoP.svg"
import "../topo/style-topo.css"

export default function Topo(){

    return(
        <>
            <div className="topo">
                <img src={logoPequeno} alt="logoPequeno"/>
                <h1>ZapRecall</h1>
            </div>
        </>
    );
}