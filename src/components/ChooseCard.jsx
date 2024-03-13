import React from "react";



const ChooseCard = ({card}) => {
    return <>
        <div className="card">
            <img src={"/assets/camera.png"} alt="camera-img" className="camera-img" />
             <h4>{card?.title}</h4>
            <p>{card?.para}</p>
        </div>
    </>
}

export default ChooseCard;