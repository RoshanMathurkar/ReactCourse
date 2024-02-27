//custom hook for restaurant menu data.

import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Menu_api } from "../utils/constant";

const useRestaurentMenu = ()=>{
    const [resInfo, setResInfo] = useState(null);

    const {resID} = useParams();
    console.log(resID)
 
    useEffect(()=>{
        fetchData();
    },[])

     const fetchData = async ()=>{
        const dataMenu = await fetch(Menu_api+resID);

        const json_data = await dataMenu.json();
        setResInfo(json_data.data);
    }
    console.log(resInfo);
    
    return resInfo;
}

export default useRestaurentMenu;