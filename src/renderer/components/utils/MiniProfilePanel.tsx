import React from "react"
import Icons from "../../shared/icons"
import ProfilePreview from "../profile-comps/ProfilePreview";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../shared/rdx-hooks";

const MiniProfilePanel = React.memo((props: any) => {
    const profilePreviewerRef = React.useRef<HTMLDivElement | null>(null);
    const user_profile = useAppSelector(state => state.main.user_profile)

    const handleShowPreviewer = React.useCallback((e: any) => {
        e.stopPropagation();

        document.querySelectorAll('.profile-previewer ').forEach(el => {
            el.classList.remove('profile-previewer-d-flex')
            el.classList.add('profile-previewer-d-none')
        })
        profilePreviewerRef.current?.classList.remove('profile-previewer-d-none');
        profilePreviewerRef.current?.classList.add('profile-previewer-d-flex');
    }, [profilePreviewerRef.current])

    return (
        <div className="mini-profile-panel">
            <div>
                <div className="profile-img" onClick={handleShowPreviewer}>
                    {
                        false ? <Icons.DiscordLogo className="profile-img-logo" />:
                        <img src={user_profile.image} alt="" />
                    }

                </div>
                <div className="profile-details">
                    <div>{user_profile.name}</div>
                    <div className="status">Online</div>
                </div>
            </div>
            <div>
                <Link to={'audio-channel'}>
                    <Icons.MicMuted className="mic" />
                </Link>
                <Icons.Headset />
                <Link to={'/settings'}>
                    <Icons.Settings />
                </Link>
            </div>
        </div>
    )
});

export default MiniProfilePanel;