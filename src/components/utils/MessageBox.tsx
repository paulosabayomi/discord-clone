import React from "react";
import Icons from "../../shared/icons";
import ProfilePreview from "../profile-comps/ProfilePreview";
import { TMessage } from "../../shared/types";

const MessageBox = React.memo(({msg}: {msg: TMessage}) => {
    const profilePreviewerRef = React.useRef<HTMLDivElement | null>(null);

    const handleShowPreviewer = React.useCallback((e: any) => {
        e.stopPropagation();

        document.querySelectorAll('.profile-previewer ').forEach(el => {
            el.classList.remove('profile-previewer-d-flex')
            el.classList.add('profile-previewer-d-none')
        })
        profilePreviewerRef.current?.classList.remove('profile-previewer-d-none');
        profilePreviewerRef.current?.classList.add('profile-previewer-d-flex');
    }, [profilePreviewerRef.current])

    React.useLayoutEffect(() => {
        document.onclick = (e: any) => {
            e.stopPropagation()
            const target = e.target
            if (!target?.classList.contains('profile-previewer')) {
                document.querySelectorAll('.profile-previewer ').forEach(el => {
                    el.classList.remove('profile-previewer-d-flex')
                    el.classList.add('profile-previewer-d-none')
                })
            }
        }

    }, [profilePreviewerRef.current])

    return (
        <div className="message-box mb-2">
            <div onClick={handleShowPreviewer}>
                {
                    false ? <Icons.DiscordLogo /> : 
                    <img src={msg.profile.image} alt="" />
                }
                <ProfilePreview user_profile={msg.profile} ref={profilePreviewerRef} />
            </div>
            <div>
                <div className="user-name">
                    {msg.profile.name} <span>{msg.date}</span>
                </div>
                <div className="message-display">
                    {msg.message}
                </div>
            </div>
            <div className="tools">
                <Icons.SmileyFace />
                <Icons.EditIcon />
                <Icons.Thread />
                <Icons.More />
            </div>
        </div>
    )
});

export default MessageBox;