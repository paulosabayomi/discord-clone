import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import SubSidebar from "../server-sub/SubSidebar";
import SubDisplay from "../server-sub/SubDisplay";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const MainDisplay = React.memo((props: any) => {
    const navigate = useNavigate();
    const routeParams = useParams()

    React.useEffect(() => {
        routeParams.serverId !== '0' ?
        navigate('channel/welcome-and-rules'):
        navigate('channel/test-dm')
    }, []);

    return (
        <MDBCol md={9} className="main-display p-0 h-100">
            <MDBContainer fluid className="p-0 h-100">
                <MDBRow className="m-0 p-0 h-100">
                    <SubSidebar />
                    <Outlet />
                </MDBRow>
            </MDBContainer>
        </MDBCol>
    )
})

export default MainDisplay;