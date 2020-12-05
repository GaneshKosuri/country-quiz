import React, { ReactElement } from "react";

import {
  OptionContent,
  OptionNumber,
  QuestionOptionContainer,
} from "./styledComponents";

interface QuestionOptionProps {
  isDisabled: boolean;
}

function QuestionOption(): ReactElement {
  return (
    <QuestionOptionContainer>
      <OptionNumber>A</OptionNumber>
      <OptionContent>india</OptionContent>
    </QuestionOptionContainer>
  );
}

export default QuestionOption;
