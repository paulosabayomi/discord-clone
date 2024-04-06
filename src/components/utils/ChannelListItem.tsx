import React from "react";
import Icons from "../../shared/icons";
import { Link, useParams } from "react-router-dom";
import { IChannelListItem } from "../../shared/types";

const ChannelListItem = React.memo(({url, title, icon, tools, isActive}: IChannelListItem) => {
   
    return (
        <Link to={url} className={isActive ?  "channel-list-item active" : "channel-list-item"}>
            <div>
                {
                    icon || <Icons.HashSign className="hash-sign" />
                }
                <span>{title}</span>
            </div>
                <div>
                    {
                        tools === undefined &&
                        <>
                            <Icons.AddUser />
                            <Icons.Settings />
                        </>
                    }
                </div>
        </Link>
    )
})

export default ChannelListItem;