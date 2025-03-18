import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as HelpIcon } from "../../../../assets/HelpIcon.svg";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(HelpIcon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.white};
`;

const TooltipText = styled.div`
  position: absolute;
  background-color:  ${({ theme }) => theme.ContainerBGColor};
  color:  ${({ theme }) => theme.textBlack};
  padding: 12px;
  border-radius: 10px;
  border: 2px solid   ${({ theme }) => theme.greenMain};
  font-size: 14px;
  line-height: 1.5;
  width: 300px;
  max-height: 170px;
  overflow-y: auto;
  word-wrap: break-word;
  z-index: 100;
  cursor: pointer;
  top: ${({ top }) => top || '-180%'};
  left: ${({ left }) => left || '-310%'};
  transform: translateX(-50%);
  
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  
`;

const HelpTooltip = ({ text, top, left  }) => {
  const [visible, setVisible] = useState(false);

  return (
    <TooltipWrapper
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(!visible)}
    >
      <Icon />
      <TooltipText visible={visible} top={top} left={left} >{text}</TooltipText>
    </TooltipWrapper>
  );
};

export default HelpTooltip;