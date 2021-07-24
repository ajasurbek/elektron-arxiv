
import { Form, Input, Select, DatePicker } from "antd";
import { Option } from "antd/lib/mentions";
import './User1Form.css'
import moment from "moment";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// =================
import { useEffect, useState } from "react";
import { SearchOutlined } from '@ant-design/icons';

const User1Form = ({ onChange, modal, values }) => {
 let showDate = new Date()
 const [dates, setDates] = useState([moment().format("YYYY-MM-DD")]);


 const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

  return (
    <>
      {modal.title === "" && (
        <Form className="user1__form" onChange={onChange}>
          <div className="form__first-section">
          
          <div className="form__first-left">
          <div className="form_groups">
            <label className="label__user1" >Ариза рақами</label>
            <Input className={"section_name_input"} onChange={onChange}   name={"numberApplication"} defaultValue="1" />
          </div>
          {/* <div className="form_groups">
            <label className="label__user1" >Рўйхатга олиш санаси</label>
            <Input className={"section_name_input"} onChange={onChange} value={values.nameW} name={"nameW"} />
          </div> */}
          <div className="form_groups">
          <label className="label__user1__date">Рўйхатга олиш санаси</label>
          <div className="form-group" style={{ width: "260px" }}>
              <DatePicker
                defaultValue={moment(dates[0])}
                onChange={(v, d) => setDates(d)}
                separator 
                name={"dateApplication"} 
                className={"range_picker"}
                suffixIcon
              />
            </div>
          </div>
          <div className="form_groups">
            <label className="label__user1" >Ариза санаси</label>
            <Input className={"section_name_input"} onChange={onChange}  name={"dateApplicatidon"} />
          </div>
          
          </div>
          <div className="form__first-right">
          <button className="search__user1"   >
          Ушбу ариза учун <br></br> Электрон архив базасидан ҳужжат қидириш
    </button>
          </div>
          </div>
          <div className="form__second-section">
          <div className="form_groups">
            <label className="label__user1__adress" >Аризачи манзили</label>
            <Select 
            className="user1__select"
              defaultValue="Фарғона шаҳар"
              onChange={(value) => {
                const v = {
                  target: {
                    name: "typeW",
                    value: value,
                  },
                };
                onChange(v);
              }}>
              <Option  value={"Фарғона шаҳар"}>Фарғона шаҳар</Option>
            </Select>
          </div>
          <div className="form_groups">
            <Input className={"section_name_input section_name_input-adress"} onChange={onChange} value={values.nameW} placeholder="Манзил..." name={"nameW"} />
          </div>
          </div>
         
          <div className="form_groups">
            <label className="label__user1" >Аризачи Ф.И.Ш.</label>
            <Input className={"section_name_input"} onChange={onChange} value={values.fullname} name={"fullname"} />
          </div>
          <div className="form_groups-sixth form__line">
            <label className="label__user2" >Қисқача мазмуни</label>
            <textarea className='user__textarea' id="w3review"   />
          </div>

          <div className="">
         
          </div>
          <div className="form_groups-sixth form__line">
            <label className="label__file" >Файл бириктириш</label>
            <div className="excel_reader">
            <input type="file" className="form-control" id="file"  />
            {/* <Upload {...props}>
              <Button >Файл бириктириш</Button>
                   </Upload> */}
</div>
          </div>
        </Form>
      )}
    </>
  );
};

export default User1Form;
