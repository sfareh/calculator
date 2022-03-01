import App from "../App";
import "./Input.css";

const Input = ({digit, result}) => {
    return <div className="input">
        <div className="result">
            {result}
        </div>

        <div className="digit">
        {digit}
        </div>

        </div> ;
};

export default Input;