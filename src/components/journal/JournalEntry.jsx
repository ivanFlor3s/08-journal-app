import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://konachan.com/sample/02c3478863efb914dcd3fba8e375032b/Konachan.com%20-%20309294%20sample.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo Dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          aliquid.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4 style={{margin: 0}}>28</h4>
      </div>
    </div>
  );
};
