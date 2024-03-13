import React from "react";
import ChooseCard from "@/components/ChooseCard";

const ChooseUs = () => {
    return <>
        <div className="choose-us">
            <div className="container">
                <div className="flex gap">
                    <div className="col60">
                        <p><span>Why choose us</span></p>
                        <h3>What Makes Us Different?</h3>
                        <p>Discover what sets us apart in the industry - from modern technology to a global approach. At Refine Pixel we redefine editing.</p>
                        <div className="flex cards">
                            <ChooseCard />
                            <ChooseCard />
                            <ChooseCard />
                            <ChooseCard />
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