import React from "react";

import * as S from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <S.Container onClick={onClick} variant={variant}>
      {children}
    </S.Container>
  );
};

export * from "./types";
