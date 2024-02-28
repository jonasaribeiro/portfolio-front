import { StyledTypewriter } from "@/styles/components/utils.styled";
import { useState, useEffect } from "react";

const Typewriter = ({ text }: { text: string }) => {
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 150;

  useEffect(() => {
    if (typedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((current) => current + text.charAt(typedText.length));
      }, typingSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [typedText, text]);

  return <StyledTypewriter>{typedText}</StyledTypewriter>;
};

export default Typewriter;
