import { styled } from '@/stitches.theme';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';

export interface NavMenuItem {
  title: string;
  href: string;
  target?: string;
}

interface NavMenuProps {
  items: NavMenuItem[];
}

const Container = styled(NavigationMenu.Root, {
  height: '100%',
});

const NavContainer = styled(NavigationMenu.List, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '$gray3',
  height: '$6',
  borderRadius: '$1',
});

const NavItem = styled(NavigationMenu.Item, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '$gray9',
  height: '60%',
  marginLeft: '$1',
  marginRight: '$1',
  borderRadius: '$1',

  '&:hover': {
    backgroundColor: '$gray10',
  },
});

const NavLink = styled(NavigationMenu.Link, {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  textDecoration: 'none',
  color: '$gray12',
  fontFamily: '$mono',
  paddingLeft: '$1',
  paddingRight: '$1',
});

const navMenu: React.FunctionComponent<NavMenuProps> = ({ ...props }) => {
  const { items } = props;

  return (
    <Container>
      <NavContainer>
        {items.map((item) => (
          <NavItem>
            <NavLink
              href={item.href}
              target={item.target !== undefined ? item.target : '_self'}
            >
              <span>{item.title}</span>
            </NavLink>
          </NavItem>
        ))}
      </NavContainer>
    </Container>
  );
};

export default navMenu;
