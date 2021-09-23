import './Main.css';
import { useState } from "react";
import coif1 from '../img/coif1.jpg';
import coif2 from '../img/coif2.jpg';
import coif3 from '../img/coif3.jpg';
import coif4 from '../img/coif4.jpg';
import coif5 from '../img/coif5.jpg';


function Main () {
    const [Zoom, setZoom] = useState(0.0012);
    const [Transp, setTransp] = useState(1);
    const [Display, setDisplay] = useState("flex")
    const [Boucle, setBoucle] = useState(0)
    const Img = [coif1, coif2, coif3, coif4, coif5]
    const [Affiche, setAffiche] = useState(coif1)

    const changementImg = (e) => {
        let increment = e.nativeEvent.wheelDelta*0.0001;
        setBoucle(Boucle + increment)
        setZoom(Zoom + increment);
        let rand = Math.floor(Math.random()*5)
        if (Boucle > 2) {
            setAffiche(Img[rand])
            setZoom(0.0012)
            setTransp(1)
            setDisplay("flex")
            setBoucle(0)
        } else if (Zoom > 1 && (Transp < 1 || Transp > 0)){
            setTransp(Transp - increment)
        }
    }
    
    const classZoom = {
        zoom: Zoom,
        opacity: Transp,
        display: Display
    }
    
    return (
        <div  className="galerie" onWheel={changementImg}>
            <img src={Affiche} style={classZoom} />
        </div>
    );
}

export default Main;