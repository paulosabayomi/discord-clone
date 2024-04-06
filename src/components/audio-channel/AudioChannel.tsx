import { MDBCol, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import SubDisplayHeader from "../utils/SubDisplayHeader";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useAppSelector } from "../../shared/rdx-hooks";

const AudioChannel = React.memo((props: any) => {
    const user_profile = useAppSelector(state => state.main.user_profile);

    return (
        <MDBCol md={9} className="sub-display h-100 p-0 d-flex flex-column justify-content-between">
            <SubDisplayHeader />

            <JitsiMeeting
                domain = { 'meet.opensuse.org' }
                roomName = "the-discord-clone-discussion"
                configOverwrite = {{
                    startWithAudioMuted: true,
                    disableModeratorIndicator: true,
                    startScreenSharing: true,
                    enableEmailInStats: false
                }}
                interfaceConfigOverwrite = {{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
                }}
                // @ts-ignore
                userInfo = {{
                    displayName: user_profile.user_name
                }}
                onApiReady = { (externalApi) => {
                    // here you can attach custom event listeners to the Jitsi Meet External API
                    // you can also store it locally to execute commands
                } }
                getIFrameRef = { (iframeRef) => { iframeRef.style.height = '100%'; } }
            />

        </MDBCol>
    )
})

export default AudioChannel