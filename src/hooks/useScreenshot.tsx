import { useEffect, useState } from "react";
import getScreenshot from "../services/getScreenshot";
import { Screenshot } from "../model/screenshot";

export default function useScreenshot(id : number) {
  const [screenshots, setScreenshots] = useState<Screenshot[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getScreenshot(id);
      setScreenshots(data);
    };

    fetchData();
  }, []);

  return screenshots;
}