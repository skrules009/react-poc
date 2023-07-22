const RestourantCart = (props) =>{
    {
        const restData = props?.restData?.info;
        const {cloudinaryImageId, cuisines, name, avgRating} = restData;
    
    return <div className="res-cart">
        <div className="res-log">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            </div>
            <div className="res-detail">
                <h4>{name}</h4>
                <h5>{cuisines?.join(', ')}</h5>
                <h5>{avgRating}</h5>
                <h6>{restData.sla.deliveryTime} minute</h6>
            </div>
    </div>
    }
};

export default RestourantCart;