// Define a type for the slice state
export interface IMainState {
    messages: Array<TMessage>;
    user_profile: TUserProfile;
    show_join_server: boolean;
    show_add_channel: boolean;
}

export type TMessage = {
    message: string;
    profile: TUserProfile;
    date: string;
    channelId: string;
}

export type TUserProfile = {
    name: string;
    user_name: string;
    date_joined: string;
    id: number;
    image: string;
}

export interface IServerBtn {
    icon?: any; 
    img?: string; 
    title: string; 
    url?: string;
    onClick?: any;
}

export interface IChannelList {
    title: string; 
    channels?: Array<{
        title: string; 
        url: string;
        icon?: any;
    }>
}

export interface IChannelListItem {
    url: string; 
    title: any; 
    icon?: any; 
    tools?: boolean; 
    isActive?: boolean;
}