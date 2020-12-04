import { ReactElement, ReactNode } from "react";

import { StyledButton } from "./styledComponents";

interface ButtonProps {
  children: ReactNode;
  [x: string]: any;
}

function Button(props: ButtonProps): ReactElement {
  const { children, ...other } = props;
  return <StyledButton {...other}>{children}</StyledButton>;
}

export default Button;
