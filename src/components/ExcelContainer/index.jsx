import React, { useState } from "react";
import ExcelJS from "exceljs";

function Index() {
  const [dataFromExcel, setDataFromExcel] = useState([]);
  const [titleFromExcel, setTitleFromExcel] = useState([]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]; //获取文件信息
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file);
    const worksheet = workbook.worksheets[0]; //创建工作表
    console.log("worksheet", worksheet._name); //sheet名
    const rows = [];
    worksheet._rows.map((item) => {
      rows.push(item.values);
    });
    setTitleFromExcel(rows.shift());
    setDataFromExcel(rows);
    console.log(rows);
  };

  return (
    <div>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
      {dataFromExcel.length > 0 && (
        <table>
          <thead>
            <tr>
              {titleFromExcel.map((item, titleIndex) => {
                if (
                  typeof item === "object" &&
                  item.hasOwnProperty("formula") &&
                  item.hasOwnProperty("result")
                ) {
                  return <td key={titleIndex}>{item.result}</td>;
                } else {
                  return <td key={titleIndex}>{item}</td>;
                }
              })}
            </tr>
          </thead>
          <tbody>
            {dataFromExcel.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((value, cellIndex) => {
                    if (typeof value === "object") {
                      return (
                        <td key={cellIndex}>{value.result}</td> || (
                          <td key={cellIndex}>
                            {Array.isArray(value.richText) ? "y" : "n"}
                          </td>
                        )
                      );
                    } else {
                      return <td key={cellIndex}>{value}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Index;
