import React, { useState, useEffect } from "react";
import "./FlashMessageComponent.css";

function FlashMessageComponent(props) {
  useEffect(() => {
    setTimeout(() => setVisible(false), props.duration);
  });
  const [visible, setVisible] = useState(true);
  return (
    <div className={(visible ? "show" : "hide") + " flashMessage"}>
      {props.message}
    </div>
  );
}

export default FlashMessageComponent;
