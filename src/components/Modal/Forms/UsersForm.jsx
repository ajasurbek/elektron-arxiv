
import { Form, Input, Select, DatePicker,Upload, Button } from "antd";
import { Option } from "antd/lib/mentions";
import { RiUploadCloudFill } from "react-icons/ri";
import MUpload from "./MUpload/MUpload";
import moment from "moment";
import MyUpload from "./UploadJs";
import './Form.css'

// =================



const UsersForm = ({ onChange, modal, values }) => {

  
  return (
    <>
      {modal.title === "Foydalanuvchi" && (
        <Form onChange={onChange} style={{ width: 556 }}>
          <div className="form_group" style={{ width: 310 }}>
            <label>Исм Фамилия</label>
            <Input className={"section_name_input"} onChange={onChange} value={values.nameW} name={"nameW"} />
          </div>
          <div className="form_group" style={{ width: 210 }}>
            <label>Логин</label>
            <Input className={"section_name_input"} onChange={onChange} value={values.loginW} name={"loginW"} />
          </div>
          
          <div className="form_group" style={{ width: 310 }}>
            <label>Пароль</label>
            <Input className={"section_name_input"} onChange={onChange} value={values.passwordW} name={"passwordW"} />
          </div>

          <div className="form_group" style={{ width: 210 }}>
            <label>Тури</label>
            <Select
              defaultValue="Турини танланг"
              onChange={(value) => {
                const v = {
                  target: {
                    name: "typeW",
                    value: value,
                  },
                };
                onChange(v);
              }}>
              <Option value={"Moderator"}>Moderator</Option>
            </Select>
          </div>
        </Form>
      )}
    </>
  );
};

export default UsersForm;
