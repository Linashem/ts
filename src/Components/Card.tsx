import React, { FC } from "react";

export enum CardVariants {
  outlined = "outlined",
  primery = "primery",
}

interface CardIn {
  width: string;
  height: string;
  children: React.ReactChild | React.ReactNode;
  variant: CardVariants;
  onClick: () => void;
}

export const Card: FC<CardIn> = ({ width, height, children, variant,onClick }) => {
  return (
    <div onClick={onClick}
      style={{
        width,
        height,
        border: variant === CardVariants.outlined ? "3px solid pink" : "none",
        background: variant === CardVariants.outlined ? "none" : "pink",
      }}
    >
      {children}
    </div>
  );
};
