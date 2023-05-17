import React, { useState } from "react";

function useAddTask() {
  const [text, setText] = useState("");
  const [toDate, setToDate] = useState("");

  const updateText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const updateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);
  };

  return {
    text,
    toDate,
    updateText,
    updateDate,
  };
}

export default useAddTask;
