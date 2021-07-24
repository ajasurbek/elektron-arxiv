import { Button } from "antd";
import { connect } from "react-redux";
import { setMainTableData, setValues } from "../../Actions/MerosActions";
import WebWrapper from "./Forms/WebWrapper";

const ModalForm = ({ values, setValues, clearModal, mainTableData, setMainTableData, modal }) => {
  const handleChange = (e) => {
    if (modal.status === "add") {
      setValues({
        ...values,
        id: mainTableData.length + 1,
        [e.target.name]: e.target.value,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = () => {
    if (modal.status === "add") {
      setMainTableData([...mainTableData, values]);
    } else {
      let updatedData = mainTableData.map((item) => (item.id === values.id ? { ...item, ...values } : item));
      setMainTableData(updatedData);
    }
    clearModal();
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <WebWrapper onChange={handleChange} values={values} modal={modal}></WebWrapper>
      </form>
      <div className="form_submit">
        <div className='btn__wrapper' style={{ display: "flex", justifyContent: "center" }}>
          <Button className={"btn btn-back"} onClick={() => clearModal()}>
          Ортга
         </Button>
          <Button className={"btn btn-submit"} onClick={handleSubmit}>
          Сақлаш
          </Button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    values: state.meros.values,
    modal: state.meros.modal,
    mainTableData: state.meros.mainTableData,
  };
};

export default connect(mapStateToProps, { setValues, setMainTableData })(ModalForm);
