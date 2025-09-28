import React from "react";

const Clipboard = () => {
  const CopyText = () => {
    alert("Text Copied");
  };

  const OnCutText = () => {
    console.log("Text Cuted Successful");
  };

  const OnPasteText = () => {
    document.write("Text Paste Done");
  };

  return (
    <div>
      <p onCopy={CopyText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, hic.
      </p>
      <h1 onCut={OnCutText}>
        This is Clipboard page you have cut some text from here
      </h1>

      <input
        type="text"
        onPaste={OnPasteText}
        placeholder="Put your text here"
      />
    </div>
  );
};

export default Clipboard;
