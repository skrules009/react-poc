import RestourantCart from "./RestourantCart";
import { apiData } from "../utility/model";
import { useState } from "react";

const BodyComponent = ()=> {
    const [filteredApiData, setFilteredApiData] = useState(apiData);
 return (
        <div className="body-container">
            <div className="search-box">
                <button onClick={()=>{
                      const filter = filteredApiData.filter(x=>x.info.avgRating>4);
                      setFilteredApiData(filter);
                       console.log('filteredData', filter)
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