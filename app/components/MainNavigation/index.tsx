"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Stack } from "@mui/material";
import { StyledBox, StyledLink } from "./styled";

const paths = {
  "/anamnesis": {
    id: "anamnesis",
    name: "Анамнез",
    href: "/anamnesis",
  },
  "/past-visits": {
    id: "past-visits",
    name: "Посещения",
    href: "/past-visits",
  },
  "/prescriptions": {
    id: "prescriptions",
    name: "Назначения",
    href: "/prescriptions",
  },
  "/analyzes": {
    id: "analyzes",
    name: "Анализы",
    href: "/analyzes",
  },
};

export const MainNavigation = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <StyledBox className="mainBox">
      <StyledBox className="navigation">
        <Stack>
          {Object.values(paths).map(({ id, name, href }) => {
            const isActive = currentPath === href;
            return (
              <StyledLink
                className={clsx(isActive && "active")}
                href={href}
                key={id}
              >
                {name}
              </StyledLink>
            );
          })}
        </Stack>
      </StyledBox>
      <StyledBox className="spacer" />
    </StyledBox>
  );
};
