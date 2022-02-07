import React, { useEffect, useState } from "react";
import "./MainContent.scss";

export const MainContent = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://www.reddit.com/r/memes.json");
    const final = await res.json();
    setData(final.data.children);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <div className="main-content">
        <div className="post">
          {data?.map((curr, index) => {
            return (
              <div key={index} className="post-box">
                <div className="post-container">
                  <div className="title">
                    <h3>{curr.data.title}</h3>
                  </div>
                  <div className="image">
                    <img src={curr.data.url} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="post-right">
          <div className="post-right-up"></div>
          <div className="post-right-down"></div>
        </div>
      </div>
    </div>
  );
};
