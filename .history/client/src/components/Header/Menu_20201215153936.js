import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu, Item } = Menu;

class Options extends Component {
  state = {
    current: "",
  };

  render() {
    return (
      <div>
        <Menu mode="horizontal" style={{ backgroundColor: "darkgrey" }}>
          <Item key="home" icon={<AppstoreOutlined />}>
            <Link to="/">Home</Link>
          </Item>
          <SubMenu key="SubMenu" title="Опции" icon={<SettingOutlined />}>
            <Item key="link1" className="item">
              <Link to="/archive_data_viewing">Разглеждане на архив</Link>
            </Item>
            <Item key="link2" className="item">
              <Link to="/settings/plate_tolerances">Допускане на плочи</Link>
            </Item>
            <Item key="link3" className="item">
              <Link to="/settings/plate_tolerances_with_card_reader">
                Допускане на плочи (с четец на карти)
              </Link>
            </Item>
            <Item key="link4" className="item">
              <Link to="/settings/gratings_tolerances">
                Допускане на решетки
              </Link>
            </Item>
            <Item key="link5" className="item">
              <Link to="/settings/lead_paste_tolerances">
                Допускане на оловна паста
              </Link>
            </Item>
            <Item key="link6" className="item">
              <Link to="/settings/plate_operators">Оператори плочи</Link>
            </Item>
            <Item key="link7" className="item">
              <Link to="/settings/gratings_operators">Оператори решетки</Link>
            </Item>
            <Item key="link8" className="item">
              <Link to="/settings/Lead_paste_operator">
                Оператори - оловна паста
              </Link>
            </Item>
            <Item key="link9" className="item">
              <Link to="/settings/pasting_industrial_unit_password_change">
                Промяна на парола за цех "Пастиране"
              </Link>
            </Item>
            <Item key="link10" className="item">
              <Link to="/settings/foundry_industrial_unit_password_change">
                Промяна на парола за цех "Леярен"
              </Link>
            </Item>
            <Item key="link11" className="item">
              <Link to="/settings/serial_port">Сериен порт</Link>
            </Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Options;
