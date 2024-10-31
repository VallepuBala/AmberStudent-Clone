// import React from 'react';
// import { Search, MapPin, Building2, Shield, Globe2, Users2, BadgeCheck, Headphones, Home, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
// import Navbar from './components/Navbar';
// import PropertyCard from './components/PropertyCard';
// import SearchBar from './components/SearchBar';

// function App() {
//   const featuredProperties = [
//     {
//       id: 1,
//       title: "The Student Hotel",
//       location: "London, UK",
//       price: "£250/week",
//       rating: 4.8,
//       reviews: 128,
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000",
//       amenities: ["WiFi", "Gym", "Study Room", "24/7 Security"]
//     },
//     {
//       id: 2,
//       title: "Urban Student Living",
//       location: "Manchester, UK",
//       price: "£220/week",
//       rating: 4.6,
//       reviews: 95,
//       image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2000",
//       amenities: ["WiFi", "Laundry", "Bike Storage", "Cinema Room"]
//     },
//     {
//       id: 3,
//       title: "Campus View Apartments",
//       location: "Birmingham, UK",
//       price: "£195/week",
//       rating: 4.7,
//       reviews: 156,
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
//       amenities: ["WiFi", "Game Room", "Parking", "Study Areas"]
//     }
//   ];

//   const globalCities = [
//     {
//       name: "London",
//       country: "United Kingdom",
//       properties: "2,345",
//       image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1500"
//     },
//     {
//       name: "New York",
//       country: "United States",
//       properties: "1,789",
//       image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1500"
//     },
//     {
//       name: "Sydney",
//       country: "Australia",
//       properties: "1,234",
//       image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1500"
//     },
//     {
//       name: "Toronto",
//       country: "Canada",
//       properties: "956",
//       image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=1500"
//     },
//     {
//       name: "Dubai",
//       country: "UAE",
//       properties: "867",
//       image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1500"
//     },
//     {
//       name: "Singapore",
//       country: "Singapore",
//       properties: "745",
//       image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1500"
//     }
//   ];

//   const bookingSteps = [
//     {
//       icon: <Search className="w-6 h-6" />,
//       title: "Search",
//       description: "Browse through thousands of properties across hundreds of cities globally"
//     },
//     {
//       icon: <CheckCircle2 className="w-6 h-6" />,
//       title: "Book",
//       description: "Choose your perfect accommodation and book instantly with secure payment"
//     },
//     {
//       icon: <Home className="w-6 h-6" />,
//       title: "Move In",
//       description: "Get ready to move into your new home with our hassle-free process"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
      
//       {/* Hero Section */}
//       <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
//           <h1 className="text-5xl font-bold mb-6">Find Your Perfect Student Home</h1>
//           <p className="text-xl mb-8 max-w-2xl">Discover the best student accommodations worldwide with verified listings and seamless booking</p>
//           <SearchBar />
//         </div>
//       </div>

//       {/* Global Presence Stats */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Thousands of Properties Globally</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of students who've found their perfect accommodation through our platform</p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
//               <div className="text-gray-600">Cities Worldwide</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">50k+</div>
//               <div className="text-gray-600">Properties Listed</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">200k+</div>
//               <div className="text-gray-600">Happy Students</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
//               <div className="text-gray-600">Satisfaction Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Popular Cities */}
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Popular Cities Across the Globe</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">Explore student accommodation in these popular destinations</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {globalCities.map((city, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
//                 <img
//                   src={city.image}
//                   alt={city.name}
//                   className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-6 text-white">
//                   <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
//                   <p className="text-sm mb-2">{city.country}</p>
//                   <div className="flex items-center">
//                     <Building2 className="w-4 h-4 mr-2" />
//                     <span>{city.properties} properties</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Booking Steps */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Book Your Place in 3 Easy Steps</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">Our simple booking process makes finding your perfect student accommodation quick and easy</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {bookingSteps.map((step, index) => (
//               <div key={index} className="relative">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                     <div className="text-blue-600">{step.icon}</div>
//                   </div>
//                   <h3 className="text-lg font-bold mb-2">{step.title}</h3>
//                   <p className="text-gray-600">{step.description}</p>
//                 </div>
//                 {index < bookingSteps.length - 1 && (
//                   <div className="hidden md:block absolute right-[-10px] top-1/2 transform -translate-y-1/2">
//                     <ArrowRight className="w-6 h-6 text-gray-400" />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Featured Properties */}
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">Find the most popular student accommodations worldwide</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredProperties.map(property => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;