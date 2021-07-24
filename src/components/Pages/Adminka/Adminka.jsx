import { useState } from "react";
import "../../../App.css";
import SideBar from "../../Sidebar/Sidebar";
import { Switch, Route, withRouter } from "react-router-dom";
import TopicMenu from "../../Sidebar/TopicMenu";
import { Layout } from "antd";
import { RiBuilding2Fill, RiUser2Fill } from "react-icons/ri";
import Users from "../Users";
import Adminka from "../Adminka/Adminka";

function App({ location }) {
  const topics = [
    {
      title: "Foydalanuvchi",
      path: "/Foydalanuvchi",
      icon: <RiUser2Fill></RiUser2Fill>,
      comp: <Users path="/Foydalanuvchi" nomi={"Foydalanuvchi"}></Users>,
    },
  ];
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
  };
  const Menu = <TopicMenu topics={topics} selectedKey={selectedKey} changeSelectedKey={changeSelectedKey} />;
  return (
    <>
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content>
          <Switch>
            {topics.map((top, index) => (
              <Route key={index} exact path={top.path}>
                {top.comp}
              </Route>
            ))}
          </Switch>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default withRouter(App);
