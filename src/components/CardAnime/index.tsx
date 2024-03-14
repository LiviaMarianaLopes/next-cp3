import {Props} from "./interfaces";
import "./styles.css";

const Cardanime = (props: Props) => {
    return(
        <>
        <div className="card">
            <div><p>
            {props.title}
            </p></div>
            <div>
               <img src={props.image} />
            </div>
           
            <button><a href={props.link}>Assistir</a></button>
            
        </div>
        </>

    )
}

export default Cardanime;