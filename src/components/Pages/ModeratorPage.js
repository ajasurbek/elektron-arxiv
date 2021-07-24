import { useEffect } from "react";
import { connect } from "react-redux";
import { setMainTableData, setRowId, setValues } from "../../Actions/MerosActions";
import Body from "../Body";

const Helper = ({ setMainTableData, setRowId, setValues }) => {
  useEffect(() => {
    setMainTableData([
      { id: 1, dateWri: "20.06.2021", status: '+', nameDoc: "Фаоллар йиғилиш баёни", numberDoc: "125", dateDoc: "01.08.2012", documentLang: 'ўзбек', receiveDoc: 'Фарғона вилоят архи...' },
      { id: 2, dateWri: "20.06.2021", status: '-', nameDoc: "Фаоллар йиғилиш баёни", numberDoc: "125", dateDoc: "01.08.2012", documentLang: 'ўзбек', receiveDoc: 'Фарғона вилоят архи...' },
      { id: 3, dateWri: "20.06.2021", status: '-', nameDoc: "Фаоллар йиғилиш баёни", numberDoc: "125", dateDoc: "01.08.2012", documentLang: 'ўзбек', receiveDoc: 'Фарғона вилоят архи...' },
      { id: 4, dateWri: "20.06.2021", status: '+', nameDoc: "Фаоллар йиғилиш баёни", numberDoc: "125", dateDoc: "01.08.2012", documentLang: 'ўзбек', receiveDoc: 'Фарғона вилоят архи...'},
      { id: 5, dateWri: "20.06.2021", status: '-', nameDoc: "Фаоллар йиғилиш баёни", numberDoc: "125", dateDoc: "01.08.2012", documentLang: 'ўзбек', receiveDoc: 'Фарғона вилоят архи...' },
    ]);
    setRowId(null)
    setValues({})
  }, [setMainTableData]);
  
  const columns = [
    {
      title: <div className="table_head">№</div>,
      key: "index",
      render: (text, record, index) => index + 1,
      width: "40px",
      align: "center",
    },
    {
      title: <div className="table_head">Киритилган сана</div>,
      dataIndex: "dateWri",
      width: "40px",
      key: "dateWri",
      padding: "1rem",
    },
    {
      title: <div className="table_head">Статус</div>,
      dataIndex: "status",
      width: "20px",
      key: "status",
      padding: "1rem",
    },
    {
      title: <div className="table_head">Хужжат номи</div>,
      dataIndex: "nameDoc",
      width: "270px",
      key: "nameDoc",
    },
    {
      title: <div className="table_head">Рақами</div>,
      dataIndex: "numberDoc",
      width: "40px",
      key: "numberDoc",
    },
    {
      title: <div className="table_head">Хужжат санаси</div>,
      dataIndex: "dateDoc",
      width: "100px",
      key: "dateDoc",
    },
    {
      title: <div className="table_head">Хужжат тили</div>,
      dataIndex: "documentLang",
      width: "80px",
      key: "documentLang",
    },
    {
      title: <div className="table_head">Қабул қилган орган номи</div>,
      dataIndex: "receiveDoc",
      width: "270px",
      key: "receiveDoc",
    },
  ];

  return <Body columns={columns} />;
};

export default connect(null, { setMainTableData, setRowId, setValues })(Helper);
