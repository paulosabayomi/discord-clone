import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import { Outlet, useNavigate, useNavigation } from "react-router";
import Icons from "../../../shared/icons";

const SettingsDisplay = React.memo((props: any) => {
    const navigation = useNavigate()

    const handleGoBack = React.useCallback(() => {
        navigation(-1)
    }, [])

    React.useLayoutEffect(() => {
        document.onkeydown = (e) => {
            if (e.key.toLowerCase() === 'escape') handleGoBack()
        }
    }, [])

    return (
        <MDBCol xs={9} md={9} className="h-100" style={{paddingTop: 60}}>
            <div className="close-button" onClick={handleGoBack}>
                <div className="close-btn-inner">
                    <Icons.CancelIcon />
                    <div className="text">ESC</div>
                </div>
            </div>
            <Outlet />
        </MDBCol>
    )
})

export default SettingsDisplay;