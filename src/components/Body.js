import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Actions from "./Actions";
import NavBar from "./Sidebar/Navbar";
import UniModal from "./UniModal";
import MainTable from "./Table/MainTable";
import ModeratorForm from "./Modal/Forms/ModeratorForm";
import ModalExampleModal from "./Modal/Modal";
import { AiFillCloseSquare } from "react-icons/ai";
import './Body.css'
const Body = ({ columns, rowS, datas }) => {
  const [searchDataSource, setSearchDataSource] = useState([]);
  const [modalActive, setModalActive] = useState(false)
  useEffect(() => {
    setSearchDataSource(datas);
  }, [datas]);
  return (
    <>
    <NavBar />
      <div className="Body">
        {/* <Actions></Actions> */}
        <UniModal active={modalActive}>
        <NavBar />
        <AiFillCloseSquare
        className="modal__clone-btn"
          style={{
            color: "#FF4B4B",
            verticalAlign: "middle",
            width: "35px",
            height: "35px"
          }}
          onClick={() => setModalActive(false)}
          ></AiFillCloseSquare>
          {/* <button className="modal__clone-btn" onClick={() => setModalActive(false)}>X</button> */}
          <ModeratorForm className="modal__inner-info" />
        </UniModal>
        <div className="body__action" >
          <p className="body__text">Электрон хужжатлар базаси</p>
        <button className="modal__btnss-blue"  onClick={() => setModalActive(true)}>+ ЯНГИ</button>
        </div>
        
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

export default connect(mapStateToProps)(Body);

