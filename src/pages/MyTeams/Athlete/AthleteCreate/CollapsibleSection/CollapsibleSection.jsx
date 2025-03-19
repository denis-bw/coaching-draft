import React, { useState, useEffect, useRef } from 'react';
import {
    SectionContainer,
    SectionHeader,
    SectionContent,
    Arrow,
    Title,
    HelpTooltipContainer,
    ArrowWrapper,
} from './CollapsibleSection.styled';
import HelpTooltip from '../HelpTooltip.jsx';

const CollapsibleSection = ({ children, helpTooltiptitle, helpTooltip, title, top, left }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [userOpened, setUserOpened] = useState(false);
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
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

    useEffect(() => {
        if (contentRef.current) {
            if (!isOpen) {
                contentRef.current.setAttribute('inert', '');
            } else {
                contentRef.current.removeAttribute('inert');
            }
        }
    }, [isOpen]);

    return (
        <SectionContainer ref={sectionRef} isOpen={isOpen}>
            <SectionHeader onClick={toggleSection} role="button" tabIndex={0}>
                {title && <Title>{title}</Title>}
                <ArrowWrapper>
                    {helpTooltip && (
                        <HelpTooltipContainer onClick={(e) => e.stopPropagation()}>
                            <HelpTooltip title={helpTooltiptitle} text={helpTooltip} top={top} left={left} />
                        </HelpTooltipContainer>
                    )}
                    <Arrow isOpen={isOpen} />
                </ArrowWrapper>
            </SectionHeader>
            <SectionContent ref={contentRef} isOpen={isOpen}>
                {children}
            </SectionContent>
        </SectionContainer>
    );
};

export default CollapsibleSection;
