import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  padding: ${({ $scrolled }) => ($scrolled ? '0.75rem 2rem' : '1.25rem 2rem')};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: all;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.25rem;
  justify-content: space-between;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
`;

function _Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Container $scrolled={scrolled}>
      <Nav></Nav>
    </Container>
  );
}

const HeaderMemo = React.memo(_Header);

export default function Header() {
  return <HeaderMemo />;
}
