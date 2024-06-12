const MenuCard = ({items}) => {
    const info = items?.card?.info
    return(
        <div style={{borderBottom: "1px solid black", margin: "1rem", padding: "1rem"}}>
           <div>{info?.isVeg?"VEG":"NON-VEG"}</div> 
           <h3>{info?.name}</h3>
           <h4>₹{info?.price/100}</h4>
            {info?.ratings?.aggregatedRating?.rating && <p>{info?.ratings?.aggregatedRating?.rating}({info?.ratings?.aggregatedRating?.ratingCount})</p>}
        </div>
    )
}

export default MenuCard