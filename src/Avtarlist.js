import React from 'react';

const Avtarlist = (props) => {
  return (
    <div className="avtarStyle ma4 bg-light-purple dib pa3 grow shadow-4 tc">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avtar"/>
      <h1>{props.name}</h1>
      <p>{props.work}</p>
    </div>
  )
}

export default Avtarlist;
