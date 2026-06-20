import { useState, useCallback, useRef } from "react";

const useToast = () => {
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);

  const showToast = useCallback((text) => {
    setMsg(text);
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 2400);
  }, []);

  return { msg, visible, showToast };
};

export default useToast;
