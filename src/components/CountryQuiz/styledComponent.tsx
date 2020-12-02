import tw, { styled } from "twin.macro";

import { MontSerratWhite14SemiBold } from "../../styleGuide/typos";

export const QuizComponentContainer = styled.div`
  ${tw`w-full flex flex-col h-screen`}
  background-image: url('../../assets/background.png');
  background-size: cover;
  background-position-y: center;
  background-position-x: right;
`;

export const CopyRightsMessage = styled(MontSerratWhite14SemiBold)`
  ${tw`bg-white`}
`;
