import React from "react";
import ChooseCard from "@/components/ChooseCard";

const ChooseUs = ({ data }) => {
    return <>
        <div className="choose-us">
            <div className="container">
                <div className="flex gap">
                    <div className="col60">
                        <p><span>{data?.subTitle}</span></p>
                        <h3>{data?.title}</h3>
                        <p>{data?.para}</p>
                        <div className="flex cards">
                            {data?.cards.map((elm,ind) => (
                                <ChooseCard key={ind} card={elm}/>
                            ))}
                        </div>
                    </div>
                    <div className="col40 chooseimg">
                        <img src={"/assets/whychoose.png"} alt="Image Edite" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ChooseUs;