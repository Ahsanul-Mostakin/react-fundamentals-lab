import React from "react";

const Contact = (ContactProps) => {
  return (
    <div>
      My Name is {ContactProps.name} & My number {ContactProps.number}
    </div>
  );
};

export default Contact;
