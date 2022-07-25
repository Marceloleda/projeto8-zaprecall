// import { useState } from "react";
// import { PlayOutline} from 'react-ionicons'
// import "../buttons/style-buttons.css"
// import Card from "../card/card";
// import Footer from "../footer/footer";

// export default function Buttons({id}){
//     const [button, setButton] = useState("")
//     if(button === "red"){
//         return(
//             <div className="card">
//                 <p className="redtext">Pergunta  {id}</p>
//                 <PlayOutline/>
//             </div>
//         );
//     }
//     return(
//         <>
//             <div className='buttons'>
//                 <button className='red' onClick={() => setButton("red")}>Não lembrei</button>
//                 <button className='orange' onClick={() => setButton("orange")}>Quase não lembrei</button>
//                 <button className='green' onClick={() => setButton("green")}>Zap!</button>
//             </div>
//         </>
//     );
// }