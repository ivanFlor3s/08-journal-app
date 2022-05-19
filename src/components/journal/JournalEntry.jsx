import React from "react";
import moment from 'moment'

export const JournalEntry = ({id, date, title, body, url}) => {


  const noteDate = moment(date)

  return (
    <div className="journal__entry pointer">
      {
        url &&
        <div
        className="journal__entry-picture"
        style={{
          
          backgroundSize: "cover",
          backgroundImage: `url(${url})`
            //"url(https://konachan.com/sample/02c3478863efb914dcd3fba8e375032b/Konachan.com%20-%20309294%20sample.jpg)",
        }}
      ></div>
      }

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">
          {body}
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>{ noteDate.format('dddd') }</span>
        <h4 style={{margin: 0}}>{ noteDate.format('Do') }.</h4>
      </div>
    </div>
  );
};
