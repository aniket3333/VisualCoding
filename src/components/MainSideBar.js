import React, { useState } from "react";

export default function Mainsidebar() {
  const [activeTab, setActiveTab] = useState("motion");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getBackgroundColor = (tab) => {
    return activeTab === tab ? "bg-blue-100" : "";
  };

  return (
    <div className="w-15 flex-none h-full overflow-y-auto flex flex-col items-center p-2 border-r border-gray-200">
      {/* Motion */}
      
      <div
        className={`w-5 h-5 rounded-full pl-2 bg-blue-500 border border-blue-500 ${getBackgroundColor("motion")}`}
      
        onClick={() => handleTabClick("motion")}
      ></div>
      <span className={`text-sm hover:text-blue-500 pb-2 mb-1 ${getBackgroundColor("motion")}`}>
        Motion
      </span>
      {/* Looks */}
      <div
        className={`w-5 h-5 rounded-full pl-2 border border-violet-500 ${getBackgroundColor("looks")}`}
        style={{ backgroundColor: "#5b21b6" }}
        onClick={() => handleTabClick("looks")}
      ></div>
      <span className={`text-sm hover:text-blue-500 pb-2   mb-1 ${getBackgroundColor("looks")}`}>
        Looks
      </span>

      {/* Events */}
      <div
        className={`w-5 h-5 rounded-full pl-2 border border-orange-500 ${getBackgroundColor("events")}`}
        style={{ backgroundColor: "#f59e0b" }}
        onClick={() => handleTabClick("events")}
      ></div>
      <span className={`text-sm hover:text-blue-500 pb-2  mb-1 ${getBackgroundColor("events")}`}>
        Events
      </span>
      {/* Control */}
      <div
        className={`w-5 h-5 rounded-full pl-2 border border-orange-500 ${getBackgroundColor("control")}`}
        style={{ backgroundColor: "#b45309" }}
        onClick={() => handleTabClick("control")}
      ></div>
      <span className={`text-sm hover:text-blue-500  mb-1 ${getBackgroundColor("control")}`}>
        Control
      </span>
    </div>
  );
}
