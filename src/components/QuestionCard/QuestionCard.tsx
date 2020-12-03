import React, { ReactElement } from "react";

import UndrawAdventureIcon from "../../icons/UndrawAdventureIcon";
import { getCapitalQuestionWithOptions } from "../../utils/questionUtils";

import {
  QuestionCardContainer,
  UndrawAdventureIconContainer,
  QuestionContainer,
  QuestionTitle,
} from "./styledComponents";

function QuestionCard(): ReactElement {
  console.log(getCapitalQuestionWithOptions([0, 1]));
  return (
    <QuestionCardContainer>
      <UndrawAdventureIconContainer>
        <UndrawAdventureIcon />
      </UndrawAdventureIconContainer>
      <QuestionContainer>
        <QuestionTitle>Kuala Lumpur is the capital of</QuestionTitle>
      </QuestionContainer>
    </QuestionCardContainer>
  );
}

export default QuestionCard;
