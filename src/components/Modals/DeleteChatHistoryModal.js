import React, { useContext } from "react";
import { Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import "./style.css";

export default function DeleteChatHistoryModal() {
  const { isDeleteChatHistoryModalOpen, setIsDeleteChatHistoryModalOpen } =
    useContext(AppContext);

  const handleOk = () => {
    // Rời nhóm và xóa tin nhắn
    setIsDeleteChatHistoryModalOpen(false);
  };

  const handleCancel = () => {
    setIsDeleteChatHistoryModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Xóa lịch sử trò chuyện"
        centered
        open={isDeleteChatHistoryModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        cancelText="Không"
        okText="Xóa"
      >
        <span style={{ fontSize: "16px" }}>
          Toàn bộ nội dung trò chuyện sẽ bị xóa vĩnh viễn. Bạn có chắc chắn muốn
          xóa?
        </span>
      </Modal>
    </div>
  );
}
