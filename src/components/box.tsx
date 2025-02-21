import React, { HTMLAttributes } from 'react';

interface IBoxProps {
  children?: React.ReactNode;
}

export const Box: React.FC<IBoxProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...boxProps
}) => {
  return <div {...boxProps}>{children}</div>;
};
