import React, { ReactElement } from "react";

import {
  OptionContent,
  OptionNumber,
  QuestionOptionContainer,
} from "./styledComponents";

interface QuestionOptionProps {
  isDisabled: boolean;
  optionNumber: string;
  optionContent: string;
  optionType: string;
}

function QuestionOption(): ReactElement {
  // const { isDisabled, optionContent, optionNumber, optionType } = props;
  return (
    <QuestionOptionContainer isDisabled={true}>
      <OptionNumber>A</OptionNumber>
      <OptionContent>india</OptionContent>
    </QuestionOptionContainer>
  );
}

export default QuestionOption;
