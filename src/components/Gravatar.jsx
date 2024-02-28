import React from "react";
import md5 from "md5";

function Gravatar({ email, size = 30 }) {
  if (!email) {
    // Handle the case where email is not provided
    return;
  }
  const emailHash = md5(email.trim().toLowerCase());
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=${size}`;

  return (
    <img
      src={gravatarUrl}
      alt="Gravatar"
      style={{ borderRadius: "50%", width: size, height: size }}
    />
  );
}
export default Gravatar;
