import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
  const styledTopics = [];
  topics.forEach((topic) =>
    styledTopics.push(
      <Menu.Item
        key={topic.path}
        icon={<div style={{ fontSize: "19px", marginTop: "5px" }}>{topic.icon}</div>}
        onClick={changeSelectedKey}>
        <Link to={topic.path}>{topic.title}</Link>
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" style={{ color: "var(--main-black)" }} selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
};
export default TopicMenu;
