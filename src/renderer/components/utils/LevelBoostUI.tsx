import React from "react";
import Icons from "../../shared/icons";

const LevelBoostUI = React.memo((props: any) => {
    return (
        <div className="level-boost-ui mb-3">
            <div className="d-flex justify-content-between mb-2">
                <div>Goal: LVL 20</div>
                <div className="boost-txt">
                    <span><span>0/2</span> Boosts</span> 
                    <Icons.AngleRight />
                </div>
            </div>

            <div>
                <div className="progress-bar"></div>
            </div>
        </div>
    )
});

export default LevelBoostUI;