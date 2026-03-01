'use client';

import React from 'react';
import styled from 'styled-components';
import { Button, Dropdown, Text, Pill, Link } from '@/components/atoms';
import { LanguageSwitcher } from '@/components/molecules';
import BaseLayout from '@/layouts/base';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  min-height: 100vh;
  padding: 6.25rem ${({ theme }) => theme.spacing[8]}
    ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size['4xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.brand};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size['2xl']};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.colors.accentLabel};
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
`;

const SwatchLabel = styled.span`
  font-family: ${({ theme }) => theme.font.family.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};
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
  color: ${({ theme }) => theme.colors.accentText};
  background: ${({ theme }) => theme.colors.brandSubtle};
  border-radius: 0.375rem;
`;

const EnvBadge = styled(Badge)`
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.brand};
`;

interface PaletteEntry {
  label: string;
  value: string;
}

function getPaletteEntries(
  palette: Record<number, string>,
  prefix: string
): PaletteEntry[] {
  return Object.entries(palette).map(([step, value]) => ({
    label: `${prefix}.${step}`,
    value,
  }));
}

function _TestPage() {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT ?? 'unknown';

  return (
    <Container>
      <div>
        <Title>Design System Test</Title>
        <Subtitle>
          Visual validation of theme tokens — only visible in dev & pre.
          <EnvBadge style={{ marginLeft: '1rem' }}>{env}</EnvBadge>
        </Subtitle>
      </div>

      <Section>
        <SectionTitle>Primary Palette</SectionTitle>
        <ColorGrid>
          {getPaletteEntries(
            {
              50: 'oklch(0.98 0.01 308)',
              100: 'oklch(0.90 0.06 307)',
              200: 'oklch(0.83 0.11 306)',
              300: 'oklch(0.72 0.18 306)',
              400: 'oklch(0.63 0.23 304)',
              500: 'oklch(0.54 0.25 293)',
              600: 'oklch(0.49 0.24 293)',
              700: 'oklch(0.43 0.21 293)',
              800: 'oklch(0.38 0.18 294)',
              900: 'oklch(0.29 0.14 303)',
              950: 'oklch(0.28 0.14 291)',
            },
            'primary'
          ).map(({ label, value }) => (
            <ColorSwatch key={label} $color={value}>
              <SwatchBox $color={value} />
              <SwatchLabel>{label}</SwatchLabel>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>Neutral Palette</SectionTitle>
        <ColorGrid>
          {getPaletteEntries(
            {
              50: 'oklch(0.98 0.009 286)',
              100: 'oklch(0.91 0.02 286)',
              200: 'oklch(0.82 0.03 286)',
              300: 'oklch(0.74 0.03 286)',
              400: 'oklch(0.64 0.05 285)',
              500: 'oklch(0.49 0.04 285)',
              600: 'oklch(0.30 0.05 283)',
              700: 'oklch(0.23 0.04 283)',
              800: 'oklch(0.19 0.02 284)',
              900: 'oklch(0.17 0.02 284)',
              950: 'oklch(0.14 0.02 284)',
            },
            'neutral'
          ).map(({ label, value }) => (
            <ColorSwatch key={label} $color={value}>
              <SwatchBox $color={value} />
              <SwatchLabel>{label}</SwatchLabel>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>Accent Palette</SectionTitle>
        <ColorGrid>
          {getPaletteEntries(
            {
              50: 'oklch(0.98 0.02 201)',
              100: 'oklch(0.96 0.04 203)',
              200: 'oklch(0.92 0.08 205)',
              300: 'oklch(0.87 0.12 207)',
              400: 'oklch(0.80 0.13 212)',
              500: 'oklch(0.71 0.13 215)',
              600: 'oklch(0.61 0.11 222)',
              700: 'oklch(0.52 0.09 223)',
              800: 'oklch(0.45 0.08 224)',
              900: 'oklch(0.40 0.07 227)',
              950: 'oklch(0.30 0.05 230)',
            },
            'accent'
          ).map(({ label, value }) => (
            <ColorSwatch key={label} $color={value}>
              <SwatchBox $color={value} />
              <SwatchLabel>{label}</SwatchLabel>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </Section>

      <Section>
        <SectionTitle>Semantic Colors</SectionTitle>
        <ColorGrid>
          {[
            { label: 'background', value: 'oklch(0.14 0.02 284)' },
            { label: 'surface', value: 'oklch(0.17 0.02 284)' },
            { label: 'surfaceHover', value: 'oklch(0.19 0.02 284)' },
            { label: 'border', value: 'oklch(0.23 0.04 283)' },
            { label: 'textPrimary', value: 'oklch(0.98 0.009 286)' },
            { label: 'textSecondary', value: 'oklch(0.74 0.03 286)' },
            { label: 'textMuted', value: 'oklch(0.49 0.04 285)' },
            { label: 'brand', value: 'oklch(0.54 0.25 293)' },
            { label: 'brandHover', value: 'oklch(0.63 0.23 304)' },
            { label: 'brandSubtle', value: 'oklch(0.28 0.14 291)' },
            { label: 'accentLabel', value: 'oklch(0.80 0.13 212)' },
            { label: 'accentText', value: 'oklch(0.87 0.12 207)' },
          ].map(({ label, value }) => (
            <ColorSwatch key={label} $color={value}>
              <SwatchBox $color={value} />
              <SwatchLabel>{label}</SwatchLabel>
            </ColorSwatch>
          ))}
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
          {[1, 2, 3, 4, 6, 8, 12, 16, 24, 32].map((step) => {
            const values: Record<number, string> = {
              1: '0.25rem',
              2: '0.5rem',
              3: '0.75rem',
              4: '1rem',
              6: '1.5rem',
              8: '2rem',
              12: '3rem',
              16: '4rem',
              24: '6rem',
              32: '8rem',
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
                    background: 'oklch(0.54 0.25 293)',
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
          <Text as="p" size="base" color="textPrimary">
            textPrimary
          </Text>
          <Text as="p" size="base" color="textSecondary">
            textSecondary
          </Text>
          <Text as="p" size="base" color="textMuted">
            textMuted
          </Text>
          <Text as="p" size="base" color="brand">
            brand
          </Text>
          <Text as="p" size="base" color="accentText">
            accentText
          </Text>
          <Text as="p" size="base" color="accentLabel">
            accentLabel
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
    </Container>
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
