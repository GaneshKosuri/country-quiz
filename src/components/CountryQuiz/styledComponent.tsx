import tw, { styled } from "twin.macro";

import {
  MontSerratWhite14SemiBold,
  PoppinsWhite36Bold,
} from "../../styleGuide/typos";

export const QuizComponentContainer = styled.div`
  ${tw`w-full flex justify-center items-center flex-col h-screen relative`}
  background-image: url('https://i.ibb.co/jH9Pn6D/background.png');
  background-size: cover;
  background-position-y: center;
  background-position-x: right;
`;

export const CopyRightsMessage = styled(MontSerratWhite14SemiBold)`
  ${tw`text-white absolute bottom-15px`}
`;

export const QuestionsContainer = styled.div`
  ${tw`flex flex-col w-auto`}
`;

export const CountryQuizTitle = styled(PoppinsWhite36Bold)`
  ${tw`leading-54px text-left`}
`;
