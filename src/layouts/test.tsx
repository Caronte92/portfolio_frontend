'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import styled, { useTheme } from 'styled-components';
import { Button } from '@/components/atoms/Button';
import { Label } from '@/components/atoms/Label';
import { Link } from '@/components/atoms/Link';
import { Tag } from '@/components/atoms/Tag';
import { TechBadge } from '@/components/atoms/TechBadge';
import IconLanguage from '@/components/atoms/icons/IconLanguage';
import { Dropdown, DropdownOption } from '@/components/molecules/Dropdown';
import { SocialLink } from '@/components/molecules/SocialLink';
import { ProjectCard } from '@/components/organisms/ProjectCard';
import { TechCard } from '@/components/organisms/TechCard';
import { PageTest } from '@/styles/home.styles';
import type { spacing } from '@/styles/spacing';

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
  margin-bottom: ${({ theme }) => theme.spacing[40]};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.display.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: ${({ theme }) => theme.font.size.display.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.h4.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.h4.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Divider = styled.div<{ $color: string }>`
  border-bottom: 1px solid
    ${({ $color }) => `color-mix(in oklch, ${$color} 20%, transparent)`};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.body.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.body.lineHeight};
  color: ${({ theme }) => theme.colors.text.muted};
`;

const BodySections = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]};
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[32]};
  padding: ${({ theme }) => theme.spacing[40]};
  border: 1px solid oklch(100% 0 0deg / 6%);
  border-radius: 1rem;
`;

const SectionName = styled.p`
  font-size: ${({ theme }) => theme.font.size.h2.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.h2.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SectionContainer = styled.div<{
  $isColumn?: boolean;
  $alignment?: string;
}>`
  display: flex;
  flex-direction: ${({ $isColumn }) => ($isColumn ? 'column' : 'row')};
  gap: ${({ theme }) => theme.spacing[16]};
  align-items: ${({ $alignment }) => (!$alignment ? `flex-start` : $alignment)};
  width: fit-content;
`;

const ColorSwatch = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const ColorBox = styled.div<{ $color: string }>`
  width: 4rem;
  height: 4rem;
  background-color: ${({ $color }) => $color};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  border-radius: 0.5rem;
`;

const ItemName = styled.label`
  font-size: ${({ theme }) => theme.font.size.tag.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.tag.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const UnitTag = styled.label<{ $width: string }>`
  width: ${({ $width }) => $width};
  font-size: ${({ theme }) => theme.font.size.tag.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.tag.lineHeight};
  color: ${({ theme }) => theme.colors.text.muted};
`;

const TextContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[24]};
  align-items: center;
  justify-content: center;
`;

const DisplayText = styled.p`
  font-size: ${({ theme }) => theme.font.size.display.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: ${({ theme }) => theme.font.size.display.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const H1Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.h1.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.h1.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const H2Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.h2.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.h2.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const H3Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.h3.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.h3.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const H4Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.h4.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.font.size.h4.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const BodyLargeText = styled.p`
  font-size: ${({ theme }) => theme.font.size.bodyLarge.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.bodyLarge.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const BodyText = styled.p`
  font-size: ${({ theme }) => theme.font.size.body.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.body.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const BodySmallText = styled.p`
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.bodySmall.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CaptionText = styled.p`
  font-size: ${({ theme }) => theme.font.size.caption.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.caption.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TagText = styled.p`
  font-size: ${({ theme }) => theme.font.size.tag.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: ${({ theme }) => theme.font.size.tag.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SpaceSwatch = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: center;
`;

const SpaceBox = styled.div<{ $height: keyof typeof spacing }>`
  width: 2rem;
  height: ${({ theme, $height }) => theme.spacing[$height]};
  background: ${({ theme }) => theme.colors.accent.cyan};
  border-radius: 0.25rem;
`;

function _TestPage() {
  const t = useTranslations('TestPage');
  const theme = useTheme();

  const colors = [
    {
      color: theme.colors.bg.primary,
      name: `bg.primary`,
      code: `#090910`,
    },
    {
      color: theme.colors.bg.surface,
      name: `bg.surface`,
      code: `#121224`,
    },
    {
      color: theme.colors.accent.cyan,
      name: `accent.cyan`,
      code: `#22D3EE`,
    },
    {
      color: theme.colors.accent.purple,
      name: `accent.purple`,
      code: `#AE87EF`,
    },
    {
      color: theme.colors.text.primary,
      name: `text.primary`,
      code: `#FFFFFF`,
    },
    {
      color: theme.colors.text.secondary,
      name: `text.secondary`,
      code: `#D9D9D9`,
    },
    {
      color: theme.colors.text.muted,
      name: `text.muted`,
      code: `#64748B`,
    },
    {
      color: theme.colors.text.dark,
      name: `text.dark`,
      code: `#000000`,
    },
  ];

  const spaces: (keyof typeof spacing)[] = [
    4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80,
  ];

  const OPTIONS: DropdownOption[] = [
    { value: 'en', label: 'EN' },
    { value: 'es', label: 'ES' },
    { value: 'cat', label: 'CAT' },
  ];

  return (
    <PageTest>
      <SectionHeader>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Description>{t('description')}</Description>
        <Divider $color={theme.colors.accent.cyan} />
      </SectionHeader>
      <BodySections>
        <HeaderSection>
          <TechBadge text={t('atoms_title')} />
          <Description>{t('atoms_description')}</Description>
          <Divider $color={theme.colors.text.secondary} />
        </HeaderSection>
        <Section>
          <SectionName>{t('colors_title')}</SectionName>
          <SectionContainer>
            {colors.map(({ color, name, code }) => (
              <ColorSwatch key={name}>
                <ColorBox $color={color} />
                <ItemName>{name}</ItemName>
                <UnitTag $width="auto">{code}</UnitTag>
              </ColorSwatch>
            ))}
          </SectionContainer>
        </Section>
        <Section>
          <SectionName>{t('typography_title')}</SectionName>
          <SectionContainer $isColumn={true}>
            <TextContainer>
              <UnitTag $width="7.5rem">{t('typography_display_label')}</UnitTag>
              <DisplayText>{t('typography_display_sample')}</DisplayText>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">{t('typography_h1_label')}</UnitTag>
              <H1Text>{t('typography_h1_sample')}</H1Text>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">{t('typography_h2_label')}</UnitTag>
              <H2Text>{t('typography_h2_sample')}</H2Text>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">{t('typography_h3_label')}</UnitTag>
              <H3Text>{t('typography_h3_sample')}</H3Text>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">{t('typography_h4_label')}</UnitTag>
              <H4Text>{t('typography_h4_sample')}</H4Text>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">
                {t('typography_body_large_label')}
              </UnitTag>
              <BodyLargeText>{t('typography_body_large_sample')}</BodyLargeText>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">{t('typography_body_label')}</UnitTag>
              <BodyText>{t('typography_body_sample')}</BodyText>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">
                {t('typography_body_small_label')}
              </UnitTag>
              <BodySmallText>{t('typography_body_small_sample')}</BodySmallText>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">{t('typography_caption_label')}</UnitTag>
              <CaptionText>{t('typography_caption_sample')}</CaptionText>
            </TextContainer>
            <TextContainer>
              <UnitTag $width="7.5rem">{t('typography_tag_label')}</UnitTag>
              <TagText>{t('typography_tag_sample')}</TagText>
            </TextContainer>
          </SectionContainer>
        </Section>
        <Section>
          <SectionName>{t('spacing_title')}</SectionName>
          <SectionContainer $alignment="baseline">
            {spaces.map((space, index) => (
              <SpaceSwatch key={index}>
                <SpaceBox $height={space} />
                <UnitTag $width="auto">{space}</UnitTag>
              </SpaceSwatch>
            ))}
          </SectionContainer>
        </Section>
      </BodySections>
      <BodySections>
        <HeaderSection>
          <TechBadge text={t('molecules_title')} />
          <Description>{t('molecules_description')}</Description>
          <Divider $color={theme.colors.text.secondary} />
        </HeaderSection>
        <Section>
          <SectionContainer>
            <SpaceSwatch>
              <UnitTag $width="auto">
                {t('molecules_button_primary_label')}
              </UnitTag>
              <Button text={t('molecules_button_sample')} disabled={false} />
            </SpaceSwatch>
            <SpaceSwatch>
              <UnitTag $width="auto">
                {t('molecules_button_ghost_label')}
              </UnitTag>
              <Button
                text={t('molecules_button_sample')}
                variant="ghost"
                disabled={false}
              />
            </SpaceSwatch>
            <SpaceSwatch>
              <UnitTag $width="auto">{t('molecules_techbadge_label')}</UnitTag>
              <TechBadge text={t('molecules_techbadge_sample')} />
            </SpaceSwatch>
            <SpaceSwatch>
              <UnitTag $width="auto">{t('molecules_label_label')}</UnitTag>
              <Label text={t('molecules_label_sample')} />
            </SpaceSwatch>
            <SpaceSwatch>
              <UnitTag $width="auto">{t('molecules_sociallink_label')}</UnitTag>
              <SocialLink
                icon={
                  <IconLanguage
                    size={theme.icons.sm}
                    ariaLabel={t('molecules_language_selected_aria_label')}
                    stroke={theme.colors.accent.purple}
                  />
                }
                text={t('molecules_sociallink_sample')}
              />
            </SpaceSwatch>
            <SpaceSwatch>
              <UnitTag $width="auto">{t('molecules_dropdown_label')}</UnitTag>
              <Dropdown
                options={OPTIONS}
                value={'es'}
                onChange={(e) => console.log(e)}
                ariaLabel={t('molecules_dropdown_aria_label')}
                triggerIcon={
                  <IconLanguage
                    size="1.125rem"
                    ariaLabel={t('molecules_language_selected_aria_label')}
                  />
                }
              />
            </SpaceSwatch>
            <SpaceSwatch>
              <UnitTag $width="auto">{t('molecules_tag_label')}</UnitTag>
              <Tag text={t('molecules_tag_sample')} />
            </SpaceSwatch>
            <SpaceSwatch>
              <UnitTag $width="auto">{t('molecules_link_label')}</UnitTag>
              <Link text={t('molecules_link_sample')} href={'/es/test'} />
            </SpaceSwatch>
          </SectionContainer>
        </Section>
      </BodySections>
      <BodySections>
        <HeaderSection>
          <TechBadge text={t('organisms_title')} />
          <Description>{t('organisms_description')}</Description>
          <Divider $color={theme.colors.text.secondary} />
        </HeaderSection>
        <Section>
          <UnitTag $width="auto">{t('organisms_projectcard_label')}</UnitTag>
          <ProjectCard
            headerImage={''}
            altImage={''}
            projectName={t('organisms_projectcard_name')}
            projectDescription={t('organisms_projectcard_description')}
            techBadges={['React.js', '.NET Core', 'AWS']}
            linkHref={'/es/test'}
          />
          <TechCard title="test" stackPills={['React.js', '.NET']} />
        </Section>
      </BodySections>
    </PageTest>
  );
}

const TestPageMemo = React.memo(_TestPage);

export default function TestPage() {
  return <TestPageMemo />;
}
