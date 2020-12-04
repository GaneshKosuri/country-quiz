import { useState } from "react";

function useQuestionsState() {
  const [completedQuestions, setCompletedQuestions] = useState<Array<number>>(
    []
  );
  const appendCompletedQuestions = (questionIndex: number): void => {
    completedQuestions.push(questionIndex);
    setCompletedQuestions(completedQuestions);
  };
  return [completedQuestions, appendCompletedQuestions];
}

export default useQuestionsState;
