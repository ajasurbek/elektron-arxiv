import { Button, message } from "antd";
import { setMainTableData, setModal, setRowId, setValues } from "../../Actions/MerosActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useHistory } from "react-router";

const Action3Btn = ({ setModal, rowId, mainTableData, setMainTableData, setValues, setRowId, values }) => {
  const { location } = useHistory();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/User1":
        setTitle("User1");
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

  return (
    <div style={{ display: "flex", marginBottom: "10px" }}>
      <Button onClick={openAdd} type="primary" className="action_btn">
        <GoPlus></GoPlus> &nbsp;Янги ариза киритиш
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
export default connect(mapStateToProps, { setModal, setValues, setMainTableData, setRowId })(Action3Btn);
