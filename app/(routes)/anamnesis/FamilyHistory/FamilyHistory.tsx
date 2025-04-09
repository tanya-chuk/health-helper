import React from "react";
import { List, ListItem, Typography } from "@mui/material";

interface Record {
  person: string;
  case: string;
  category: string;
  notes: string;
}

interface Props {
  list: Array<Record>;
}

const Record = ({ data }: { data: Record }) => {
  return (
    <ListItem sx={{ display: "block" }}>
      <Typography>
        {data.person}: {data.case.toLowerCase()}
      </Typography>
      <Typography>{data.notes}</Typography>
    </ListItem>
  );
};

export const FamilyHistory = ({ list }: Props) => {
  return (
    <List>
      {list.map((item, i) => (
        <Record key={i} data={item} />
      ))}
    </List>
  );
};
