import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./PlanCardDetailsCard.css";
const PlanCardDetailsCard = ({
  price,
  category,
  location,
  livingRooms,
  washRooms,
  floors,
  image,
  likes,
  bedRooms
}) => {
  return (
    <React.Fragment>
      <div className="--plancard">
        <div className="planimage">
          <img className="--card-image" alt="Card image" src={image} />
        </div>
        <div className="plancontent">
          <div className="price1">
            <div className="div28">{`$ ${price}.0`}</div>
          </div>
          <div className="heading">
            <b className="residential-building">{category}</b>
          </div>
          <div className="location">
            <div className="nyarugenge-kigali">{location}</div>
          </div>
          <div className="details">
            <div className="group-parent3">
              {/* <img className="frame-child8" alt="" /> */}
              <div className="div29">{livingRooms}</div>
            </div>
            <div className="group-parent4">
              {/* <img className="frame-child8" alt="" /> */}
              <div className="div30">
                <p className="p8">{washRooms}</p>
              </div>
            </div>
            <div className="group-parent4">
              <div className="--"> </div>
           
              <div className="div30">
                <p className="p8">{floors}</p>
              </div>
            </div>
          </div>
          <button className="button5">
            <div className="bid-now">Bid now</div>
          </button>
          <div className="plancontent-inner"></div>
          <div className="analytics">
            <a className="comments2">123 comments</a>
            <div className="views">
              <div className="views1">
                <span>{likes} likes</span>
                <span>
                  <AiOutlineHeart className="like" />
                </span>
              </div>
            </div>
          </div>
          <div className="comment">
            <div className="residential-building">larissateta</div>
            <div className="nice-work2">Nice work</div>
          </div>
          <div className="plancontent-child" />
          <div className="comment1">
            <input
              className="add-a-comment"
              type="text"
              placeholder="Add a comment"
            />
            <button className="send1">Send</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlanCardDetailsCard;
