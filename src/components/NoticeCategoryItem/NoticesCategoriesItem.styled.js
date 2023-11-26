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
  width: 100%;
  height: 288px;
`;

const CategoryItemFooter = styled.div`
  padding: 20px;
`;

const CategoryItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 288px;
`;

const CategoryOutput = styled.div`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  width: 126px;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: var(--, #111);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: ${fonts.medium};
  line-height: normal;

  border-radius: 0px 16px 16px 0px;
  background: var(--blue-light, ${colors.blue_light});
`;

const AddButton = styled.button`
  position: absolute;
  top: 16px;
  right: 12px;

  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border: none;
  border-radius: ${radii.round};
  background: var(--blue-light, ${colors.blue_light});
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 64px;
  right: 12px;

  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border: none;
  border-radius: ${radii.round};
  background: var(--blue-light, ${colors.blue_light});
`;

const PetInfoOutput = styled.div`
  position: absolute;
  top: 248px;
  left: 0;

  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const PetInfoOutputItem = styled.div`
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 16px;
  background: #cce4fb;
`;

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
