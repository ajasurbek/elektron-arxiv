
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Actions from "./Actions";
import Header from "./Header";
import MainTable from "./Table/MainTable";
import ModalExampleModal from "./Modal/Modal";

const Body2 = ({ columns, rowS, datas }) => {
  const [searchDataSource, setSearchDataSource] = useState([]);
  useEffect(() => {
    setSearchDataSource(datas);
  }, [datas]);
  return (
    <>

<Header columns={columns} setSearchDataSource={setSearchDataSource}></Header>
      <div className="Body">
        <Actions></Actions>
        <MainTable columns={columns} data={searchDataSource} rowS={rowS}></MainTable>
        <ModalExampleModal></ModalExampleModal>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    datas: state.meros.mainTableData,
  };
};

export default connect(mapStateToProps)(Body2);


