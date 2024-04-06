import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainComponent from "../components/MainComponent";
import MainDisplay from "../components/main-subs/MainDisplay";
import SubDisplay from "../components/server-sub/SubDisplay";
import SettingsMain from "../components/profile-comps/settings/SettingsMain";
import MainProfie from "../components/profile-comps/settings/MainProfile";
import AudioChannel from "../components/audio-channel/AudioChannel";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainComponent />,
        children: [
            {
                path: 'server/:serverId',
                element: <MainDisplay />,
                children: [
                    {
                        path: 'channel/:channelId',
                        element: <SubDisplay />
                    },
                    {
                        path: 'audio-channel/:channelId',
                        element: <AudioChannel />
                    }
                ]
            }
        ]
    },
    {
        path: 'settings',
        element: <SettingsMain />,
        children: [
            {
                path: 'main-profile',
                element: <MainProfie />
            }
        ]
    }
]);