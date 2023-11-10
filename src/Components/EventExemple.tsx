import React, { FC, useRef, useState } from "react";

export const EventExemple: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clikHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("drag");
  };

  return (
    <div style={{ marginBottom: "200px" }}>
      <input
        value={value}
        onChange={changeHandler}
        placeholder="управляемая"
        type="text"
        name=""
        id=""
      />
      <input
        ref={inputRef}
       
        placeholder="неуправляемая"
        type="text"
        name=""
        id=""
      />

      <button onClick={clikHandler}>EVENT</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{
          width: 200,
          height: 200,
          background: "#BC8F8F",
          marginTop: 30,
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "#6B8E23" : "#BC8F8F",
          marginTop: 30,
        }}
      ></div>
    </div>
  );
};
