import React from "react";
import Layout from "../../layouts/layout";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import Weather
 from "../../components/weather/weather";

const Search = () => {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
      </Layout>
      <Layout>
        <Hero></Hero>
        <Weather/>
      </Layout>
    </>
  );
};

export default Search;
