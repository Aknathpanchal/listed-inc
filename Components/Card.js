import React from "react";
// import Image from "next/image";
import User from "../SvgIcons/User.svg";
import Like from "../SvgIcons/Like.svg";
import Revenue from "../SvgIcons/Revenue.svg";
import Transaction from "../SvgIcons/Transaction.svg";

const Card = () => {
  const cardData = [
    {
      title: "Total Revenues",
      number: "$2,129,430",
      icon: (props) => <Revenue {...props} />,
      color: "#DDEFE0",
    },
    {
      title: "Total Transactions",
      number: "1,520",
      icon: (props) => <Transaction {...props} />,
      color: "#F4ECDD",
    },
    {
      title: "Total Likes",
      number: "9,721",
      icon: (props) => <Like {...props} />,
      color: "#EFDADA",
    },
    {
      title: "Total Revenues",
      number: "892",
      icon: (props) => <User {...props} />,
      color: "#DEE0EF",
    },
  ];
  return (
    <>

<div className="cardOuterContainer">
  {cardData.map((item, index) => (
    <div
      className="cardContainer"
      style={{ backgroundColor: item.color }}
      key={index}
    >
      <div className="cardInnerContainer">
        <div className="cardTitle">{item.title}</div>
        <div className="cardNumber">{item.number}</div>
      </div>
      {/* <Image src={item.icon} alt={item.title} /> */}
    </div>
  ))}
</div>


 
    </>
  );
};

export default Card;

