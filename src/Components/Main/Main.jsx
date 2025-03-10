import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../Home/Layout';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import ProductSupply from '../ProductSupply/ProductSupply';
import GlobalTech from '../GlobalTech/GlobalTech';
import About from '../About/About';
import ProcurementShipping from '../ProcurementShipping/ProcurementShipping';
import ContactForm from '../ContactForm/ContactForm';

import ProductLayout from "../ProductSupply/ProductLayout";

import PPE from "../ProductSupply/ppe";  // Import all product-related components
import LiftingRigging from "../ProductSupply/liftingRigging";
import IndustrialOil from "../ProductSupply/IndustrialOilChemicals";
import ElectricalLighting from "../ProductSupply/ElectricalLighting";
import RotaryEquipment from "../ProductSupply/RotaryEquipment";
import IndustrialTools from "../ProductSupply/IndustrialTools";
// import VehicleMachinery from "../ProductSupply/VehicleMachinery";
import CleaningHygiene from "../ProductSupply/CleaningHygiene";
import IndustrialValves from "../ProductSupply/IndustrialValves";
import WaterTreatment from "../ProductSupply/WaterTreatment";

import ScrollToTop from "../ScrollToTop";
import ProductandSupply from "../productandSupply/productandSupply"

function Main() {
  return (

    <div>
      <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" index element={<Layout />} />
      {/* <Route path="/product" element={<ProductSupply />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/global" element={<GlobalTech />} />

      {/* Parent Route for Product Supply */}
      <Route path="/product" element={<ProductLayout />}>
          <Route index element={<ProductSupply />} />
          <Route path="ppe" element={<PPE />} />
          <Route path="lifting-rigging" element={<LiftingRigging />} />
          <Route path="industrial-oil-chemicals" element={<IndustrialOil />} />
          <Route path="electrical-lighting" element={<ElectricalLighting />} />
          <Route path="rotary-equipment" element={<RotaryEquipment />} />
          <Route path="industrial-tools" element={<IndustrialTools />} />
          {/* <Route path="vehicles" element={<VehicleMachinery />} /> */}
          <Route path="cleaning-hygiene" element={<CleaningHygiene />} />
          <Route path="industrial-valves" element={<IndustrialValves />} />
          <Route path="water-treatment" element={<WaterTreatment />} />
        </Route>

        <Route path="/procurement" element={<ProcurementShipping />} />
        <Route path="/contact" element={<ContactForm />} />


        {/* <Route path="/productandSupply" element={<ProductandSupply />} /> */}
    </Routes>
    <Footer />
  </div>
  )
}

export default Main