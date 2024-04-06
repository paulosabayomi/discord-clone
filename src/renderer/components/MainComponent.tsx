import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import MainSidebar from "./main-subs/MainSidebar";
import MainDisplay from "./main-subs/MainDisplay";
import { Outlet, useNavigate } from "react-router-dom";
import JoinServer from "./profile-comps/JoinServer";
import AddChannel from "./profile-comps/AddChannel";

const MainComponent = React.memo((props: any) => {
    const navigate = useNavigate()

    React.useLayoutEffect(() => {
        navigate('server/test-server')
    }, [])

    return (
        <MDBContainer fluid className="main-component p-0">
            <MDBRow className="w-100 h-100 m-0">
                <MainSidebar />
                <Outlet />
            </MDBRow>
            <JoinServer />
            <AddChannel />
        </MDBContainer>
    )
})

export default MainComponent