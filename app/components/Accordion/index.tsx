"use client";
import React, { ReactElement, useState } from "react";
import clsx from "clsx";
import { Collapse } from "@mui/material";
import { StyledChevron, StyledDiv } from "./styled";

interface Props {
  summary: ReactElement;
  details: ReactElement;
}

export const Accordion = ({ summary, details }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledDiv className="expandableBlock" onClick={handleClick}>
        {summary}
        <StyledChevron width={20} className={clsx(isOpen && "expanded")} />
      </StyledDiv>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {details}
      </Collapse>
    </>
  );
};
