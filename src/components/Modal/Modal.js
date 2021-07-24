import Modal from "antd/lib/modal/Modal";
import { connect } from "react-redux";
import ModalForm from "./ModalForm";
import "./Modal.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { setModal, setRowId, setValues } from "../../Actions/MerosActions";

const ModalExampleModal = ({ modal, setValues, setModal, setRowId }) => {
  const clearModal = () => {
    setModal({
      open: false,
      title: null,
      status: null,
    });
    setValues({});
    setRowId(null);
  };

  return (
    <Modal
      centered
      title={
        <div className={"modal_title"}>
          <span>{modal.title}</span>
        </div>
      }
      visible={modal.open}
      footer={null}
      width={modal.title === "Буюртмалар" && 1026}
      onCancel={clearModal}
      closeIcon={
        <AiFillCloseSquare
          style={{
            fontSize: "25px",
            color: "#FF4B4B",
            verticalAlign: "middle",
            width: "28px",
          }}></AiFillCloseSquare>
      }>
      <div className="modal_content">
        <ModalForm clearModal={clearModal}></ModalForm>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.meros.modal,
  };
};

export default connect(mapStateToProps, { setValues, setModal, setRowId })(ModalExampleModal);
