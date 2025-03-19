import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as HelpIcon } from "../../../../assets/HelpIcon.svg";

const Icon = styled(HelpIcon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.white};
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
  position: absolute;
  background-color: ${({ theme }) => theme.ContainerBGColor};
  color: ${({ theme }) => theme.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.black};
  font-size: 14px;
  line-height: 1.5;
  width: 300px;
  max-height: 170px;
  z-index: 100;
  cursor: pointer;
  top: ${({ top }) => top || '-190%'};
  left: ${({ left }) => left || '-310%'};
  transform: translateX(-50%);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  white-space: pre-line;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 79%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.black};
  }

  @media (max-width: 768px) {
    width: 260px;
    &::after {
         left: 84%;
    }
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


`;

const Title = styled.div`
  font-size: 14px; 
  font-weight: 600; 
  margin-bottom: 5px; 
`;

const HelpTooltip = ({ title, text, top, left }) => {
  const [visible, setVisible] = useState(false);

  return (
    <TooltipWrapper
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(!visible)}
    >
      <Icon />
    <TooltipOuter visible={visible} top={top} left={left}>
       
        <TooltipInner > {title && <Title>{title}</Title>} 
          {text}</TooltipInner>
      </TooltipOuter>
    </TooltipWrapper>
  );
};

export default HelpTooltip;
