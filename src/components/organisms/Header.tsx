'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import * as navigation from 'next/navigation';
import styled from 'styled-components';
import { Button } from '@/components/atoms/Button';
import { IconClose, IconKebab, IconLogo } from '@/components/atoms/icons/';
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher';
import type { Locale } from '../../../i18n-config';

const Container = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  padding: ${({ $scrolled }) => ($scrolled ? '10px 2rem' : '1.25rem 2rem')};
  background: ${({ $scrolled, theme }) =>
    $scrolled
      ? theme.components.header.scrolled.background
      : theme.components.header.background};
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled
      ? `1px solid ${theme.components.header.scrolled.borderColor}`
      : 'none'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'none')};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: all;
`;

const HeaderWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  max-width: 90rem;
  margin: 0 auto;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2.75rem;
    height: 2.75rem;
  }
`;

const IconKebabWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const ActionsWrapperMobile = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: none;
  gap: 1.25rem;
  justify-content: space-between;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const MobileNavLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  background: ${({ theme }) => theme.colors.neutral.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.grey};
  border-radius: 0 0 0.75rem 0.75rem;
  box-shadow: 0 4px 24px rgb(0 0 0 / 40%);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $scrolled }) => ($scrolled ? '10px 2rem' : '1.25rem 2rem')};
`;

const MobileMenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 1.5rem;
`;

const MobileNavLink = styled.button`
  padding: 0.75rem 0;
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: left;
  cursor: pointer;
  background: none;
  border: none;
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const MobileLanguageSwitcher = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.75rem;
`;

const LanguagePill = styled.button<{ $active: boolean }>`
  padding: 0.375rem 0.875rem;
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.neutral.white : theme.colors.neutral.grey};
  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 9999px;
  transition: all 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.grey};
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;
  background: none;
  border: none;
  transition: all 0.15s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.grey};
  }
`;

const LANGUAGES = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
  { value: 'cat', label: 'CAT' },
] as const;

const NAV_SECTIONS = [
  { id: 'projects', labelKey: 'nav_section_projects' },
  { id: 'stack', labelKey: 'nav_section_stack' },
  { id: 'aboutMe', labelKey: 'nav_section_about_me' },
  { id: 'contact', labelKey: 'nav_section_contact' },
] as const;

function _Header() {
  const t = useTranslations('Header');
  const router = navigation.useRouter();
  const pathname = navigation.usePathname();
  const params = navigation.useParams();
  const currentLang = (params.lang as Locale) ?? 'en';

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const setHeaderHeightVar = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerElement.offsetHeight}px`
      );
    };

    setHeaderHeightVar();
    const resizeObserver = new ResizeObserver(setHeaderHeightVar);
    resizeObserver.observe(headerElement);
    return () => resizeObserver.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    setScrolled(scrollTop > 0);
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleLanguageChange = useCallback(
    (newLang: string) => {
      const segments = pathname.split('/');
      segments[1] = newLang;
      router.push(segments.join('/'));
      setMobileMenuOpen(false);
    },
    [pathname, router]
  );

  const handleNavClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleSectionNavClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Container ref={headerRef} $scrolled={scrolled}>
        <HeaderWrapper>
          <LogoWrapper href="/">
            <IconLogo size="100%" />
          </LogoWrapper>
          <Nav>
            {NAV_SECTIONS.map(({ id, labelKey }) => (
              <Button
                key={id}
                text={t(labelKey)}
                variant="link"
                onClick={() => handleSectionNavClick(id)}
              />
            ))}
          </Nav>
          <ActionsWrapper>
            <LanguageSwitcher />
          </ActionsWrapper>
          <ActionsWrapperMobile>
            <IconKebabWrapper onClick={toggleMobileMenu}>
              <IconKebab size="100%" />
            </IconKebabWrapper>
          </ActionsWrapperMobile>
        </HeaderWrapper>
      </Container>

      <MobileMenuOverlay $isOpen={mobileMenuOpen}>
        <MobileMenuHeader $scrolled={scrolled}>
          <LogoWrapper href="/" onClick={handleNavClick}>
            <IconLogo size="100%" />
          </LogoWrapper>
          <ActionsWrapperMobile>
            <CloseButton onClick={toggleMobileMenu} aria-label="Close menu">
              <IconClose size="100%" />
            </CloseButton>
          </ActionsWrapperMobile>
        </MobileMenuHeader>
        <MobileMenuContent>
          <MobileNavLinksWrapper>
            {NAV_SECTIONS.map(({ id, labelKey }) => (
              <MobileNavLink key={id} onClick={() => handleSectionNavClick(id)}>
                {t(labelKey)}
              </MobileNavLink>
            ))}
          </MobileNavLinksWrapper>
          <MobileLanguageSwitcher>
            {LANGUAGES.map((lang) => (
              <LanguagePill
                key={lang.value}
                $active={currentLang === lang.value}
                onClick={() => handleLanguageChange(lang.value)}
              >
                {lang.label}
              </LanguagePill>
            ))}
          </MobileLanguageSwitcher>
        </MobileMenuContent>
      </MobileMenuOverlay>
    </>
  );
}

const HeaderMemo = React.memo(_Header);

export function Header() {
  return <HeaderMemo />;
}
