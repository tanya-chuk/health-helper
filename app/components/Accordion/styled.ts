import { styled } from "@mui/material/styles";
import ChevronDown from "@/public/chevron_down.svg";

export const StyledDiv = styled("div")({
  "&.expandableBlock": {
    display: "flex",
    gap: "8px",
    width: "fit-content",
    cursor: "pointer",
    padding: "8px 0px",
    paddingRight: "16px",
  },
});

export const StyledChevron = styled(ChevronDown)({
  "&.expanded": {
    transform: "rotate(180deg)",
  },
});
