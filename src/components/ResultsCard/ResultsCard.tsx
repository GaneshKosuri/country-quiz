import React, { ReactElement } from "react";

import UndrawWinnersIcon from "../../icons/UndrawWinnersIcon";

import {
  ResultCardContainer,
  ResultContentContainer,
  ResultDescription,
  ResultTitle,
  Score,
  TryAgainButton,
  TryAgainText,
} from "./styledComponents";

interface ResultsCardProps {
  score: number;
  onClickTryAgain: () => void;
}

function ResultsCard(props: ResultsCardProps): ReactElement {
  const { score, onClickTryAgain } = props;
  return (
    <ResultCardContainer>
      <UndrawWinnersIcon />
      <ResultContentContainer>
        <ResultTitle>Result</ResultTitle>
        <ResultDescription>
          you got <Score>{score}</Score> correct answers
        </ResultDescription>
      </ResultContentContainer>
      <TryAgainButton onClick={onClickTryAgain}>
        <TryAgainText>Try again</TryAgainText>
      </TryAgainButton>
    </ResultCardContainer>
  );
}

export default ResultsCard;
