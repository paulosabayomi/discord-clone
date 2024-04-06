import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import SettingsSidebar from "./SettingsSidebar";
import SettingsDisplay from "./SettingsDisplay";

const SettingsMain = React.memo((props: any) => {
    return (
        <MDBContainer fluid className="settings-container p-0">
            <MDBRow className="w-100 h-100 m-0">
                <div className="app-dragger"></div>
                <SettingsSidebar />
                <SettingsDisplay />
            </MDBRow>
        </MDBContainer>
    )
})

export default SettingsMain;