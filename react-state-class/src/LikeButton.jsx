import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  function toggle() {
    console.log("toggle");
    setIsLiked(!isLiked);
  }

  return (
    <div>
      <h1 onClick={toggle}>
        LikeedButton
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i class="fa-regular fa-heart" style={{ Color: "red" }}></i>
        )}
      </h1>
    </div>
  );
}
