import React from "react";

const card = (props) => {
  return (
    <div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1781227798890-ed3b66fdef54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1>
          {props.user} {props.age}
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
      </div>
    </div>
  );
};

export default card;
