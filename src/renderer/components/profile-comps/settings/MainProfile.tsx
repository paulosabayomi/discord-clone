import React from "react";
import Icons from "../../../shared/icons";
import { MDBBtn } from "mdb-react-ui-kit";

const MainProfie = React.memo((props: any) => {
    return (
        <div>
            <div className="settings-title mb-3">My Account</div>
            <div className="profile-display-container">
                <div className="top-container"></div>
                <div className="bottom-container">

                    <div className="profile-name-container">
                        <div className="img-container">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcbLjcZKWWHRRpf5gdOSCI78jLz3gpNgL67AcTD3zFE-zU_GTG" alt="" />
                        </div>
                        <div>
                            <div>Abayomi</div>
                            <div className="mt-2"><Icons.HashSign className="profile-tip" /></div>
                        </div>
                        <div>
                            <MDBBtn>Edit User Profile</MDBBtn>
                        </div>
                    </div>

                    <div className="profile-edit-container">
                        <div className="profile-edit-container-inner">

                            <div className="profile-edit-list mb-3">
                                <div>
                                    <div className="list-title">Display Name</div>
                                    <div>Abayomi</div>
                                </div>
                                <div><MDBBtn>Edit</MDBBtn></div>
                            </div>
                            
                            <div className="profile-edit-list mb-3">
                                <div>
                                    <div className="list-title">Username</div>
                                    <div>paulos_ab</div>
                                </div>
                                <div><MDBBtn>Edit</MDBBtn></div>
                            </div>
                            
                            <div className="profile-edit-list mb-3">
                                <div>
                                    <div className="list-title">Email</div>
                                    <div>*************@gmail.com</div>
                                </div>
                                <div><MDBBtn>Edit</MDBBtn></div>
                            </div>
                            
                            <div className="profile-edit-list">
                                <div>
                                    <div className="list-title">Phone number</div>
                                    <div>**********4969</div>
                                </div>
                                <div><MDBBtn>Edit</MDBBtn></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
});

export default MainProfie;