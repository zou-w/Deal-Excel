import { useState } from "react";
import "./App.css";
import { useNavigate, useRoutes } from "react-router";
import routes from "./routes";
import ExcelContainer from "./components/ExcelContainer";

function App() {
  const navigate = useNavigate(); //跳转函数
  const elements = useRoutes(routes); //使用路由表

  const goHome = () => {
    navigate("/home");
  };
  const goSheets = () => {
    navigate("/sheets");
  };

  return (
    <>
      <div>
        <div className="header">
          <button onClick={goHome}>点击切换到Home</button>
          <button onClick={goSheets}>点击切换到Sheets</button>
        </div>
        <div className="content">
          <ExcelContainer />
          {/* 路由配置 */}
          {elements}
        </div>
        <div className="footer">Footer</div>
      </div>
    </>
  );
}

export default App;
