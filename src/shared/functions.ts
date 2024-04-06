import { io } from "socket.io-client";
import { TMessage } from "./types";
import { store } from "./store";
import { updateMessages } from "./rdx-slice";

export const socket_inst = io('localhost:8700', {autoConnect: false})

socket_inst.on('connect', () => {
    console.log("I have connected");
})

export const connect_socket = () => {
    socket_inst.connect()
}

socket_inst.on('send-message', (data: TMessage) => {
    console.log("got message", data);
    
    store.dispatch(updateMessages(data))
})
