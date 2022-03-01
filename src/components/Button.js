import "./Button.css";

const Button = ({ value, color, doTask }) => {
    return <div
    onClick={() => doTask(value)}
    className="btn"
    style={{backgroundColor: color}}>
        {value}
        </div>;
};
export default Button;