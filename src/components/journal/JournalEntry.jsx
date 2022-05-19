import React from "react";
import moment from 'moment'
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({id, date, title, body, url}) => {

  const dispatch =  useDispatch()

  const noteDate = moment(date)
  const handleActiveNote = ()=>{
    dispatch(activeNote(id, {id,date,title,body,url}))
  }

  return (
    <div className="journal__entry pointer" onClick={handleActiveNote}>
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
