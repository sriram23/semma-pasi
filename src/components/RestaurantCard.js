const styleCard = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = ({data}) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/"+data.info.cloudinaryImageId} alt="res-logo" />
            <h3>{data.info.name}</h3>
            <h4>{data.info.cuisines.join(", ")}</h4>
            <h4>{data.info.avgRating} Stars</h4>
            <h4>{data.info.sla.slaString}</h4>
        </div>
    )}
export default RestaurantCard
