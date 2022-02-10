import { useEffect, useState } from "react";
import Button from '../button/Button';
import "./Quotes.css";

const Quotes = () => {
    

     const [text, setText] = useState("");
     const [link, setLink] = useState("");
    
    const url = `https://uselessfacts.jsph.pl/random.json?language=en`;
    const fetchingData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setText(data.text);
        setLink(data.source_url)
        console.log(data);
    }
    



    useEffect(() => {
        fetchingData();
  }, []);
    
    return (
        <div className="mainDiv">
            <p>{text}</p>
                <a href={link}>The link for the data</a>
            <Button fetchingFunc={fetchingData} />
        </div>
    )
}

export default Quotes;