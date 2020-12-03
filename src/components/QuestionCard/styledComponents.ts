import tw, { styled } from "twin.macro";

import { PoppinsChambray24Bold } from "../../styleGuide/typos";

export const QuestionCardContainer = styled.div`
  ${tw`flex flex-col w-464px h-auto bg-white rounded-24px relative mt-10px p-32px`}
  height:500px
`;

export const UndrawAdventureIconContainer = styled.div`
  ${tw`absolute`}
  top: -70px;
  right: 0px;
`;

export const QuestionContainer = styled.div`
  ${tw`mt-36px flex flex-col items-start`}
  border:1px solid red
`;

export const QuestionTitle = styled(PoppinsChambray24Bold)`
  ${tw`leading-36px`}
`;
