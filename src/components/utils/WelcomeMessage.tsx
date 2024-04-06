import React from "react";
import Icons from "../../shared/icons";
import { MDBBtn } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

const WelcomeMessage = React.memo((props: any) => {
    const routeParams = useParams()
    return (
        <div className="welcome-message">
            <div>
                {
                    routeParams.serverId == '0' ?
                    <Icons.DiscordLogo />:
                    <Icons.HashSign />
                }
            </div>
            <div className="title">
                Welcome to {routeParams.channelId}
            </div>
            <div>
                This is the start of the {routeParams.channelId} channel
            </div>
            <div>
                <MDBBtn className="m-0 px-0">
                    <Icons.EditIcon className="mx-2" /> Edit Channel
                </MDBBtn>
            </div>
        </div>
    )
});

export default WelcomeMessage