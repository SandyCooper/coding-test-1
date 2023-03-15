import React from "react";


function Entry(props){

    return (
        <div className="entry">
        <div className="balance">Balance:{props.click ? props.changeInput : null}</div>
        <div className="input">
          <input onChange={props.onInputChange} type="number" value={props.changeShow}></input>
        </div>
        <div className="button">
          <button onClick={props.onClickAdd}>Add</button>
          <button onClick={props.onClickRemove}>Remove</button>
        </div>
      </div>
    );

}



export default Entry;