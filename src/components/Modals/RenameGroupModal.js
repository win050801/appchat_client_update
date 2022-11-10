import React, { useContext,useState } from "react";
import { Input, Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import "./style.css";
import axios from "axios";
import {renameRoom} from "../../utils/APIRoutes"
import { async } from "@firebase/util";
export default function RenameGroupModal() {
  const { isRenameGroupModalOpen, setIsRenameGroupModalOpen,roomChat,setRoomChat,rooms,setRooms } =
    useContext(AppContext);
  const [name,setName] = useState()
  const handleOk = async () => {

    
    const { respon } = await axios.post(renameRoom, {
      id:roomChat.id,
      roomName:name,
    });
    const roomChatTam = {
      id:roomChat.id,
      roomName:name,
      members:roomChat.members,
      manager:roomChat.manager,
      createdAt:roomChat.createdAt
    }
    const roomsTam= [...rooms]
    roomsTam.splice(rooms.indexOf(roomChat),1,roomChatTam)
    // console.log(roomsTam);
    setRooms(roomsTam)
    setRoomChat(roomChatTam)
    setIsRenameGroupModalOpen(false);
  };

  const handleCancel = () => {
    setIsRenameGroupModalOpen(false);
  };

 

  return (
    <div>
      <Modal
        title="Đổi tên nhóm"
        centered
        open={isRenameGroupModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        cancelText="Hủy"
        okText="Xác nhận"
      >
        <span style={{ fontSize: "16px" }}>
          Bạn có chắc muốn đổi tên nhóm, khi xác nhận tên nhóm mới sẽ hiển thị
          với tất cả thành viên.
        </span>
        <div>
          {roomChat!==undefined ? (<div>
            <Input   onChange={(e) => setName(e.target.value)} />
          </div>):(<div></div>)}
        </div>
        
      </Modal>
    </div>
  );
}
