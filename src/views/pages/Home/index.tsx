import React from 'react';
import Footer from '../../../components/Footer';
import NavBar from '../../../components/NavBar';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <Container>
                <h1>Home</h1>
            </Container>
            <Footer />
        </>
    )
}

export default Home;