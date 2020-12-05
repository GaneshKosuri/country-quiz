import tw, { styled } from "twin.macro";

import {
  PoppinsWhite18Medium,
  PoppinsWhite24Medium,
} from "../../styleGuide/typos";

export const QuestionOptionContainer = styled.div`
  ${tw`rounded-12px p-15px flex items-center cursor-pointer border-2 border-solid border-indigo70 my-15px`}
  &:hover {
    ${tw`bg-seaBuckthorn border-seaBuckthorn`}
  }
`;

export const OptionNumber = styled(PoppinsWhite24Medium)`
  ${tw`leading-36px mr-46px text-indigo70`}
  ${QuestionOptionContainer}:hover & {
    ${tw`text-white`}
  }
`;

export const OptionContent = styled(PoppinsWhite18Medium)`
  ${tw`leading-27px text-indigo70`}
  ${QuestionOptionContainer}:hover & {
    ${tw`text-white`}
  }
`;
