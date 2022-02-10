import "./Button.css"

const Button = props => {


    return (
        <button onClick={props.fetchingFunc} className="button">
            Click me to get a new quote!
        </button>
    )
    
}

export default Button;