import React from "react";

import QuestionCard from "../QuestionCard";

import {
  CopyRightsMessage,
  CountryQuizTitle,
  QuestionsContainer,
  QuizComponentContainer,
} from "./styledComponent";

function CountryQuiz() {
  return (
    <QuizComponentContainer>
      <QuestionsContainer>
        <CountryQuizTitle>Country Quiz</CountryQuizTitle>
        <QuestionCard />
      </QuestionsContainer>
      <CopyRightsMessage>Ganesh Kosuri @ DevChallenges.io</CopyRightsMessage>
    </QuizComponentContainer>
  );
}

export default CountryQuiz;
