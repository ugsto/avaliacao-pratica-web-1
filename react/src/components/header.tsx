import React from 'react';
import { styled } from '@/stitches.theme';
import logo from '@/assets/logo-corinthians.png';

const Container = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  padding: '$3',
  backgroundColor: '$gray2',
});

export default function header() {
  return (
    <Container>
      <img src={logo as string} height={64}></img>
    </Container>
  );
}
