import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import { setShowJoinServer } from "../../shared/rdx-slice";

const JoinServer = React.memo((props: any) => {
    const show_container = useAppSelector(state => state.main.show_join_server);
    const dispatch = useAppDispatch()

    const handleClose = React.useCallback(() => {
        dispatch(setShowJoinServer(false));
    }, []);

    const handleContainerClick = React.useCallback((e: any) => {
        if (e.target.classList.contains('row')) handleClose();
    }, []);

    return (
        <MDBContainer fluid className={show_container ? "join-server-container" : "join-server-container d-none"} onClick={handleContainerClick}>
            <MDBRow className="w-100 h-100 d-flex align-items-center justify-content-center">
                <MDBCol md={5} className="join-server-inner p-0">
                    <div className="title">Create Your Server</div>
                    <div className="description">
                        Your server is where you and your friends hang out. Make 
                        yours and start talking.
                    </div>
                    <div className="server-info">
                        <div className="title">Server name</div>
                        <div className="mt-2">
                            <input type="text" defaultValue={"Abayomi's Server"} />
                        </div>
                    </div>
                    <div className="buttons-container">
                        <MDBBtn>Create Server</MDBBtn>
                        <MDBBtn>Join Server</MDBBtn>
                        <MDBBtn onClick={handleClose}>Cancel</MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
});

export default JoinServer;