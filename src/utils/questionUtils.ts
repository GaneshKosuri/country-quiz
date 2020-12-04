import countries from "../fixtures/countries.json";

const countriesData = countries.countries;
const countriesLength = countriesData.length;

const CAPITAL = "capital";
const NAME = "name";
function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isCountryCapitalEmpty(randomCountryIndex: number): boolean {
  const countryCapital = countriesData[randomCountryIndex].capital;
  return countryCapital === "";
}

export function getCapitalQuestionWithOptions(
  previousQuestionsArray: Array<number>,
  optionType: "capital" | "name"
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
  questionOptions.push(countriesData[randomCountryIndex][optionType]);
  for (let i = 0; i < 3; i++) {
    const randomCapitalOption = getRandomQuestionOption(questionOptions, NAME);
    questionOptions.push(randomCapitalOption);
  }
  const questionDetails = {
    countryIndex: randomCountryIndex,
    countryCapitalName: countriesData[randomCountryIndex].name,
    options: questionOptions,
  };
  console.log(questionDetails);
  return questionDetails;
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

export function getFlagQuestionWithOptions(
  previousQuestionsArray: Array<number>
) {}
