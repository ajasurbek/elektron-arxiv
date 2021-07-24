import { Form, Input, Select, DatePicker,Upload, Button } from "antd";
import { Option } from "antd/lib/mentions";
import AllUpload from "./AllUpload";
import './Form.css'

// =================



const ModeratorForm = () => {

  
  return (
    <>

        <Form className="form__section-form"  >
           <div className="form__righet">
              <AllUpload/>
           </div>
          <div className="form__left">
          <h3 className="form__heading" >
          Хужжат тўғрисидаги маълумотларни киритинг
          </h3>
          <div className="form_group-first form__line">
            <label>Хужжат номи</label>
            <Input className={"section_name_input"}  />
          </div>
          <div className="form__second">
          <div className="form_group form__second-first">
            <label>Хужжат тили</label>
            <Select
              defaultValue="Танланг"
              // onChange={(value) => {
              //   const v = {
              //     target: {
              //       name: "region",
              //       value: value,
              //     },
              //   };
              //   onChange(v);
              // }}
              >
              <Option value={"ddsw"}>dew</Option>
            </Select>
          </div>
          <div className="form_group form__second-second">
          <label>Қабул қилинган сана</label>
          <DatePicker
              // onChange={(value, dateString) => {
              //   const v = {
              //     target: {
              //       name: "birth",
              //       value: dateString,
              //     },
              //   };
              //   onChange(v);
              // }}
              placeholder={"День/ Месяц / Год"}
              // value={values.birth ? moment(values.birth, "DD-MM-YYYY") : undefined}
              format={"DD-MM-YYYY"}
            />
          </div>
          <div className="form_group form__second-third">
            <label>Хужжат рақами</label>
            <Input className={"section_name_input"} type='number' />
          </div>
          </div>
          <div className="form_group-third form__line">
            <label>Хужжат тури</label>
            <Input className={"section_name_input"}  />
          </div>
          <div className="form_group-fourth form__line">
            <label>Орган</label>
            <Select
              defaultValue="Танланг"
              // onChange={(value) => {
              //   const v = {
              //     target: {
              //       name: "region",
              //       value: value,
              //     },
              //   };
              //   onChange(v);
              // }}
              >
              <Option value={"ddsw"}>dew</Option>
            </Select>
          </div>
          <div className="form_group-sixth form__line">
            <label>Қўшимча маълумотлар</label>
            <textarea className='xa' id="w3review"   />
          </div>
          <div className="modal__btnss" >
          <button type="reset" className="modal__btnss-red">
          Тозалаш
          </button>
          <button className="modal__btnss-blue">
          Сақлаш+янги
          </button>
          <button className="modal__btnss-blue">
          Сақлаш
          </button>
        </div>
          </div>
          
        </Form>

        
    </>
  );
};

export default ModeratorForm;
