import React, { ReactElement } from "react";

import UndrawAdventureIcon from "../../icons/UndrawAdventureIcon";
import QuestionOption from "../QuestionOption";

import {
  QuestionCardContainer,
  UndrawAdventureIconContainer,
  QuestionContainer,
  QuestionTitle,
  Footer,
  ButtonText,
  NextButton,
  OptionsList,
} from "./styledComponents";

interface OptionType {
  optionNumber: string;
  optionContent: string;
  optionType: string;
}

interface QuestionCardProps {
  flag?: string;
  question: string;
  options: Array<OptionType>;
}

function QuestionCard(): ReactElement {
  const renderQuestionOptions = (): ReactElement => {
    return (
      <>
        <QuestionOption />
        <QuestionOption />
        <QuestionOption />
        <QuestionOption />
      </>
    );
  };

  return (
    <QuestionCardContainer>
      <UndrawAdventureIconContainer>
        <UndrawAdventureIcon />
      </UndrawAdventureIconContainer>
      <QuestionContainer>
        <QuestionTitle>Kuala Lumpur is the capital of</QuestionTitle>
        <OptionsList>{renderQuestionOptions()}</OptionsList>
      </QuestionContainer>
      <Footer>
        <NextButton onClick={() => alert("next question")}>
          <ButtonText>Next</ButtonText>
        </NextButton>
      </Footer>
    </QuestionCardContainer>
  );
}

export default QuestionCard;
