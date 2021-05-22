import React from 'react';
import Footer from '../../../components/Footer';
import NavBar from '../../../components/NavBar';

import { SectionComponent } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <SectionComponent>
                    <h1>Home</h1>
                </SectionComponent>
            </div>
            <Footer />
        </>
    );
}

export default Home;