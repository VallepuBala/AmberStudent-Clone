import React from 'react';
import { Search, MapPin, Building2, Shield, Globe2, Users2, BadgeCheck, Headphones } from 'lucide-react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import SearchBar from './components/SearchBar';
import './styles/App.css';

function App() {
  const featuredProperties = [
    {
      id: 1,
      title: "The Student Hotel",
      location: "London, UK",
      price: "£250/week",
      rating: 4.8,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000",
      amenities: ["WiFi", "Gym", "Study Room", "24/7 Security"]
    },
    {
      id: 2,
      title: "Urban Student Living",
      location: "Manchester, UK",
      price: "£220/week",
      rating: 4.6,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2000",
      amenities: ["WiFi", "Laundry", "Bike Storage", "Cinema Room"]
    },
    {
      id: 3,
      title: "Campus View Apartments",
      location: "Birmingham, UK",
      price: "£195/week",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
      amenities: ["WiFi", "Game Room", "Parking", "Study Areas"]
    }
  ];

  const popularCities = [
    {
      name: "London",
      properties: 1234,
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Manchester",
      properties: 856,
      image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSKNxQbuNJC0im8Jo9346M3NDNqW8R8Ls7xlPxeHtoYL5qZ_rW8H57wAXq5kEqZSaC0wjH2AqmClaqZszuuxYxukUDXU8gUEjueIP_0rA"
    },
    {
      name: "Birmingham",
      properties: 645,
      image: "https://lh5.googleusercontent.com/p/AF1QipNFcJxvFKtQQn9TpKGqRnT7E1PeVFub6BVuhsDv=w675-h390-n-k-no"
    },
    {
      name: "Edinburgh",
      properties: 432,
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTWccoDuiUHMwdOlzArEoB4v_JHkVcgpv1drnCEn1hpMQcr6mdQMMITNTrqqgX53BWpuVFIaTXW5zFSjYTKah_HFQSz1q-orhmvU0CbcA"
    }
  ];

  return (
    <div className="app">
      <Navbar />
      
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Find Your Perfect Student Home</h1>
          <p>Discover the best student accommodations worldwide with verified listings and seamless booking</p>
          <SearchBar />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Cities Worldwide</p>
          </div>
          <div className="stat-item">
            <h3>10k+</h3>
            <p>Properties Listed</p>
          </div>
          <div className="stat-item">
            <h3>100k+</h3>
            <p>Happy Students</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">
              <Building2 />
            </div>
            <h3>Verified Properties</h3>
            <p>All properties are personally verified for quality and safety</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <Shield />
            </div>
            <h3>Secure Booking</h3>
            <p>Book with confidence using our secure payment system</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <MapPin />
            </div>
            <h3>Prime Locations</h3>
            <p>Properties in the best student-friendly locations</p>
          </div>
        </div>
      </div>
      
      {/* Popular Cities */}
      <div className="cities">
        <div className="cities-container">
          <h2>Popular Student Cities</h2>
          <div className="cities-grid">
            {popularCities.map((city, index) => (
              <div key={index} className="city-card">
                <img src={city.image} alt={city.name} />
                <div className="city-info">
                  <h3>{city.name}</h3>
                  <p>{city.properties} properties</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="properties">
        <div className="properties-container">
          <h2>Featured Properties</h2>
          <div className="properties-grid">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="how-it-works">
        <div className="how-it-works-container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">
                <Search />
              </div>
              <h3>Search</h3>
              <p>Browse through our extensive collection of student accommodations</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <BadgeCheck />
              </div>
              <h3>Book</h3>
              <p>Select your perfect home and book instantly online</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <Users2 />
              </div>
              <h3>Move In</h3>
              <p>Move into your new home with our hassle-free process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <div className="why-choose-us-container">
          <h2>Why Choose Us</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <Globe2 className="benefit-icon" />
              <h3>Global Presence</h3>
              <p>Find accommodation in top student cities worldwide</p>
            </div>
            <div className="benefit">
              <BadgeCheck className="benefit-icon" />
              <h3>Verified Listings</h3>
              <p>Every property is verified for quality and safety</p>
            </div>
            <div className="benefit">
              <Users2 className="benefit-icon" />
              <h3>Student Community</h3>
              <p>Connect with fellow students in your new home</p>
            </div>
            <div className="benefit">
              <Headphones className="benefit-icon" />
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for all your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter">
        <div className="newsletter-container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest properties and student housing news</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="cta">
        <div className="cta-container">
          <h2>Ready to Find Your New Home?</h2>
          <p>Join thousands of students who've found their perfect accommodation</p>
          <button className="cta-button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

