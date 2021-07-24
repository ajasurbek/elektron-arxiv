import NavBar from "../../../Sidebar/Navbar"
import { Form, Input,Checkbox, Select, DatePicker,Upload, Button } from "antd";
import { Option } from "antd/lib/mentions";
import './SearchUser.css'
import { SearchOutlined } from '@ant-design/icons';
const SearchUser = () => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    return (
      <>
      <NavBar/>
        <div className="search__section">
        
        
        
        <div className="search__by-application-first">

        <p className="document__text-e">
            Электрон хужжатлар базасидан ариза бўйича излаш
            </p>
        <div className="search__by-application">
            
            <div className="search__section-left">
            <div className="search__first-section">
            <div className="search__group search__doc-number">
            <label>Хужжат рақами</label>
            <Input className={"search__number search__doc-number-input"}  name={"nameW"} />
            </div>
            <div className="search__group">
            <label>Қабул қилинган сана</label>
            <Input className={"search__number search__doc-number-input"}  name={"nameW"} />
            </div>
            <div className="search__group search__check-dis">
            <Checkbox onChange={onChange}>Оралиқ</Checkbox>
            </div>
            </div>
            <div className="search__group search__name">
            <label>Хужжат номи</label>
            <Input className={"search__number search__doc-number-input search__doc-name-input"}  name={"nameW"} />
            </div>
            <div className="search__group">
            <Checkbox onChange={onChange}>Аниқ мос келиши</Checkbox>
            </div>
            <div className="search__group search__name">
            <label>Матндаги сўз ёки жумла</label>
            <Input className={"search__number search__doc-number-input search__doc-name-input"}  name={"nameW"} />
            </div>
            <div className="search__group">
            <Checkbox onChange={onChange}>Аниқ мос келиши</Checkbox>
            </div>
            </div>
            <div className="search__section-right">
            <div className="search__right-first">
            <div className="search_group document__lang-select" style={{ width: 210 }}>
            <label>Хужжат тили</label>
            <Select
              defaultValue="Ҳаммаси"
              onChange={(value) => {
                const v = {
                  target: {
                    name: "typeW",
                    value: value,
                  },
                };
                onChange(v);
              }}>
              <Option value={"Moderator"}>uzb</Option>
            </Select>
          </div>
          <div className="search_group" style={{ width: 210 }}>
            <label>Хужжат ҳолати</label>
            <Select
              defaultValue="Ҳаммаси"
              onChange={(value) => {
                const v = {
                  target: {
                    name: "typeW",
                    value: value,
                  },
                };
                onChange(v);
              }}>
              <Option value={"Moderator"}>yangi</Option>
            </Select>
          </div>
            </div>
            <div className="search_group searc__type" style={{ width: 210 }}>
            <label>Хужжат тури</label>
            <Select
            className="search__doc-type"
              defaultValue="Ҳаммаси"
              onChange={(value) => {
                const v = {
                  target: {
                    name: "typeW",
                    value: value,
                  },
                };
                onChange(v);
              }}>
              <Option value={"Moderator"}>yangi</Option>
            </Select>
          </div>
          <div className="search_group search__depart" style={{ width: 210 }}>
            <label>Қабул қилган орган</label>
            <Select
            className="search__doc-type"
              defaultValue="Ҳаммаси"
              onChange={(value) => {
                const v = {
                  target: {
                    name: "typeW",
                    value: value,
                  },
                };
                onChange(v);
              }}>
              <Option value={"Moderator"}>yangi</Option>
            </Select>
          </div>
            </div>
            
        </div>

        <div className="search__second-section">
        <p className="search__all-text">
            Жами: 28927 та
            </p>
            <p className="search__process-text">
            Амалда: 28527 та
            </p>
            <p className="search__loose-text">
            Ўз кучини йўқотган: 427 та
            </p>
            <Button type="danger" >
            Тозалаш
         </Button>
         <Button type="success" icon={<SearchOutlined />}>
        Излаш 
        
        </Button>
        </div>
        </div>
        <div className="search__down-wrapper">
            <div className="search__down-first">
            <p className="search__down-first-text">
            Йиллар бўйича
            </p>
            <div className="search__down-first-wrapper">
                <div className="search__down-first-btn">
                    <button className="serach__down-f-btn">
                    2021
                    </button>
                    <span className="serach__down-f-result">
                    (576)
                    </span>
                </div>
                <div className="search__down-first-btn">
                    <button className="serach__down-f-btn">
                    2021
                    </button>
                    <span className="serach__down-f-result">
                    (576)
                    </span>
                </div>
                <div className="search__down-first-btn">
                    <button className="serach__down-f-btn">
                    2021
                    </button>
                    <span className="serach__down-f-result">
                    (576)
                    </span>
                </div>
                <div className="search__down-first-btn">
                    <button className="serach__down-f-btn">
                    2021
                    </button>
                    <span className="serach__down-f-result">
                    (576)
                    </span>
                </div>
                <div className="search__down-first-btn">
                    <button className="serach__down-f-btn">
                    2021
                    </button>
                    <span className="serach__down-f-result">
                    (576)
                    </span>
                </div>
              </div>
            </div>


            <div className="search__down-second">
            <p className="search__down-second-text">
            Шакли бўйича
            </p>
            <div className="search__down-second-wrapper">
                <div className="search__down-second-btn">
                    <button className="serach__down-sec-btn">
                    Қарор
                    </button>
                    <span className="serach__down-sec-result">
                    (576)
                    </span>
                </div>
                <div className="search__down-second-btn">
                    <button className="serach__down-sec-btn">
                    Қарор
                    </button>
                    <span className="serach__down-sec-result">
                    (576)
                    </span>
                </div>
                <div className="search__down-second-btn">
                    <button className="serach__down-sec-btn">
                    Қарор
                    </button>
                    <span className="serach__down-sec-result">
                    (576)
                    </span>
                </div>
                <div className="search__down-second-btn">
                    <button className="serach__down-sec-btn">
                    Қарор
                    </button>
                    <span className="serach__down-sec-result">
                    (576)
                    </span>
                </div>
                <div className="search__down-second-btn">
                    <button className="serach__down-sec-btn">
                    Қарор
                    </button>
                    <span className="serach__down-sec-result">
                    (576)
                    </span>
                </div>
              </div>
            </div>


            <div className="search__down-second">
            <p className="search__down-second-text">
            Қабул қилган орган номи
            </p>
            <Input className={"search__number search__doc-number-input search__doc-name-input search__third-input"} placeholder='Излаш...'  name={"namdeeW"} />
            <div className="search__down-third-wrapper">
                <div className="search__down-third-btn">
                  
                    <p className="serach__down-third-result">
                    Давлат ҳокимияти органлари
                    </p>
                </div>
               
              </div>
            </div>


        </div>
        </div>
        </>
    )
}
export default SearchUser