import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className={props.class}>
        <img
          src={props.src.first}
          alt="video_source"
          className="card_img img_one"
        />
        <img src={props.src.second} alt="video_source" className="card_img img_two" />
        <img
          src={props.src.third}
          alt="video_source"
          className="card_img img_three"
        />
      </div>
    </>
  );
};

export default Cards;
