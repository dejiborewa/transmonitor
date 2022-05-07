import styled from "styled-components";
import {
  sidebar_main,
  sidebar_payment,
  sidebar_profile,
  siderbar_orders,
} from "../data/dummy";
import { useState } from "react";

const Button = styled.button`
  background-color: #27ae60;
  border-radius: 36px;
  color: white;
  padding: 0.5em 1em;
  font-weight: 700;
  font-size: 13px;
  margin-top: 2.5em;
`;

const Container = styled.div`
  .active-menu {
    background: rgba(24, 117, 240, 0.1);
    color: #647787;
  }
  .active-menu2 {
    background: #1875f0;
  }
`;

function Sidebar() {
  const [activeSection, setActiveSection] = useState("Main");
  const [activeMenu, setActiveMenu] = useState(0);

  const handleActiveMenu = (index, item) => {
    if (sidebar_main.map((item) => item.text).includes(item)) {
      setActiveSection("Main");
    } else if (sidebar_payment.map((item) => item.text).includes(item)) {
      setActiveSection("Payments");
    } else if (siderbar_orders.map((item) => item.text).includes(item)) {
      setActiveSection("Orders");
    } else if (sidebar_profile.map((item) => item.text).includes(item)) {
      setActiveSection("Profile");
    }
    setActiveMenu(index);
  };

  return (
    <div className="w-[20%]">
      <Button>GENERATE INVOICE</Button>
      <Container className="px-9 pt-6">
        <h3 className="text-left text-grey mt-6 mb-2 text-sm">Main</h3>
        {sidebar_main.map((item, index) => (
          <div
            key={index}
            className="flex -mx-[2.25rem] cursor-pointer"
            onClick={() => handleActiveMenu(index, item.text)}
          >
            <div
              className={
                activeMenu === index && activeSection === "Main"
                  ? "w-[2%] bg-blue"
                  : "w-[2%]"
              }
            ></div>
            <div
              className={`w-[98%] py-4  text-grey ${
                activeMenu === index &&
                activeSection === "Main" &&
                "bg-activeMenu"
              }`}
            >
              <div className="flex gap-4 items-center px-9">
                <span className="w-[20px]">{item.icon}</span>
                <span className="text-xs">{item.text}</span>
              </div>
            </div>
          </div>
        ))}

        <h3 className="text-left text-grey mt-6 mb-2 text-sm">Payments</h3>
        {sidebar_payment.map((item, index) => (
          <div
            key={index}
            className="flex -mx-[2.25rem] cursor-pointer"
            onClick={() => handleActiveMenu(index, item.text)}
          >
            <div
              className={`w-[2%] ${
                activeMenu === index &&
                activeSection === `Payments` &&
                `bg-blue`
              }`}
            ></div>
            <div
              className={`w-[98%] py-4  text-grey ${
                activeMenu === index &&
                activeSection === `Payments` &&
                `bg-activeMenu`
              }`}
            >
              <div className="flex gap-4 items-center px-9">
                <span className="w-[20px]">{item.icon}</span>
                <span className="text-xs">{item.text}</span>
              </div>
            </div>
          </div>
        ))}

        <h3 className="text-left text-grey mt-6 mb-2 text-sm">Orders</h3>
        {siderbar_orders.map((item, index) => (
          <div
            key={index}
            className="flex -mx-[2.25rem] cursor-pointer"
            onClick={() => handleActiveMenu(index, item.text)}
          >
            <div
              className={`w-[2%] ${
                activeMenu === index && activeSection === `Orders` && `bg-blue`
              }`}
            ></div>
            <div
              className={`w-[98%] py-4  text-grey ${
                activeMenu === index &&
                activeSection === `Orders` &&
                `bg-activeMenu`
              }`}
            >
              <div className="flex gap-4 items-center px-9">
                <span className="w-[20px]">{item.icon}</span>
                <span className="text-xs">{item.text}</span>
              </div>
            </div>
          </div>
        ))}

        {sidebar_profile.map((item, index) => (
          <div
            key={index}
            className="flex -mx-[2.25rem] cursor-pointer mt-2"
            onClick={() => handleActiveMenu(index, item.text)}
          >
            <div
              className={`w-[2%] ${
                activeMenu === index && activeSection === `Profile` && `bg-blue`
              }`}
            ></div>
            <div
              className={`w-[98%] py-4  text-grey ${
                activeMenu === index &&
                activeSection === `Profile` &&
                `bg-activeMenu`
              }`}
            >
              <div className="flex gap-4 items-center px-9">
                <span className="w-[20px]">{item.icon}</span>
                <span className="text-xs">{item.text}</span>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Sidebar;
