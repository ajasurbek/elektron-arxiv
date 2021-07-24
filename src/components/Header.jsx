
import avatar from "../Assets/img/avatar.svg";
import SearchCom from "./SearchCom";
import { GiExitDoor } from "react-icons/gi";

const Header = ({ columns, setSearchDataSource }) => {
    const leave = () => {
        window.localStorage.removeItem("user");
        window.location.href = "/login";
      };
  return (
    <div className={"header"} style={{ height: 67 }}>
      <SearchCom columns={columns} setS={setSearchDataSource}></SearchCom>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="avatar">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <h4>{window.localStorage.getItem("fio")}</h4>
            <span>+{window.localStorage.getItem("tel")}</span>
          </div>
          <img style={{ display: "block" }} src={avatar} alt={"avatar"}></img>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "var(--main-color)",
            cursor: "pointer",
          }}>
        </div>
        &nbsp; &nbsp;
        <div
          style={{
            fontSize: "24px",
            color: "var(--main-color)",
            cursor: "pointer",
          }}
          onClick={leave}>
          <GiExitDoor></GiExitDoor>
        </div>
      </div>
    </div>
  );
};

export default Header;
