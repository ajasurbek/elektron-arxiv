import { connect } from "react-redux";
import ModeratorForm from "./ModeratorForm";
import UsersForm from "./UsersForm";
import User1Form from "../../Action3/User1Form";

import "./Forms.css";

const WebWrapper = ({ onChange, modal,  values }) => {
  return (
    <>
      <UsersForm onChange={onChange} modal={modal} values={values} />
      <User1Form onChange={onChange} modal={modal} values={values} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    datas: state.meros.mainTableData,
  };
};
export default connect(mapStateToProps)(WebWrapper);
