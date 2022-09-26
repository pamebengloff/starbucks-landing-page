import "./options.css"
import Img1 from "../@images/img1.png"
import Img2 from "../@images/img2.png"
import Img3 from "../@images/img3.png"
import Thumb1 from "../@images/thumb1.png"
import Thumb2 from "../@images/thumb2.png"
import Thumb3 from "../@images/thumb3.png"

import {useState} from "react"
import { Social } from "./Social"

export function Options() {

    const images = [
        {img:Img1, backgroundColor: "circle-green"},
        {img:Img2, backgroundColor: "circle-pink"},
        {img:Img3, backgroundColor: "circle-darkpink"}
    ];

    const [image, setImage] = useState(images[0].img);
    const [circleColor, setcirclecolor] = useState(images[0].backgroundColor);

    const onImageDisplay = (img) => {
        //si es este boton, ponme esta imagen y color
     /*   if( img === Img1 ) {setImage(Img1); setcirclecolor(images[0].backgroundColor);}
        if( img === Img2 ) {setImage(Img2); setcirclecolor(images[1].backgroundColor);}
        if( img === Img3 ) {setImage(Img3); setcirclecolor(images[2].backgroundColor);}*/

      const path = img;
     
      const obj = images.find( (op) => (op.img === path)  )
        //console.log(obj.img)
        setImage(obj.img);
        setcirclecolor(obj.backgroundColor);
    }

    return (
        <>
     <div className="circleOptions-container">
        <div className="circleSocial-container">
            <div className={circleColor}></div>
            <img  className="beverage-image" src={image} alt="" />
        <Social/> 
        </div>
        <nav className="buttons-container">
            <button className="btn-t" onClick={() => onImageDisplay(Img1)}> <img className="img-Img" src={Thumb1} alt="" /> </button>
            <button className="btn-t" onClick={() => onImageDisplay(Img2)}> <img className="img-Img" src={Thumb2} alt="" /> </button>
            <button className="btn-t" onClick={() => onImageDisplay(Img3)}> <img className="img-Img" src={Thumb3} alt="" /> </button>
        </nav>
    
    
    </div>
    
        </>
    );
}

