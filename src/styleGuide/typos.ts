import tw, { styled } from "twin.macro";

export const BaseMontSerrat = styled.span`
  ${tw`font-montSerrat`}
`;

export const BasePoppins = styled.span`
  ${tw`font-poppins`}
`;

export const BasePoppinsBold = styled(BasePoppins)`
  ${tw`font-bold`}
`;

export const BasePoppinsSemiBold = styled(BasePoppins)`
  ${tw`font-semibold`}
`;

export const BasePoppinsMedium = styled(BasePoppins)`
  ${tw`font-medium`}
`;

export const MontSerratWhite14SemiBold = styled(BaseMontSerrat)`
  ${tw`font-semibold text-14px text-white`}
`;

export const PoppinsWhite36Bold = styled(BasePoppinsBold)`
  ${tw`text-36px text-white`}
`;

export const PoppinsChambray24Bold = styled(BasePoppinsBold)`
  ${tw`text-24px text-chambray`}
`;

export const PoppinsWhite18Bold = styled(BasePoppinsBold)`
  ${tw`text-white text-18px`}
`;

export const PoppinsCello48Bold = styled(BasePoppinsBold)`
  ${tw`text-cello text-48px`}
`;

export const PoppinsCello18Normal = styled(BasePoppins)`
  ${tw`text-18px text-cello`}
`;

export const PoppinsSilverTree32Bold = styled(BasePoppinsBold)`
  ${tw`text-32px text-silverTree`}
`;

export const PoppinsCello18SemiBold = styled(BasePoppinsSemiBold)`
  ${tw`text-cello text-18px`}
`;

export const PoppinsWhite24Medium = styled(BasePoppinsMedium)`
  ${tw`text-white text-24px`}
`;

export const PoppinsWhite18Medium = styled(BasePoppinsMedium)`
  ${tw`text-white text-18px`}
`;
