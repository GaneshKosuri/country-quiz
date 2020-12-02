import React, { ReactElement } from "react";

import BaseSvg from "../BaseSvg";

import SvgComponent from "./SvgFile";

export default function UndrawWinnersIcon(props: any): ReactElement {
  return <BaseSvg renderComponent={SvgComponent} {...props} />;
}
