import { useEffect } from "react";
import { connect } from "react-redux";
import { setMainTableData, setRowId, setValues } from "../../Actions/MerosActions";
import Body2 from "../Body2";

const Users = ({ setMainTableData, setRowId, setValues }) => {
  useEffect(() => {
    setMainTableData([
      { id: 1, nameW: "Эргашев Жавохир", loginW: "birnima", passwordW: "bilmadim", typeW: "admin" },
      { id: 2, nameW: "Ғайратжонов Юсуфжон", loginW: "birnima", passwordW: "bilmadim", typeW: "moderator" },
    ]);
    setRowId(null)
    setValues({})
  }, [setMainTableData]);
  
  const columns = [
    {
      title: <div className="table_head">№</div>,
      key: "index",
      render: (text, record, index) => index + 1,
      width: "50px",
      align: "center",
    },
    {
      title: <div className="table_head">Исм Фамилия</div>,
      dataIndex: "nameW",
      width: "232px",
      key: "nameW",
      padding: "1rem",
    },
    {
      title: <div className="table_head">Логин</div>,
      dataIndex: "loginW",
      width: "152px",
      key: "loginW",
    },
    {
      title: <div className="table_head">Пароль</div>,
      dataIndex: "passwordW",
      width: "145px",
      key: "passwordW",
    },
    {
      title: <div className="table_head">Тури</div>,
      dataIndex: "typeW",
      width: "606px",
      key: "typeW",
    },
  ];

  return <Body2 columns={columns} />;
};

export default connect(null, { setMainTableData, setRowId, setValues })(Users);
