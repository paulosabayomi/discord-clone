import React from "react";
import { IServerBtn } from "../../shared/types";
import { Link } from "react-router-dom";

const ServerBtn = React.memo(({icon, img, title, url, onClick}: IServerBtn) => {
    return (
        <Link to={url || ''} className="channel-btn mb-2" onClick={onClick}>
            {
                icon || <img src={img} alt="" />
            }
        </Link>
    )
})

export default ServerBtn