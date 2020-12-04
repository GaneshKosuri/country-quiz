import React, { ReactElement } from "react";

import Button from "../../Common/components/Button";
import UndrawAdventureIcon from "../../icons/UndrawAdventureIcon";

import {
  QuestionCardContainer,
  UndrawAdventureIconContainer,
  QuestionContainer,
  QuestionTitle,
  Footer,
  ButtonText,
} from "./styledComponents";

function QuestionCard(): ReactElement {
  return (
    <QuestionCardContainer>
      <UndrawAdventureIconContainer>
        <UndrawAdventureIcon />
      </UndrawAdventureIconContainer>
      <QuestionContainer>
        <QuestionTitle>Kuala Lumpur is the capital of</QuestionTitle>
      </QuestionContainer>
      <Footer>
        <Button>
          <ButtonText>Next</ButtonText>
        </Button>
      </Footer>
    </QuestionCardContainer>
  );
}

export default QuestionCard;
