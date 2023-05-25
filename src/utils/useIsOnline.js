import { useEffect, useState } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = (event) => {
      setIsOnline(true);
    };

    const handleOffline = (event) => {
      setIsOnline(false);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  });

  return isOnline;
};

export default useIsOnline;
