import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (

    <main>
    <header>
        <h1 className="logo">BSNS</h1>
        <ul>
            <li>About </li>
            <li> Cases </li>
            <li> Blog </li>
            <li> Services </li>
            <li> Contact</li>

        </ul>
        <div className="mano">
            <img className="amirali" src="./src/ass/menu.png" alt=""/>
            <img src="./New folder/search.png" alt=""/>
            
        </div>

    </header>
    <section>
        <div className="flex">
            <img  className="ww" src="./New folder/Group 18.png" alt=""/>
            <h1 className="h1">Business
                Growth
                Management</h1>
            <h4 className="h4">The sky was cloudless and of a deep dark blue. The spectacle before us was indeed
                sublime.</h4>
            <button type="button">Get It Now</button>
        </div>
          
        <div className="amir">
            <img className="qq" src="./New folder/Bitmap.png" alt=""/>
            <img className="aaa" src="./New folder/social.png" alt=""/>
        </div>
       

    </section>

</main>
    )

  
}

export default App;
