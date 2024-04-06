import React from "react";
import Icons from "../../shared/icons";
import { MDBBtn } from "mdb-react-ui-kit";
import { TUserProfile } from "../../shared/types";

const ProfilePreview = React.memo(React.forwardRef(({user_profile}: {user_profile: TUserProfile}, ref: any) => {
    return (
        <div ref={ref} className="profile-previewer profile-previewer-d-none">
            <div className="previewer-display-container">
                <div className="top-container"></div>
                <div className="bottom-container">

                    <div className="profile-name-container">
                        <div className="img-container">
                            <div>
                                <img src={user_profile.image} alt="" />
                            </div>
                        </div>
                        <div className="icon-container">
                            <div><Icons.HashSign className="profile-tip" /></div>
                        </div>
                        
                    </div>

                    <div className="profile-edit-container mt-2">
                        <div className="profile-edit-container-inner">
                            <div className="profile-names mb-3">
                                <div>{user_profile.name}</div>
                                <div>{user_profile.user_name}</div>
                            </div>

                            <div className="member-since">
                                <div className="title">Member Since</div>
                                <div className="content">
                                    <span>{user_profile.date_joined}</span>
                                    <Icons.Dot />
                                    <span>{new Date().toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="note-container mt-2">
                                <div className="title">Note</div>
                                <div className="send-note" contentEditable={true}></div>
                                <div className="message">
                                    <input type="text" placeholder="Message @testUser" />
                                </div>
                            </div>
                            


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}));

export default ProfilePreview;