import { SearchTableInput } from "ant-table-extensions";
import { RiSearch2Line } from "react-icons/ri";
import { connect } from "react-redux";
import './Header.css'
const SearchCom = ({ columns, datas, setS }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifySelf: "flex-start", marginLeft: "-32px" , borderRadius: '10px'}}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
          marginLeft: "1rem",
        }}>
        <SearchTableInput
          columns={columns}
          dataSource={datas} // 🔴 Original dataSource
          setDataSource={(v) => setS(v)} // 🔴 Newly created setSearchDataSource from useState hook
          inputProps={{
            placeholder: "Қидирув",
            prefix: <RiSearch2Line></RiSearch2Line>,
          }}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    datas: state.meros.mainTableData,
  };
};

export default connect(mapStateToProps)(SearchCom);
