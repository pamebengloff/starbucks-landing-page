import fb from "../@images/facebook.png"
import insta from "../@images/instagram.png"
import tw from "../@images/twitter.png"
import "./social.css"

export function Social(props) {
    return (
       <div className="social-container">
            <ul>
                <li> <img src={fb} alt="" />  </li>
                <li> <img src={insta} alt="" /> </li>
                <li><img src={tw} alt="" /> </li>
            </ul>
            </div>
    );
}
