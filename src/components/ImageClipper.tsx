import React from "react";

const ImageClipper = ({ children }) => {
  return (
    <div
      style={{
        clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
        height: "100%", // Garante que o contêiner se expanda
        width: "100%",
        overflow: "hidden", // Esconde o que estiver fora da forma
      }}
    >
      {children}
    </div>
  );
};

export default ImageClipper;
