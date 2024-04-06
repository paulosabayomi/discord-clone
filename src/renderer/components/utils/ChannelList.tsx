import React from "react";
import ChannelListHeader from "./ChannelListHeader";
import ChannelListItem from "./ChannelListItem";
import { IChannelList } from "../../shared/types";
import { useParams } from "react-router-dom";

const ChannelList = React.memo(({title, channels}: IChannelList) => {
    const routeParams = useParams()
    const [channelId, setCurrentChannel] = React.useState<string>('')

    React.useEffect(() => {
        setCurrentChannel(routeParams.channelId || '')
    }, [routeParams])

    return (
        <div className="channel-list mb-3">
            <ChannelListHeader title={title} />
            {
                channels?.map(channel => 
                    <ChannelListItem 
                        title={channel.title}
                        url={channel.url}
                        icon={channel.icon}
                        isActive={channelId == channel.url}
                    />
                )
            }
        </div>
    )
});

export default ChannelList;