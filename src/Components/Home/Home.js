import React from 'react';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import ProductList from '../ProductList/ProductList';
import Team from '../Team/Team';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <ProductList></ProductList>
        <FAQ></FAQ>
        <Team></Team>
        </>
    );
};

export default Home;