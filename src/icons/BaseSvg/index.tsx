import React, { ReactElement } from "react";
interface Props {
  renderComponent: any;
  className?: string;
  [x: string]: any;
}

export default function BaseSvg(props: Props): ReactElement {
  const { renderComponent: Component, className, ...other } = props;
  return <Component className={className} {...other} />;
}
