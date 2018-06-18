import React from "react";

const Engines = ({ engines }) => {
  return (
    <div className="loco-list-container">
      {engines.map(engine => {
        return (
          <div className = 'engine-unit'>
            <div><h3>{engine.name}</h3></div>
            <div><img className = 'loco-list-image' src={require(`./public/images/${engine.name}.jpg`)} /></div>
          </div>
        );
      })}
    </div>
  );
};

export default Engines;
