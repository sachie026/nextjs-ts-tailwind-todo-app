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

  const resetForm = () => {
    setText("");
    setToDate("");
  };

  return {
    text,
    toDate,
    updateText,
    updateDate,
    resetForm,
  };
}

export default useAddTask;
