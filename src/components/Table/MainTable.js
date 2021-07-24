import { Table } from "ant-table-extensions";
import { connect } from "react-redux";
import { setMainTableData, setRowId, setValues } from "../../Actions/MerosActions";
import { useHistory } from "react-router";
import "./Table.css";

const MainTable = ({ columns, data, setRowId, rowId, values, setValues }) => {
  const { location } = useHistory();

  const onRowClicked = (item) => {
    return {
      onClick: () => {
        setRowId(item.id);
        setValues(item);
      },
    };
  };


   const setRowClassName = (record) => {
    if (location.pathname !== "/SMS" && location.pathname !== "/hisobot") {
      return record.id === rowId ? "clickRowStyl" : "";
    }
    return "table_row";
  };


  const rowSelection = {
    onChange: (key) => {
      for (let i = 0; i < key.length; i++) {
        const el = key[i];
        data.map((item) => {
          if (item.id === el) {
            setMainTableData([{ ...data, message: values }]);
          }
        });
      }
    },
  };

  return (
    <>
      <div className="main_table">
        <Table
          size="small"
          pagination={false}
          rowClassName={setRowClassName}
          dataSource={data}
          columns={columns}
          onRow={onRowClicked}
        
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rowId: state.meros.rowId,
    values: state.meros.values,
  };
};

export default connect(mapStateToProps, { setRowId, setValues })(MainTable);
