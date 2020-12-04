import { CAPITAL, FLAG, NAME } from "../constants/UIConstants";
import countries from "../fixtures/countries.json";

const countriesData = countries.countries;
const countriesLength = countriesData.length;

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isCountryCapitalEmpty(randomCountryIndex: number): boolean {
  const countryCapital = countriesData[randomCountryIndex].capital;
  return countryCapital === "";
}

export function getRandomQuestionOption(
  previousOptionsArray: Array<string>,
  optionType: "capital" | "name"
): string {
  let randomCountryIndex = 0;

  let randomQuestionOption: string = "";
  for (let i = 0; i < countriesLength; i++) {
    randomCountryIndex = randomInteger(0, countriesLength - 1);
    randomQuestionOption = countriesData[randomCountryIndex][optionType];
    const index = previousOptionsArray.findIndex(
      (eachPreviousCountryCapitalOption) =>
        eachPreviousCountryCapitalOption === randomQuestionOption &&
        randomQuestionOption !== ""
    );
    if (index === -1) break;
  }
  return randomQuestionOption;
}

export function getQuestion(
  questionData: string,
  questionType: "capital" | "name" | "flag"
): string {
  switch (questionType) {
    case CAPITAL:
      return `${questionData} is the capital of?`;
    case NAME:
      return `what is the capital of ${questionData}?`;
    case FLAG:
      return "Which country does this flag belong to?";
    default:
      return "";
  }
}

export function getCapitalQuestionWithOptions(
  previousQuestionsArray: Array<number>,
  questionType: "capital" | "name" | "flag",
  optionsType: "capital" | "name"
): any {
  let randomCountryIndex = 0;
  let questionOptions: Array<string> = [];
  for (let i = 0; i < countriesLength; i++) {
    randomCountryIndex = randomInteger(0, countriesLength - 1);
    const index = previousQuestionsArray.findIndex(
      (eachPreviousCountryIndex) =>
        eachPreviousCountryIndex === randomCountryIndex &&
        !isCountryCapitalEmpty(randomCountryIndex)
    );
    if (index === -1) break;
  }
  questionOptions.push(countriesData[randomCountryIndex][optionsType]);
  for (let i = 0; i < 3; i++) {
    const randomCapitalOption = getRandomQuestionOption(
      questionOptions,
      optionsType
    );
    questionOptions.push(randomCapitalOption);
  }
  return {
    countryIndex: randomCountryIndex,
    flag:
      questionType === FLAG
        ? countriesData[randomCountryIndex][questionType]
        : null,
    question: getQuestion(
      countriesData[randomCountryIndex][questionType],
      questionType
    ),
    options: questionOptions.sort(() => Math.random() - 0.5),
  };
}
