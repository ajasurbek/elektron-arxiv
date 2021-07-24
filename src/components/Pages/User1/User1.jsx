import { useEffect } from "react";
import { connect } from "react-redux";
import { setMainTableData, setRowId, setValues } from "../../../Actions/MerosActions";
import Body3User1 from "../../Body3User1";

const User1 = ({ setMainTableData, setRowId, setValues }) => {
  useEffect(() => {
    setMainTableData([
      { id: 1, dateApplication: "01.08.2012", numberApplication: "1", stateApplication: "Янги", fullname: "Махмудов Сирожиддин Адхамович", deadlineApplication: "10 кун", file: 'dsd' },
      { id: 2, dateApplication: "01.08.2012", numberApplication: "1", stateApplication: "Янги", fullname: "Махмудов Сирожиддин Адхамович", deadlineApplication: "10 кун", file: 'dsd' },
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
      title: <div className="table_head">Ариза санаси</div>,
      dataIndex: "dateApplication",
      width: "232px",
      key: "dateApplication",
      padding: "1rem",
    },
    {
      title: <div className="table_head">Рақами</div>,
      dataIndex: "numberApplication",
      width: "152px",
      key: "numberApplication",
    },
    {
      title: <div className="table_head">Ҳолати</div>,
      dataIndex: "stateApplication",
      width: "145px",
      key: "stateApplication",
    },
    {
      title: <div className="table_head">Аризачи  Ф.И.Ш.</div>,
      dataIndex: "fullname",
      width: "606px",
      key: "fullname",
    },
    {
        title: <div className="table_head">Бажариш муддати</div>,
        dataIndex: "deadlineApplication",
        width: "606px",
        key: "deadlineApplication",
      },
      {
        title: <div className="table_head">Файл</div>,
        dataIndex: "file",
        width: "606px",
        key: "file",
      },
  ];

  return <Body3User1 columns={columns} />;
};

export default connect(null, { setMainTableData, setRowId, setValues })(User1);
