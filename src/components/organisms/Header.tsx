'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';
import { Button } from '@/components/atoms';
import IconLogo from '@/components/atoms/icons/IconLogo';
import { LanguageSwitcher } from '@/components/molecules';

const Container = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  z-index: 50;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ $scrolled }) => ($scrolled ? '10px 2rem' : '1.25rem 2rem')};
  background: ${({ $scrolled }) =>
    $scrolled ? 'oklch(0% 0 0 / 0.6)' : 'transparent'};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? '1px solid oklch(100% 0 0 / 0.1)' : 'none'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'none')};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: all;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.25rem;
  justify-content: space-between;
  margin: 0 auto;
`;

function _Header() {
  const t = useTranslations('Header');
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    setScrolled(scrollTop > 0);
  }, []);

  useEffect(() => {
    handleScroll(); // Verificar posición inicial de scroll
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container $scrolled={scrolled}>
      <LogoWrapper href="/">
        <IconLogo size={'44px'} />
      </LogoWrapper>
      <ActionsWrapper>
        <Nav>
          <Button text={t('nav_section_about')} variant="link" />
          <Button text={t('nav_section_stack')} variant="link" />
          <Button text={t('nav_section_projects')} variant="link" />
          <Button text={t('nav_section_experience')} variant="link" />
          <Button text={t('nav_section_contact')} variant="link" />
        </Nav>
        <LanguageSwitcher />
        <Button text={t('button_contact')} />
      </ActionsWrapper>
    </Container>
  );
}

const HeaderMemo = React.memo(_Header);

export function Header() {
  return <HeaderMemo />;
}
