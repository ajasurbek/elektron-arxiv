import React from "react";
import { Layout } from "antd";
import "./Sidebar.css";
import SideHeader from "./SideHeader";
const SideBar = ({ menu }) => {
  const { Sider } = Layout;
  return (
    <Sider className="sidebar" breakpoint={"lg"} theme="light" collapsedWidth={0}>
      <SideHeader></SideHeader>
      {menu}
    </Sider>
  );
};
export default SideBar;
