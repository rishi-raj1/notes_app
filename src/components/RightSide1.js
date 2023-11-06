import "./right_side1.css";
import background from "../assets/background.png";
import lock from "../assets/lock.png";



const RightSide1 = () => {
    return (
        <div className="right1">
            <div className="bg-image">
                <img src={background} alt="image" />
            </div>
            <p className="para1">
                Pocket Notes
            </p>
            <p className="para2">
                Send and receive messages without keeping your phone online.
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
            <div className="last-line">
                <img src={lock} alt="lock image" />
                <p>end-to-end encrypted</p>
            </div>
        </div>
    )
}

export default RightSide1