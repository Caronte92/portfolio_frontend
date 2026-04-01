'use client';

import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Button, Dropdown, Text, Pill, Link } from '@/components/atoms';
import { LanguageSwitcher } from '@/components/molecules';
import BaseLayout from '@/layouts/base';
import { Page } from '@/styles/home.styles';

const DEMO_OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
];

function DropdownDemo() {
  const [value, setValue] = React.useState('react');
  return (
    <Dropdown
      options={DEMO_OPTIONS}
      value={value}
      onChange={setValue}
      ariaLabel="Framework"
    />
  );
}

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size['4xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.neutral.white};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.colors.neutral.grey};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.neutral.black};
  border: 1px solid ${({ theme }) => theme.colors.neutral.black};
  border-radius: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size['2xl']};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.colors.accent.primary};
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ColorSwatch = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  align-items: center;
`;

const SwatchBox = styled.div<{ $color: string }>`
  width: 100%;
  height: 3rem;
  background: ${({ $color }) => $color};
  border: 1px solid ${({ theme }) => theme.colors.neutral.black};
  border-radius: 0.5rem;
`;

const SwatchLabel = styled.span`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.neutral.grey};
`;

const TypographySample = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Badge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.main.primary};
  background: ${({ theme }) => theme.colors.neutral.grey};
  border-radius: 0.375rem;
`;

const EnvBadge = styled(Badge)`
  color: ${({ theme }) => theme.colors.neutral.white};
  background: ${({ theme }) => theme.colors.accent.primary};
`;

function _TestPage() {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT ?? 'unknown';
  const theme = useTheme();

  return (
    <Page>
      <div>
        <Title>Design System Test</Title>
        <Subtitle>
          Visual validation of theme tokens — only visible in dev & pre.
          <EnvBadge style={{ marginLeft: '1rem' }}>{env}</EnvBadge>
        </Subtitle>
      </div>

      <Section>
        <SectionTitle>Main Palette</SectionTitle>
        <ColorGrid>
          <ColorSwatch key="primary" $color={theme.colors.main.primary}>
            <SwatchBox $color={theme.colors.main.primary} />
            <SwatchLabel>primary</SwatchLabel>
          </ColorSwatch>
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>Accent Palette</SectionTitle>
        <ColorGrid>
          <ColorSwatch key="primary" $color={theme.colors.accent.primary}>
            <SwatchBox $color={theme.colors.accent.primary} />
            <SwatchLabel>primary</SwatchLabel>
          </ColorSwatch>
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>Neutral Palette</SectionTitle>
        <ColorGrid>
          <ColorSwatch key="bg" $color={theme.colors.neutral.bg}>
            <SwatchBox $color={theme.colors.neutral.bg} />
            <SwatchLabel>bg</SwatchLabel>
          </ColorSwatch>
          <ColorSwatch key="white" $color={theme.colors.neutral.white}>
            <SwatchBox $color={theme.colors.neutral.white} />
            <SwatchLabel>white</SwatchLabel>
          </ColorSwatch>
          <ColorSwatch key="black" $color={theme.colors.neutral.black}>
            <SwatchBox $color={theme.colors.neutral.black} />
            <SwatchLabel>black</SwatchLabel>
          </ColorSwatch>
          <ColorSwatch key="grey" $color={theme.colors.neutral.grey}>
            <SwatchBox $color={theme.colors.neutral.grey} />
            <SwatchLabel>grey</SwatchLabel>
          </ColorSwatch>
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>Support Colors</SectionTitle>
        <ColorGrid>
          <ColorSwatch key="danger" $color={theme.colors.support.danger}>
            <SwatchBox $color={theme.colors.support.danger} />
            <SwatchLabel>danger</SwatchLabel>
          </ColorSwatch>
          <ColorSwatch key="error" $color={theme.colors.support.error}>
            <SwatchBox $color={theme.colors.support.error} />
            <SwatchLabel>error</SwatchLabel>
          </ColorSwatch>
          <ColorSwatch key="warning" $color={theme.colors.support.warning}>
            <SwatchBox $color={theme.colors.support.warning} />
            <SwatchLabel>warning</SwatchLabel>
          </ColorSwatch>
          <ColorSwatch key="success" $color={theme.colors.support.success}>
            <SwatchBox $color={theme.colors.support.success} />
            <SwatchLabel>success</SwatchLabel>
          </ColorSwatch>
          <ColorSwatch key="info" $color={theme.colors.support.info}>
            <SwatchBox $color={theme.colors.support.info} />
            <SwatchLabel>info</SwatchLabel>
          </ColorSwatch>
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>Typography</SectionTitle>
        <TypographySample>
          <span style={{ fontSize: '3.75rem', fontWeight: 800 }}>
            6xl / extrabold — Hero title
          </span>
          <span style={{ fontSize: '3rem', fontWeight: 700 }}>
            5xl / bold — Hero subtitle
          </span>
          <span style={{ fontSize: '2.25rem', fontWeight: 700 }}>
            4xl / bold — Section heading
          </span>
          <span style={{ fontSize: '1.875rem', fontWeight: 600 }}>
            3xl / semibold — Large heading
          </span>
          <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>
            2xl / semibold — Section subheading
          </span>
          <span style={{ fontSize: '1.25rem', fontWeight: 500 }}>
            xl / medium — Subtitle
          </span>
          <span style={{ fontSize: '1.125rem', fontWeight: 400 }}>
            lg / normal — Large body
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 400 }}>
            base / normal — Body text
          </span>
          <span style={{ fontSize: '0.875rem', fontWeight: 400 }}>
            sm / normal — Secondary text
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 400 }}>
            xs / normal — Caption
          </span>
        </TypographySample>
      </Section>

      <Section>
        <SectionTitle>Spacing</SectionTitle>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((step) => {
            const values: Record<number, string> = {
              1: '0.25rem',
              2: '0.5rem',
              3: '0.75rem',
              4: '1rem',
              5: '1.5rem',
              6: '2rem',
              7: '3rem',
              8: '4rem',
              9: '6rem',
              10: '8rem',
            };
            return (
              <div
                key={step}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <SwatchLabel style={{ minWidth: '6rem' }}>
                  spacing.{step}
                </SwatchLabel>
                <div
                  style={{
                    width: values[step],
                    height: '1rem',
                    background: theme.colors.main.primary,
                    borderRadius: '0.25rem',
                  }}
                />
                <SwatchLabel>{values[step]}</SwatchLabel>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionTitle>Buttons — Variants</SectionTitle>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Primary
            </SwatchLabel>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Button text="Small" variant="primary" size="sm" />
              <Button text="Medium" variant="primary" size="md" />
              <Button text="Large" variant="primary" size="lg" />
              <Button text="Extra large" variant="primary" size="xl" />
            </div>
          </div>
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Ghost
            </SwatchLabel>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Button text="Small" variant="ghost" size="sm" />
              <Button text="Medium" variant="ghost" size="md" />
              <Button text="Large" variant="ghost" size="lg" />
              <Button text="Extra large" variant="ghost" size="xl" />
            </div>
          </div>
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Link
            </SwatchLabel>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Button text="Small" variant="link" size="sm" />
              <Button text="Medium" variant="link" size="md" />
              <Button text="Large" variant="link" size="lg" />
              <Button text="Extra large" variant="link" size="xl" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Buttons — With Icons</SectionTitle>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Icon left
            </SwatchLabel>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Button
                text="Star"
                variant="primary"
                size="md"
                iconLeft={
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                }
              />
              <Button
                text="Star"
                variant="ghost"
                size="md"
                iconLeft={
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                }
              />
            </div>
          </div>
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Icon right
            </SwatchLabel>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Button
                text="Arrow"
                variant="primary"
                size="md"
                iconRight={
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
              <Button
                text="Arrow"
                variant="ghost"
                size="md"
                iconRight={
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Pills — Variants & Sizes</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Solid
            </SwatchLabel>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Pill label="Small" variant="solid" size="sm" />
              <Pill label="Medium" variant="solid" size="md" />
              <Pill label="Large" variant="solid" size="lg" />
            </div>
          </div>

          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Subtle
            </SwatchLabel>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Pill label="Small" variant="subtle" size="sm" />
              <Pill label="Medium" variant="subtle" size="md" />
              <Pill label="Large" variant="subtle" size="lg" />
            </div>
          </div>

          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Outline
            </SwatchLabel>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Pill label="Small" variant="outline" size="sm" />
              <Pill label="Medium" variant="outline" size="md" />
              <Pill label="Large" variant="outline" size="lg" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Text — Sizes</SectionTitle>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <Text as="h1" size="6xl" weight="extrabold">
            6xl extrabold
          </Text>
          <Text as="h1" size="5xl" weight="bold">
            5xl bold
          </Text>
          <Text as="h2" size="4xl" weight="bold">
            4xl bold
          </Text>
          <Text as="h2" size="3xl" weight="semibold">
            3xl semibold
          </Text>
          <Text as="h3" size="2xl" weight="semibold">
            2xl semibold
          </Text>
          <Text as="h4" size="xl" weight="medium">
            xl medium
          </Text>
          <Text as="h5" size="lg" weight="medium">
            lg medium
          </Text>
          <Text as="p" size="base">
            base normal
          </Text>
          <Text as="p" size="sm">
            sm normal
          </Text>
          <Text as="span" size="xs">
            xs normal
          </Text>
        </div>
      </Section>

      <Section>
        <SectionTitle>Text — Colors</SectionTitle>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <Text as="p" size="base" color="main.primary">
            main.primary
          </Text>
          <Text as="p" size="base" color="accent.primary">
            accent.primary
          </Text>
          <Text as="p" size="base" color="neutral.grey">
            neutral.grey
          </Text>
          <Text as="p" size="base" color="neutral.white">
            neutral.white
          </Text>
          <Text as="p" size="base" color="neutral.black">
            neutral.black
          </Text>
        </div>
      </Section>

      <Section>
        <SectionTitle>Text — Features</SectionTitle>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <Text as="p" size="base" weight="bold" lineHeight="tight">
            lineHeight tight — Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </Text>
          <Text as="p" size="base" lineHeight="relaxed">
            lineHeight relaxed — Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </Text>
          <Text as="p" size="base" align="center">
            align center
          </Text>
          <Text as="p" size="base" align="right">
            align right
          </Text>
          <div style={{ maxWidth: '200px' }}>
            <Text as="p" size="base" truncate>
              truncate — This text is way too long and will be cut off with an
              ellipsis
            </Text>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Links — Variants</SectionTitle>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Primary
            </SwatchLabel>
            <Link text="Live Demo" href="#" variant="primary" />
          </div>
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Muted
            </SwatchLabel>
            <Link text="Source" href="#" variant="muted" />
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Dropdown</SectionTitle>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Generic Dropdown
            </SwatchLabel>
            <DropdownDemo />
          </div>
          <div>
            <SwatchLabel style={{ display: 'block', marginBottom: '0.5rem' }}>
              Language Switcher (molecule)
            </SwatchLabel>
            <LanguageSwitcher />
          </div>
        </div>
      </Section>
    </Page>
  );
}

const TestPageMemo = React.memo(_TestPage);

export default function TestPage() {
  return (
    <BaseLayout>
      <TestPageMemo />
    </BaseLayout>
  );
}
