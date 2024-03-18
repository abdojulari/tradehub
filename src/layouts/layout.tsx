import React,  { ReactNode } from 'react';
import { Banner }  from "../components";
import { Header } from "../components";
import { Footer } from '../components';

interface LayoutProps {
    children: ReactNode;
    showBanner?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBanner = true }) => {
    
    const handleSubscribeClick = () => {
        // Find the section element and scroll to it
        const sectionElement = document.getElementById('subscribeSection');
        sectionElement?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section className="flex flex-col">
            <Header cart={[]} />
            { showBanner &&  <Banner onSubscribeClick={handleSubscribeClick}  /> }
                <div className="px-10 mx-10">
                    { children }
                </div>
            <Footer />
        </section >
    )
}

export default Layout