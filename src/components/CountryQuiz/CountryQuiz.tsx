import React, { ReactElement } from "react";

import QuestionCard from "../QuestionCard";
import useQuestionsState from "../QuestionsState/QuestionsState";
import ResultsCard from "../ResultsCard";

import {
  CopyRightsMessage,
  CountryQuizTitle,
  QuestionsContainer,
  QuizComponentContainer,
} from "./styledComponent";

function CountryQuiz(): ReactElement {
  const [
    completedCapitalQuestions,
    setCompletedCapitalQuestions,
  ] = useQuestionsState();
  const [
    completedCountryQuestions,
    setCompletedCountryQuestions,
  ] = useQuestionsState();
  const [
    completedCountryFlagQuestions,
    setCompletedCountryFlagQuestions,
  ] = useQuestionsState();

  return (
    <QuizComponentContainer>
      <QuestionsContainer>
        <CountryQuizTitle>Country Quiz</CountryQuizTitle>
        <QuestionCard />
        {/* <ResultsCard score={4} onClickTryAgain={() => alert("try again")} /> */}
      </QuestionsContainer>
      <CopyRightsMessage>Ganesh Kosuri @ DevChallenges.io</CopyRightsMessage>
    </QuizComponentContainer>
  );
}

export default CountryQuiz;
