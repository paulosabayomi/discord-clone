import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import SubDisplayHeader from "../utils/SubDisplayHeader";
import TextBox from "../utils/TextBox";
import WelcomeMessage from "../utils/WelcomeMessage";
import MessageBox from "../utils/MessageBox";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../shared/rdx-hooks";
import { socket_inst } from "../../shared/functions";

const SubDisplay = React.memo((props: any) => {
    const  textBoxRef = React.useRef<HTMLDivElement | null>(null);
    const routeParams = useParams()
    const messages = useAppSelector(state => state.main.messages);

    React.useEffect(() => {
        socket_inst.emit('join-channel', routeParams.channelId);
    }, [routeParams])

    React.useEffect(() => {
        console.log("messages", messages);
        
    }, [])

    return (
        <MDBCol md={9} className="sub-display h-100 p-0 d-flex flex-wrap justify-content-between">
            <SubDisplayHeader />
            <div className="sub-display-mid-container">
                <WelcomeMessage />
                {
                    messages.filter(m => m.channelId == routeParams.channelId).map(msg => 
                        <MessageBox msg={msg}/>
                        )
                }
                
            </div>
            <TextBox />
        </MDBCol>
    )
});

export default SubDisplay;