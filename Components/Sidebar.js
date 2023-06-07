import React, { useState } from "react";
import Dashboard from "../SvgIcons/dashboard_icon.svg";
import Schedule from "../SvgIcons/schedule_icon.svg";
import Setting from "../SvgIcons/setting_icon.svg";
import Transaction from "../SvgIcons/transaction_icon.svg";
import User from "../SvgIcons/user_icon.svg";

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const data = [
    {
      title: "Dashboard",
      icon: (props) => <Dashboard {...props} />,
    },
    {
      title: "Transactions",
      icon: (props) => <Transaction {...props} />,
    },
    {
      title: "Schedules",
      icon: (props) => <Schedule {...props} />,
    },
    {
      title: "Users",
      icon: (props) => <User {...props} />,
    },
    {
      title: "Settings",
      icon: (props) => <Setting {...props} />,
    },
  ];
  return (
    <>
      <div className="sidebarOuterContainer">
        <div className="sidebarTitle">Board.</div>
        <div className="sidebarInnerContainer">
          <div>
            {data.map((item, index) => (
              <div
                className="sidebarTitleContainer"
                key={index}
                onClick={() => setSelected(item.title)}
                s
              >
                {/* <item.icon /> */}
                <div
                  className="sidebarNavigationTitle"
                  style={{
                    fontWeight: selected === item.title ? "700" : "400",
                  }}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="sidebarBottomTitle">Help</div>
            <div className="sidebarBottomTitle">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
