import RestourantCart from "./RestourantCart";
import { useEffect, useState } from "react";
import {API_URL} from "../utility/constant";
import Shimmer from  "./Shimmer";

const BodyComponent = ()=> {
    const fetchApiData = async ()=> {
        const data = await fetch(API_URL);
        const json = await data.json();
        setFilteredApiData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const [filteredApiData, setFilteredApiData] = useState([]);
    useEffect(()=>{
        fetchApiData();
        
    },[]);
    
 return filteredApiData?.length === 0 ? <Shimmer/> : (
        <div className="body-container">
            <div className="search-box">
                <button onClick={()=>{
                      const filter = filteredApiData.filter(x=>x.info.avgRating>4);
                      setFilteredApiData(filter);
                }
                }>filter</button>
            </div>
            <div className="res-container">
                {
                    
                    filteredApiData.map((restaura)=><RestourantCart key={restaura?.info?.id} restData={restaura}/>)
                }
                
            </div>
        </div>
        )
        }

export default BodyComponent;