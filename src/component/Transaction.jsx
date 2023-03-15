import React from "react";


function Transaction(props){
    return (
        
      <div className="transaction">
      <div className="transHeading">Transaction:</div>
      <div className="transContent">
      {props.arrayItem.map((item,i) => {
        return <div key={i} className="transEachContent">{item}</div>
      })}
      </div>
    </div>
    );

}


export default Transaction;