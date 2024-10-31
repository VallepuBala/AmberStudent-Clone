import React from 'react';
import { MapPin, Star, Heart, Share2 } from 'lucide-react';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="image-container">
        <img src={property.image} alt={property.title} />
        <div className="action-buttons">
          <button className="action-button">
            <Heart />
          </button>
          <button className="action-button">
            <Share2 />
          </button>
        </div>
      </div>
      
      <div className="card-content">
        <div className="header">
          <h3>{property.title}</h3>
          <div className="rating">
            <Star className="star-icon" />
            <span>{property.rating}</span>
            <span className="reviews">({property.reviews})</span>
          </div>
        </div>
        
        <div className="location">
          <MapPin />
          <span>{property.location}</span>
        </div>

        <div className="amenities">
          {property.amenities.map((amenity, index) => (
            <span key={index} className="amenity-tag">
              {amenity}
            </span>
          ))}
        </div>

        <div className="footer">
          <div className="price">
            <span className="amount">{property.price}</span>
            <span className="period">per week</span>
          </div>
          <button className="view-button">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;