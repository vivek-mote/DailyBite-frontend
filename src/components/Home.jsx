import React from "react";

import Hero from "./Hero";
import Meal from "./Meal";
import DeliveryFeatures from "./DeliveryFeatures";
import RegistrationForm from "./RegistrationForm";
import AppSection from "./AppSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Meal />
      <DeliveryFeatures />
      <AppSection />
      <RegistrationForm />
    </div>
  );
};

export default Home;
