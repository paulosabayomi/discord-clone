import React from "react";
import Icons from "../../shared/icons";
import { useAppDispatch } from "../../shared/rdx-hooks";
import { setShowAddChannel } from "../../shared/rdx-slice";

const ChannelListHeader = React.memo(({title}: {title: string}) => {
    const dispatch = useAppDispatch()

    return (
        <div className="channel-header">
            <div>
                <Icons.AngleBottom />
                <span>{title}</span>
            </div>
            <Icons.Plus onClick={() => dispatch(setShowAddChannel(true))} />
        </div>
    )
});

export default ChannelListHeader;