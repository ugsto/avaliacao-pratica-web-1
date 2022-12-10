import { styled } from '@/stitches.theme';
import React from 'react';
import logo from '@/assets/logo-corinthians.png';
import { keyframes } from '@stitches/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faPen,
  faAnchorCircleExclamation,
  faAnchorCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

const Container = styled('main', {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '$red1',
  height: '100%',
  width: '100%',
});

const fromBottom = keyframes({
  '0%': {
    opacity: 0,
    maxHeight: 0,
    transform: 'translateY(100%)',
  },
  '100%': {
    opacity: 1,
    maxHeight: '100vh',
    transform: 'translateY(0)',
  },
});

const fromLeft = keyframes({
  '0%': {
    opacity: 0,
    maxWidth: 0,
    transform: 'translateX(-100%)',
  },
  '100%': {
    opacity: 1,
    maxWidth: '100vw',
    transform: 'translateX(0)',
  },
});

const GeneralInfoContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: '$red2',
  fontFamily: '$untitled',
  marginBottom: '$7',
  textAlign: 'center',
});

const InfoCard = styled('div', {
  display: 'inline-block',
  width: '$10',
  position: 'relative',
  boxShadow: '$card',
  padding: '$6',
  fontSize: '$5',
  fontFamily: '$untitled',
  animation: `${fromBottom} 1s`,
});

const InfoCardContent = styled('div', {
  padding: '$6',
  '& > img': {
    height: '$6',
  },
});

const InfoCardTitle = styled('h3', {
  fontSize: '$5',
  fontFamily: '$untitled',
  lineHeight: '$3',
  color: '$gray12',
});

const InfoCardText = styled('p', {
  color: '$gray11',
  marginTop: '$2',
  marginBottom: '$2',
});

const SpecificInfoContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: '$red3',
  fontFamily: '$untitled',
  marginBottom: '$7',
  textAlign: 'center',
});

const SpecificInfoCard = styled('div', {
  display: 'inline-block',
  width: '$10',
  position: 'relative',
  boxShadow: '$card',
  padding: '$6',
  fontSize: '$5',
  fontFamily: '$untitled',
  animation: `${fromLeft} 1s`,
  backgroundColor: '$red6',
});

const main: React.FunctionComponent = () => (
  <Container>
    <SpecificInfoContainer>
      <SpecificInfoCard>
        <InfoCardContent>
          <InfoCardTitle>Lorem Ipsum</InfoCardTitle>
          <InfoCardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </InfoCardText>
          <FontAwesomeIcon icon={faPen} />
          <FontAwesomeIcon icon={faAnchorCircleExclamation} />
        </InfoCardContent>
      </SpecificInfoCard>
      <SpecificInfoCard>
        <InfoCardContent>
          <InfoCardTitle>Lorem Ipsum</InfoCardTitle>
          <InfoCardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </InfoCardText>
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faAnchorCircleCheck} />
        </InfoCardContent>
      </SpecificInfoCard>
    </SpecificInfoContainer>
    <GeneralInfoContainer>
      <InfoCard>
        <InfoCardContent>
          <InfoCardTitle>Lorem Ipsum</InfoCardTitle>
          <InfoCardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </InfoCardText>
          <img src={logo as string}></img>
        </InfoCardContent>
      </InfoCard>
      <InfoCard>
        <InfoCardContent>
          <InfoCardTitle>Lorem Ipsum</InfoCardTitle>
          <InfoCardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </InfoCardText>
          <img src={logo as string}></img>
        </InfoCardContent>
      </InfoCard>
    </GeneralInfoContainer>
    <form>
      <h2>Una-se ao clube!</h2>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Telefone" />
      <input type="submit" />
    </form>
  </Container>
);

export default main;
