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
