import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import { setShowAddChannel } from "../../shared/rdx-slice";

const AddChannel = React.memo((props: any) => {
    const show_container = useAppSelector(state => state.main.show_add_channel);
    const dispatch = useAppDispatch()

    const handleClose = React.useCallback(() => {
        dispatch(setShowAddChannel(false));
    }, []);

    const handleContainerClick = React.useCallback((e: any) => {
        if (e.target.classList.contains('row')) handleClose();
    }, []);

    return (
        <MDBContainer fluid className={show_container ? "join-server-container" : "join-server-container d-none"} onClick={handleContainerClick}>
            <MDBRow className="w-100 h-100 d-flex align-items-center justify-content-center">
                <MDBCol md={5} className="join-server-inner p-0">
                    <div className="title">Create Channel</div>
                    <div className="">
                        In #Test-Channel
                    </div>
                    <div className="server-info">
                        <div className="title">Channel name</div>
                        <div className="mt-2">
                            <input type="text" placeholder={"# new-channel"} />
                        </div>
                    </div>
                    <div className="buttons-container">
                        <MDBBtn>Create Channel</MDBBtn>
                        <MDBBtn onClick={handleClose}>Cancel</MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
});

export default AddChannel;