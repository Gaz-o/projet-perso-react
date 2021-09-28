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
    const [Boucle, setBoucle] = useState(0)
    const Img = [coif1, coif2, coif3, coif4, coif5]
    const [Affiche, setAffiche] = useState(coif1)
    const [Flow, setFlow] = useState("row-reverse")
    const [Rotate, setRotate] = useState(-120)
    const [MarginR, setMarginR] = useState(0)
    const [MarginL, setMarginL] = useState(0)
    const [Opac, setOpac] = useState(0)

    const changementImg = (e) => {
        let increment = e.nativeEvent.wheelDelta*0.0001;
        setBoucle(Boucle + increment)
        setRotate(Rotate - increment*10);
        let rand = Math.floor(Math.random()*5)
        setZoom(Zoom + increment);
        if (Flow == "row-reverse") {
            setRotate(Rotate + increment*100);
        } else {
            setRotate(Rotate - increment*100);
        }
        if (Boucle > 0.55 && Opac < 1) {
            setOpac(Opac + increment*2)
        }
        if (Boucle > 1.77) {
            setAffiche(Img[rand])
            setZoom(0.0012)
            setTransp(1);
            setBoucle(0);
            setMarginL(0)
            setMarginR(0)
            setOpac(0)
            if (Flow == "row-reverse") {
                setFlow("row");
                setRotate(120)
            } else {
                setFlow("row-reverse");
                setRotate(-120)
            }
        } else if (Boucle > 1.20 ){
            setOpac(Opac - increment*2)
            setTransp(Transp - increment);
            if (Flow == "row-reverse") {
                setMarginR(MarginR - increment*300)
                setRotate(Rotate + increment*100);
            } else {
                setMarginL(MarginL - increment*300)
                setRotate(Rotate - increment*100);
            }
        }
        console.log(Boucle, Opac);
    }

    const classZoom = {
        zoom: Zoom,
        opacity: Transp,
        transform: "rotateY(" + Rotate + "deg)",
        "margin-left": MarginL,
        "margin-right": MarginR
    }

    const classGalerie = {
        "flex-flow": Flow
    }

    const text = {
        opacity: Opac
    }
    
    return (
        <div className="conteneur3d">
            <div  className="galerie" style={classGalerie} onWheel={changementImg}>
                <img src={Affiche} style={classZoom} />
                <div className="description" style={text}>
                    <h2>Mon Tableau</h2>
                    <p> Description</p>
                </div>
            </div>
        </div>
    );
}

export default Main;