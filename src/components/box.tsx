import React, { HTMLAttributes } from 'react';

interface IBoxProps {
  children?: React.ReactNode;
}

const Box: React.FC<IBoxProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...boxProps
}) => {
  return <div {...boxProps}>{children}</div>;
};
export default Box;