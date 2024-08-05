import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [data, setData] = useState(tableData);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateDiff = new Date(b.date) - new Date(a.date);
      if (dateDiff !== 0) {
        return dateDiff;
      }
      return b.views - a.views;
    });
    setData(sortedData);
  };
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewDiff = b.views - a.views;
      if (viewDiff !== 0) {
        return viewDiff;
      }
      return b.date - a.date;
    });
    setData(sortedData);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, ind) => (
            <tr key={ind}>
              <td>{ele.date}</td>
              <td>{ele.views}</td>
              <td>{ele.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
