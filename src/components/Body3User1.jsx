import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Action3User1 from './Action3/Action3User1'
import Header from "./Header";
import NavBar from "./Sidebar/Navbar";
import MainTable from "./Table/MainTable";
import './Body.css'
import './Body3User1.css'
import ModalExampleModal from "./Modal/Modal";

const Body3User1 = ({ columns, rowS, datas }) => {
  const [searchDataSource, setSearchDataSource] = useState([]);
  useEffect(() => {
    setSearchDataSource(datas);
  }, [datas]);
  return (
    <>

<NavBar ></NavBar>
      <div className="Body">
<Action3User1/>
<div className="body3__table-wrapper">
        <div className="filter__wrapper">
          <p className="filter__text">
          Тартиблаш
          </p>
          <p className="filter__all-text filter__border">
          Жами____: 4
          </p>
          <div className="filter__wrapper-right">
          
          <p className="filter__new-text filter__border">
          Янги________:  1
          </p>
          <p className="filter__process-text filter__border">
          Ижрода____: 1
          </p>
          <p className="filter__signature-text filter__border">
          Имзода_____: 1
          </p>
          <p className="filter__done-text filter__border">
          Бажарилган_: 1
          </p>
          </div>
          <p className="filter__recently-done-text filter__border">
          Янги имзоланган: 1
          </p>
        </div>
         <MainTable columns={columns} data={searchDataSource} rowS={rowS}></MainTable>
       </div>
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

export default connect(mapStateToProps)(Body3User1);


