import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Action3User1 from './Action3/Action3User1'
import Header from "./Header";
import NavBar from "./Sidebar/Navbar";
import MainTable from "./Table/MainTable";
import ModalExampleModal from "./Modal/Modal";

const Body4SearchTable = ({ columns, rowS, datas }) => {
  const [searchDataSource, setSearchDataSource] = useState([]);
  useEffect(() => {
    setSearchDataSource(datas);
  }, [datas]);
  return (
    <>

<NavBar ></NavBar>
      <div className="Body">
<Action3User1/>

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

export default connect(mapStateToProps)(Body4SearchTable);


