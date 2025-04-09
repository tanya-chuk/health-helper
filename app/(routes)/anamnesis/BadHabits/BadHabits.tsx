import { List, ListItem, Typography } from "@mui/material";
import React from "react";

interface Props {
  alcohol: boolean;
  smoking: boolean;
}
export const BadHabits = ({ alcohol, smoking }: Props) => {
  const noHabits = !alcohol && !smoking;

  if (noHabits) {
    return <Typography>Отсутствуют</Typography>;
  }

  return (
    <List>
      {alcohol && <ListItem>Употребление алкоголя</ListItem>}
      {smoking && <ListItem>Курение</ListItem>}
    </List>
  );
};
