import { useEffect } from "react";
import { connect } from "react-redux";
import { setMainTableData, setRowId, setValues } from "../../../../Actions/MerosActions";
import Body4SearchTable from "../../../Body4SearchTable";

const SearchTable = ({ setMainTableData, setRowId, setValues }) => {
  useEffect(() => {
    setMainTableData([
      { id: 1, dateSea: "01.08.2012", numberSea: "125", nameSea: "Фаоллар йиғилиш баёни", receiveSea: "Фарғона вилоят архив иши бош бошқармаси", pageSea: "4" },
      { id: 2, dateSea: "01.08.2012", numberSea: "125", nameSea: "Фаоллар йиғилиш баёни", receiveSea: "Фарғона вилоят архив иши бош бошқармаси", pageSea: "4" },
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
      title: <div className="table_head">Хужжат
      санаси</div>,
      dataIndex: "dateSea",
      width: "232px",
      key: "dateSea",
      padding: "1rem",
    },
    {
      title: <div className="table_head">Рақами</div>,
      dataIndex: "numberSea",
      width: "152px",
      key: "numberSea",
    },
    {
      title: <div className="table_head">Хужжат номи</div>,
      dataIndex: "nameSea",
      width: "405px",
      key: "nameSea",
    },
    {
      title: <div className="table_head">Қабул қилган орган номи</div>,
      dataIndex: "receiveSea",
      width: "406px",
      key: "receiveSea",
    },
    {
        title: <div className="table_head">Вароқ</div>,
        dataIndex: "pageSea",
        width: "152px",
        key: "pageSea",
      },
  ];

  return <Body4SearchTable columns={columns} />;
};

export default connect(null, { setMainTableData, setRowId, setValues })(SearchTable);
