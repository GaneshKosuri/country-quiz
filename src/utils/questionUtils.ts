import countries from "../fixtures/countries.json";

const countriesData = countries.countries;

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getCapitalQuestionWithOptions(
  previousQuestionsArray: Array<number>
): any {
  let randomCountryIndex = 0;
  //   while (true) {
  //     randomCountryIndex = randomInteger(0, countriesData.length - 1);
  //     // countriesData.findIndex((eachPreviousCountryIndex)=>eachPreviousCountryIndex === randomCountryIndex)
  //   }
  return randomCountryIndex;
}

export function getFlagQuestionWithOptions(
  previousQuestionsArray: Array<number>
) {}
