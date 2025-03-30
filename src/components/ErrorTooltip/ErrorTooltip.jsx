import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../assets/ErrorIcon.svg";

const Icon = styled(ErrorIcon)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: ${({ theme }) => theme.red};
  transition: stroke 0.3s ease;
`;

const TooltipWrapper = styled.button.attrs({ type: "button" })`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;

    ${Icon} {
      stroke: ${({ theme }) => theme.darkGreen}; 
    }
  }
`;

const TooltipOuter = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.red};
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
  min-width: 80px;
  max-height: 170px;
  width: max-content;
  z-index: 100;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  white-space: pre-line;
  margin-top: ${({ placement }) => (placement === 'top' ? '6px' : '-6px')};
  top: ${({ tooltipPosition }) => tooltipPosition?.top || '0'}px;
  left: ${({ tooltipPosition }) => tooltipPosition?.left || '0'}px;
  
  &::before {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    width: 0;
    height: 0;
    z-index: 1;
    
    ${({ placement, theme }) => 
      placement === 'top' 
        ? `
          bottom: -9px; /* Трохи вище, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 9px 9px 0;
          border-color: ${theme.red} transparent transparent;
        ` 
        : `
          top: -9px; /* Трохи нижче, ніж зовнішня стрілка */
          left: 79.4%;
          margin-left: -6px;
          border-width: 0 9px 9px;
          border-color: transparent transparent ${theme.red};
        `
    }
  }

  @media (max-width: 768px) {
    max-width: 260px;

  }
`;

const TooltipInner = styled.div`
  overflow-y: auto;
  padding-right: 10px;
  max-height: 146px;
  word-wrap: break-word; 
  white-space: normal; 
  font-size: 14px; 
  font-weight: 300;
  /* color: ${({ theme }) => theme.red}; */
`;

const Title = styled.div`
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 5px; 
  color:  ${({ theme }) => theme.red};
`;

const ErrorTooltip = ({ title, text }) => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('top');
  const [tooltipPosition, setTooltipPosition] = useState(null);
  
  const tooltipRef = useRef(null);
  const wrapperRef = useRef(null);

 
  const calculatePosition = () => {
    if (!wrapperRef.current || !tooltipRef.current || !visible) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
   
    const tooltipHeight = tooltipRect.height;
    const tooltipWidth = tooltipRect.width;
 
    const iconTop = wrapperRect.top;
    const iconBottom = wrapperRect.bottom;
    const iconLeft = wrapperRect.left;
    const iconRight = wrapperRect.right;
    const iconWidth = wrapperRect.width;
    const iconHeight = wrapperRect.height;
    const iconCenterX = iconLeft + (iconWidth / 2);
    
    const hasSpaceAbove = iconTop > tooltipHeight + 15; 
    
    const newPlacement = hasSpaceAbove ? 'top' : 'bottom';
    setPlacement(newPlacement);
    
    let top, left;
    
    if (newPlacement === 'top') {
   
      top = iconTop - tooltipHeight - 12;
    } else {
      top = iconBottom + 12; 
    }
    
    left = iconCenterX - (tooltipWidth * 0.8); 
    
    if (left < 10) left = 10;
    if (left + tooltipWidth > viewportWidth - 10) left = viewportWidth - tooltipWidth - 10;
    
    setTooltipPosition({ top, left });
  };

  useEffect(() => {
    if (visible) {
      setTimeout(calculatePosition, 0);
    }
  }, [visible]);

  useEffect(() => {
    if (visible) {
      window.addEventListener('scroll', calculatePosition);
      window.addEventListener('resize', calculatePosition);
      
      return () => {
        window.removeEventListener('scroll', calculatePosition);
        window.removeEventListener('resize', calculatePosition);
      };
    }
  }, [visible]);

  return (
    <TooltipWrapper
      ref={wrapperRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(!visible)}
    >
      <Icon />
      <TooltipOuter 
        ref={tooltipRef}
        visible={visible}
        placement={placement}
        tooltipPosition={tooltipPosition}
      >
        <TooltipInner>
          {title && <Title>{title}</Title>}
          {text}
        </TooltipInner>
      </TooltipOuter>
    </TooltipWrapper>
  );
};

export default ErrorTooltip;