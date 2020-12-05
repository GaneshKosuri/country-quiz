import tw, { styled } from "twin.macro";

import Button from "../../Common/components/Button";

import {
  PoppinsCello18Normal,
  PoppinsCello18SemiBold,
  PoppinsCello48Bold,
  PoppinsSilverTree32Bold,
} from "../../styleGuide/typos";

export const ResultCardContainer = styled.div`
  ${tw`w-464px h-542px bg-white rounded-24px flex flex-col justify-between items-center p-32px box-border`}
`;

export const ResultContentContainer = styled.div`
  ${tw`flex flex-col`}
`;

export const ResultTitle = styled(PoppinsCello48Bold)`
  ${tw`leading-72px`}
`;

export const ResultDescription = styled(PoppinsCello18Normal)`
  ${tw`leading-27px`}
`;

export const Score = styled(PoppinsSilverTree32Bold)``;

export const TryAgainButton = styled(Button)`
  ${tw`border-2 border-solid bg-white border-cello flex justify-center p-18px`}
`;

export const TryAgainText = styled(PoppinsCello18SemiBold)``;
