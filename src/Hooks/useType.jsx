import { useState } from "react";

export const useType = () => {
  const [headerText, setHeaderText] = useState("");
  const typewriter = (str) => {
    for (let i = 0; i <= str.length; i++) {
      setTimeout(() => {
        setHeaderText(str.slice(0, i));
      }, 70 * i);
    }
  };
  return({typewriter,headerText});
};
