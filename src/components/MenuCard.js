const MenuCard = ({items}) => {
    const info = items?.card?.info
    return(
        <div style={{borderBottom: "1px solid black", margin: "1rem", padding: "1rem", display: "flex", justifyContent: "space-between"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{margin: "1rem"}}>{info?.isVeg?"VEG":"NON-VEG"}</div> 
                    <h3 style={{margin: "1rem"}}>{info?.name}</h3>
                    <h4 style={{margin: "1rem"}}>₹{info?.price/100}</h4>
                    {info?.ratings?.aggregatedRating?.rating && <p style={{margin: "1rem"}}>{info?.ratings?.aggregatedRating?.rating}({info?.ratings?.aggregatedRating?.ratingCount})</p>}
                </div>
                <div>
                    <p>{info?.description}</p>
                </div>
            </div>
            <div style={info?.inStock ? {width: 200, height: 200} : {width: 200, height: 200, filter: "grayscale(100%)"}}>
            {info?.imageId &&<img style={{width: "100%"}} src={"https://media-assets.swiggy.com/"+info?.imageId} alt="Food Menu" />}
            {/* TODO: Fix the overlapping issue */}
            {info?.inStock ? <button>Add</button> : <p>{info?.nextAvailableAtMessage}</p>}
            </div>
            
        </div>
    )
}

export default MenuCard