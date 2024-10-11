// // src/pages/HomePage.jsx
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//       <p>This is a protected page accessible only to logged-in users.</p>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import Navbar from './HomePage/Navbar';
import HeroSection from './HomePage/HeroSection';
import StatsSection from './HomePage/StatsSection';
import CategorySection from './HomePage/CategorySection';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CategorySection />
    </>
  );
};

export default HomePage;
