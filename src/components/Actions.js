import { Button, message } from "antd";
import { RiEdit2Line } from "react-icons/ri";
import { setMainTableData, setModal, setRowId, setValues } from "../Actions/MerosActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { useHistory } from "react-router";

const Actions = ({ setModal, rowId, mainTableData, setMainTableData, setValues, setRowId, values }) => {
  const { location } = useHistory();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/Foydalanuvchi":
        setTitle("Foydalanuvchi");
        break;

      default:
        break;
    }
  }, [location.pathname]);

  const openAdd = () => {
    setModal({
      title: title,
      open: true,
      status: "add",
    });
    setValues({});
    setRowId(null);
  };
  const openEdit = () => {
    if (rowId) {
      let item = mainTableData.find((i) => i.id === rowId);
      values === {} && setValues(item);
      setModal({
        title: title,
        open: true,
        status: "edit",
      });
    } else {
      message.warning("Qatorni tanlang!");
    }
  };
  const handleDelete = () => {
    let newData = mainTableData.filter((i) => i.id !== values.id);
    setMainTableData(newData);
  };

  return (
    <div style={{ display: "flex", marginBottom: "10px" }}>
      <Button onClick={openAdd} type="primary" className="action_btn">
        <GoPlus></GoPlus> &nbsp; Қўшиш
      </Button>

      <Button onClick={openEdit} type="primary" className="action_btn yellow">
        <RiEdit2Line></RiEdit2Line> &nbsp; Ўзгартириш
      </Button>

      <Button onClick={handleDelete} className="action_btn_red">
        <CgClose></CgClose> &nbsp; Ўчириш
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.meros.modal,
    rowId: state.meros.rowId,
    mainTableData: state.meros.mainTableData,
    values: state.meros.values,
  };
};
export default connect(mapStateToProps, { setModal, setValues, setMainTableData, setRowId })(Actions);
