import { useState, useEffect } from "react";

export default function UseOnlineStatus(key) {
  const [state, setState] = useState(key);
  useEffect(() => {
    function handleOnline() {
      setState("online");
    }
    function handleOffline() {
      setState("offline");
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return state;
} 