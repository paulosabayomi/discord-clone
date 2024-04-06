import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import SubSidebarHeader from "../utils/SubSidebarHeader";
import LevelBoostUI from "../utils/LevelBoostUI";
import ChannelList from "../utils/ChannelList";
import MiniProfilePanel from "../utils/MiniProfilePanel";
import ChannelListItem from "../utils/ChannelListItem";
import Icons from "../../shared/icons";
import { useParams } from "react-router-dom";

const SubSidebar = React.memo((props: any) => {
    const routeParams = useParams()

    return (
        <MDBCol md={3} className="sub-sidebar p-0 h-100">
            {
                routeParams.serverId == '0' ?
                <div className="search-box header-search-box d-flex justify-content-center">
                    <input type="text" placeholder="Find or start a conversation" />
                </div>:
                <SubSidebarHeader />
            }
            <div className="sub-sidebar-inner px-2">
                <LevelBoostUI />
                
                {
                    routeParams.serverId == '0' &&
                    <div className="mb-4">
                        <div className="mb-2">
                            <ChannelListItem 
                                tools={false}
                                icon={<Icons.Friends className="hash-sign" style={{marginRight: 15}} />}
                                title="Friends" 
                                url="channel/welcome-and-rules" 
                            />

                        </div>
                        <div className="mb-2">
                            <ChannelListItem 
                                icon={<Icons.Nitro className="hash-sign" style={{marginRight: 15}} />}
                                tools={false}
                                title="Nitro" 
                                url="channel/welcome-and-rules" 
                            />

                        </div>
                        <div className="mb-2">
                            <ChannelListItem 
                                icon={<Icons.Shop className="hash-sign" style={{marginRight: 15}} />}
                                tools={false}
                                title="Shop" 
                                url="channel/welcome-and-rules" 
                            />
                        </div>

                    </div>
                }

                {
                    routeParams.serverId == '0' ? 
                    <ChannelList 
                        title="Direct Messages"
                        channels={[
                            {
                                title: 'Abayomi',
                                url: 'channel/test-dm',
                                icon: <Icons.DiscordLogo className="hash-sign"  />
                            }
                        ]}

                    />:
                    <>
                        <ChannelList 
                            title="Information"
                            channels={[
                                {
                                    title: 'welcome-and-rules',
                                    url:'channel/welcome-and-rules'
                                },
                                {
                                    title: 'notes-resources',
                                    url:'channel/notes-resources'
                                },
                            ]}
                        />
                        <ChannelList 
                            title="Text channels"
                            channels={[
                                {
                                    title: 'general',
                                    url: 'channel/general'
                                },
                                {
                                    title: 'homework-help',
                                    url: 'channel/homework-help'
                                },
                            ]}
                        />
                    </>
                }

            </div>
            <MiniProfilePanel />
        </MDBCol>
    )
});

export default SubSidebar;