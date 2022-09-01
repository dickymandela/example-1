import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="md:ml-8 inline-block bg-[#FE5E44] text-white px-6 py-2 text-sm rounded-lg">
        {props.children}
      </button>{" "}
    </>
  );
};

export default Button;
