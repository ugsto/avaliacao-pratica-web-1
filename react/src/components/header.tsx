import React from 'react';
import logo from '@/assets/logo-corinthians.png';
import { styled } from '@/stitches.theme';
import NavMenu, { NavMenuItem } from './nav-menu';

const navItems: NavMenuItem[] = [
  {
    title: 'Oficial Website',
    href: 'https://www.corinthians.com.br',
    target: '_blank',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/ugsto/ugsto',
    target: '_blank',
  },
];

const Container = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  padding: '$3',
  backgroundColor: '$gray2',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& > a > img': {
    height: '$6',
  },
});

const header: React.FunctionComponent = () => (
  <Container>
    <a href="/">
      <img src={logo as string}></img>
    </a>
    <NavMenu items={navItems} />
  </Container>
);

export default header;
