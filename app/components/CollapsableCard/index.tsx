'use client';
import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { Collapse, IconButton, Typography } from '@mui/material';
import { Card, CardContent, CardHeader } from '@/app/components';
import { StyledChevron } from './styled';

type Props = {
  expanded?: boolean;
  title: string;
  content: ReactNode;
};

export const CollapsableCard = ({ expanded, title, content }: Props) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card>
      <CardHeader
        action={
          <IconButton onClick={handleExpand}>
            <StyledChevron
              width={26}
              className={clsx(isExpanded && 'expanded')}
            />
          </IconButton>
        }
        title={
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        }
      />
      <Collapse in={isExpanded}>
        <CardContent>{content}</CardContent>
      </Collapse>
    </Card>
  );
};
