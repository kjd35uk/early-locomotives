
import React from "react";
// import ReactTable from "react-table";
// import "react-table/react-table.css";

const SingleEngine = ({ engine }) => {
  return (
    <div className="single-engine">
      <h1>{engine.name}</h1>
        <img
          className="loco-image-large"
          src={require(`./public/images/${engine.name}.jpg`)}
        />
        </div>
  )
}
  export default SingleEngine;
