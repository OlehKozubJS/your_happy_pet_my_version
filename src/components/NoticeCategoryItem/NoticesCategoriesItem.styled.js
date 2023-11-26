import styled from '@emotion/styled';
import { theme } from 'utils/theme';
const { fonts, fontSizes, fontWeights, colors, radii } = theme;

const CategoryItem = styled.div`
  width: 288px;
  height: 456px;
  border-radius: 0px 0px 40px 40px;
  background: var(--, #fff);

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

const CategoryItemHeader = styled.div`
  position: relative;
`;

const CategoryItemFooter = styled.div`
  padding: 20px;
`;

const CategoryItemImage = styled.img`
  width: 100%;
  height: 288px;
`;

const CategoryOutput = styled.div``;

const AddButton = styled.button``;

const RemoveButton = styled.button``;

const PetInfoOutput = styled.div``;

const PetInfoOutputItem = styled.div``;

const TitleHeader = styled.h3`
  padding-block: none;
  color: var(--, #111);
  font-family: ${fonts.bold};
  font-size: 24px;
`;

const LearnMoreButton = styled.button`
  margin-top: 20px;
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: inherit;
  border-radius: 40px;
  border: 2px solid var(--unnamed, ${colors.blue});

  color: var(--unnamed, ${colors.blue});
  font-family: ${fonts.semiBold};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  :hover,
  :focus {
    background: ${colors.gradientBlue};
    color: #fef9f9;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;

export {
  CategoryItem,
  CategoryItemHeader,
  CategoryItemFooter,
  CategoryItemImage,
  CategoryOutput,
  AddButton,
  RemoveButton,
  PetInfoOutput,
  PetInfoOutputItem,
  TitleHeader,
  LearnMoreButton,
};
