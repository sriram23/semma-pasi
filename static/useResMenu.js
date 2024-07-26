import { useEffect, useState } from "react"
const useResMenu = (resId, lat, lon) => {
    const [resData, setResData] = useState(null);
    useEffect(() => {
        fetchResMenu()
    },[])

    const fetchResMenu = async () => {
        console.log("Fetching restaurant menu ...");
        const data = await fetch(
          `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&&submitAction=ENTER&restaurantId=${resId}`
        );
        const json = await data?.json();
        console.log(json);
        setResData(json);
      };
    return resData
}

export default useResMenu