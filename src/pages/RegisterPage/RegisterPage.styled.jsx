import styled from 'styled-components';
import desktop_1x from '../../images/background/bgdesktop@1x.png';
import desktop_2x from '../../images/background/bgdesktop@2x.png';
import tablet_1x from '../../images/background/bgtablet@1x.png';
import tablet_2x from '../../images/background/bgtablet@2x.png';
import mobile_1x from '../../images/background/bgmobile@1x.png';
import mobile_2x from '../../images/background/bgmobile@2x.png';

export const RegistrationPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('${desktop_1x}');

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${desktop_2x}');
  }

  @media screen and (max-width: 1279px) {
    background-image: url('${tablet_1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${tablet_2x}');
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 44px;
    background-image: url('${mobile_1x}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${mobile_2x}');
    }
  }
  `;

export const RegistrationFormWrapper = styled.div`
  padding: 60px 75px;
  width: 608px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    padding: 40px 12px;
    max-width: 280px;

    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
  }
`;
