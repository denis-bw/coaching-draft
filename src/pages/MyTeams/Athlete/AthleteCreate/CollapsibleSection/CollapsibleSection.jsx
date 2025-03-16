import React, { useState, useEffect, useRef } from 'react';
import {
    SectionContainer,
    SectionHeader,
    SectionContent,
    Arrow,
    Title,
} from './CollapsibleSection.styled';

const CollapsibleSection = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [userOpened, setUserOpened] = useState(false); 
    const sectionRef = useRef(null);
    const hasOpened = useRef(false);

    const toggleSection = () => {
        setIsOpen(prev => {
            if (!userOpened) {
                setUserOpened(true); 
            }
            return !prev;
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                
                if (!userOpened && entry.isIntersecting && !hasOpened.current && entry.intersectionRatio >= 1) {
                    setTimeout(() => {
                        setIsOpen(true); 
                    }, 200);  
                    hasOpened.current = true;
                }
            },
            { threshold: 1.0, rootMargin: '0px 0px -100px 0px' }    
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [userOpened]);

    return (
        <SectionContainer ref={sectionRef} isOpen={isOpen}>
            <SectionHeader onClick={toggleSection}>
               {title && <Title>{title}</Title>}
                <Arrow isOpen={isOpen}>▾</Arrow>
            </SectionHeader>
            <SectionContent isOpen={isOpen}>
                {children}
            </SectionContent>
        </SectionContainer>
    );
};

export default CollapsibleSection;
