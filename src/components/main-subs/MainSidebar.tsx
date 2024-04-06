import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import ServerBtn from "../utils/ServerBtns";
import Icons from "../../shared/icons";
import { useAppDispatch } from "../../shared/rdx-hooks";
import { setShowJoinServer } from "../../shared/rdx-slice";
import { useNavigate } from "react-router-dom";

const MainSidebar = React.memo((props: any) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    React.useEffect(() => {
        navigate('server/test-server')
    }, [])
    
    return (
        <MDBCol md={3} className="main-sidebar flex-wrap d-block p-0">
            <div className="w-100" style={{height: 40, flexShrink: 0}}></div>
                <ServerBtn 
                    title='Test Server' 
                    icon={<Icons.DiscordLogo />}
                    url="server/0"  
                />
                <div className="d-flex justify-content-center">
                    <div className="sidebar-separator"></div>
                </div>
                <ServerBtn 
                    title='Test Server' 
                    url="server/test-server"  
                    img="https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg"
                />
                <ServerBtn 
                    title='Add Channel' 
                    icon={<Icons.Plus className="add-server" />}
                    onClick={(e: any) => {
                        e.preventDefault(dispatch(setShowJoinServer(true)));
                    }}
                />
            
        </MDBCol>
    )
})

export default MainSidebar;