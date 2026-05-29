import {useState,useEffect} from "react";
import  Sun  from "../assets/Sun.svg";
import  Moon  from "../assets/Moon.svg";


const DarkMode = () => {
    const [dark, setDark] = useState(false)

       useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [dark]);


    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={dark}
                onChange={() => setDark(!dark)}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src={Sun} alt="sun" className="sun" />
                <img src={Moon} alt="moon" className="moon" />
            </label>
        </div>
    );
};

export default DarkMode;