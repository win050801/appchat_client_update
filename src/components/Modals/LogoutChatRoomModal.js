import React, { useContext ,useState} from "react";
import { Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import "./style.css";
import axios from "axios";
import {addTT , updateManager} from "../../utils/APIRoutes"
import { async } from "@firebase/util";
export default function LogoutChatRoomModal() {
  const { isLogoutChatRoomModalOpen,setShowInfoRoom, setIsLogoutChatRoomModalOpen,user,roomChat,setRoomChat, rooms,setRooms,} =
    useContext(AppContext);
  const [err,seterr] = useState("")
  const handleLogout = async () => {
    // Rời nhóm và xóa tin nhắn
    if(user._id===roomChat.manager)
    {

      const membersTam =[...roomChat.members] 
      membersTam.splice(membersTam.indexOf(user._id),1)
      const roomChatTam = {
        id:roomChat.id,
        manager:roomChat.manager,
        roomName:roomChat.roomName,
        members:membersTam,
        createdAt:roomChat.createdAt
      }

      const { data1 } = await axios.post(addTT, {
        id:roomChat.id,
        mems:membersTam,
      });
      const { respon } = await axios.post(updateManager, {
        id:roomChat.id,
        idManager:membersTam[0],
      });
      const roomsTam = [...rooms]
      roomsTam.splice(rooms.indexOf(roomChat),1)
      setRooms(roomsTam)
      setRoomChat(roomChatTam)
      setRoomChat(undefined)
      setShowInfoRoom(false)
      setIsLogoutChatRoomModalOpen(false);
      
    }
    else{
      const membersTam =[...roomChat.members] 
      membersTam.splice(membersTam.indexOf(user._id),1)
      const roomChatTam = {
        id:roomChat.id,
        manager:roomChat.manager,
        roomName:roomChat.roomName,
        members:membersTam,
        createdAt:roomChat.createdAt
      }

      const { data1 } = await axios.post(addTT, {
        id:roomChat.id,
        mems:membersTam,
      });

      const roomsTam = [...rooms]
      roomsTam.splice(rooms.indexOf(roomChat),1)
      setRooms(roomsTam)
      setRoomChat(roomChatTam)
      setRoomChat(undefined)
      setShowInfoRoom(false)
      setIsLogoutChatRoomModalOpen(false);
    }
    
  };

  const handleCancel = () => {
    console.log(rooms.indexOf(roomChat));
    console.log(roomChat);
    setIsLogoutChatRoomModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Rời nhóm và xóa hội thoại"
        centered
        open={isLogoutChatRoomModalOpen}
        onCancel={handleCancel}
        onOk={handleLogout}
        cancelText="Không"
        okText="Rời nhóm"
      >
        <span style={{ fontSize: "16px" }}>
          Bạn không thể xem lại tin nhắn của nhóm này sau khi rời nhóm.
        </span>
        <div>
        {user !==undefined && roomChat !==undefined ? (<div>{user._id===roomChat.manager ? (<span style={{ fontSize: "16px" }}>Vui lòng chọn nhóm trưởng mới hoặc hệ thống sẽ chọn tự động</span>):(<span></span>)}</div>):(<div></div>) }
        
        </div>
       
      </Modal>
    </div>
  );
}
