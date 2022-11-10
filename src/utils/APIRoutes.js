export const host = "http://localhost:5000";
export const loginRoute = `${host}/api/auth/login`;
export const KtraRoute = `${host}/api/auth/ktraSDT`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
//Send Messsage
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const addreaction = `${host}/api/messages/addreaction`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;
export const addRoom = `${host}/api/room/addRoom`;
export const getRoom = `${host}/api/room/getRoom`;
//Get Message Room Chat
export const getMessagesRoom = `${host}/api/messages/getMessagesRoom`;
export const addTT = `${host}/api/room/addTT`;

//Image Send
export const imageMessageSend = `${host}/api/messages/image-message-send`;
//File Send
export const fileMessageSend = `${host}/api/messages/file-message-send`;
//Delete Message FromSelf
export const deleteMessageFromSelf = `${host}/api/messages/delete-message-fromSelf`;
//Delete Message ToAll
export const deleteMessageToAll = `${host}/api/messages/delete-message-toAll`;
