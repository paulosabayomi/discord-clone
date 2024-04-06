import React from "react";
import { useParams } from "react-router-dom";
import Icons from "../../shared/icons";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import { updateMessages } from "../../shared/rdx-slice";
import { TMessage } from "../../shared/types";
import { socket_inst } from "../../shared/functions";

const TextBox = React.memo((props: any) => {
    const routeParams = useParams()
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch()
    const userProfile = useAppSelector(state => state.main.user_profile)

    const handleOnInput = React.useCallback((e: any) => {
        document.documentElement.style.setProperty('--text-box-container-height', containerRef.current?.clientHeight + 'px')
        const targetEl = e.currentTarget
        if (targetEl.innerText !== '') {
            document.documentElement.style.setProperty('--text-box-placeholder', '""')
        }else{
            document.documentElement.style.setProperty('--text-box-placeholder', `"Message #${routeParams.channelId}"`)
        }
    }, [routeParams, containerRef]);

    const handleKeyUp = React.useCallback((e: any) => {
        const targetEl = e.currentTarget
        if (e.key.toLowerCase() == 'enter' && !e.shiftKey) {
            console.log(targetEl.innerText.trim());
            if (targetEl.innerText.trim() == '') return;
            const messageObj: TMessage = {
                message: targetEl.innerText.trim(),
                profile: userProfile,
                date: new Date().toLocaleString(),
                channelId: routeParams.channelId as string
            }
            dispatch(updateMessages(messageObj))
            socket_inst.emit('send-message', messageObj)
            targetEl.innerText = ''
            document.documentElement.style.setProperty('--text-box-placeholder', `"Message #${routeParams.channelId}"`)
        }
        
    }, [routeParams])


    React.useLayoutEffect(() => {
        document.documentElement.style.setProperty('--text-box-placeholder', `"Message #${routeParams.channelId}"`)
    }, [routeParams])

    return (
        <div ref={containerRef} className="text-box-container">
            <div onInput={handleOnInput} className="text-box-main" onKeyUp={handleKeyUp}
                contentEditable={true}>
            </div>
            <div className="left-icon">
                <Icons.PlusCircle />
            </div>
            <div className="right-icons">
                <Icons.GiftBox />
                <Icons.GifIcon className="gif"/>
                <Icons.SmileyFaceBox />
                <Icons.SmileyFace />
            </div>
        </div>
    )
})

export default TextBox