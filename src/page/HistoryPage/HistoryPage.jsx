import React, { useState } from "react";
import Layout from "../../layouts/layout";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import StickyHeadTable from "../../components/control/control";


const Homepage = () => {
  const [file, setFile] = useState(null);
  const [imageData, setImageData] = useState([]);
 

  

  return (
    <div>
      <Layout>
        <Navbar />
      </Layout>

      <Layout>
        <Hero />
        <StickyHeadTable></StickyHeadTable>
      </Layout>
      <Layout>
      </Layout>
    </div>
  );
};

export default Homepage;