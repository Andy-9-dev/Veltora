import React, { useState, useMemo } from "react"
import { list } from "../../data/Data"

const RecentCard = ({ filters = {} }) => {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const filtered = useMemo(() => {
    return list.filter((item) => {
      const matchLocation =
        !filters.location ||
        item.location.toLowerCase().includes(filters.location.toLowerCase())
      const matchType = !filters.type || item.type === filters.type
      const matchCategory = !filters.price || item.category === filters.price
      return matchLocation && matchType && matchCategory
    })
  }, [filters])

  if (filtered.length === 0) {
    return (
      <div className="no-results">
        <p>No properties match your search criteria.</p>
        <span>Try adjusting your filters above.</span>
      </div>
    )
  }

  return (
    <div className="content grid3 mtop">
      {filtered.map((val) => {
        const { id, cover, category, location, name, price, type } = val
        const isFav = favorites.includes(id)
        return (
          <div className="property-card" key={id}>
            <div className="property-img">
              <img src={cover} alt={name} />
              <span
                className={`property-badge ${category === "For Sale" ? "sale" : "rent"}`}
              >
                {category}
              </span>
            </div>
            <div className="property-body">
              <div className="property-header">
                <h4>{name}</h4>
                <button
                  className={`fav-btn ${isFav ? "active" : ""}`}
                  onClick={() => toggleFavorite(id)}
                  aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                >
                  <i className={`fa${isFav ? " fa-heart" : "r fa-heart"}`}></i>
                </button>
              </div>
              <p className="property-location">
                <i className="fa fa-location-dot"></i> {location}
              </p>
              <div className="property-footer">
                <div className="property-price">
                  <strong>{price}</strong>
                  <span>{category === "For Rent" ? "/month" : ""}</span>
                </div>
                <span className="property-type">{type}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RecentCard
