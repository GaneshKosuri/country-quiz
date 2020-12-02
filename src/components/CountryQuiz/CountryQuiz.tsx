import React, { Component } from "react";

import { CopyRightsMessage, QuizComponentContainer } from "./styledComponent";

class CountryQuiz extends Component {
  render() {
    return (
      <QuizComponentContainer>
        CountryQuiz
        <CopyRightsMessage>Ganesh Kosuri @ DevChallenges.io</CopyRightsMessage>
      </QuizComponentContainer>
    );
  }
}

export default CountryQuiz;
