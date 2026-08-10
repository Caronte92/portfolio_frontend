'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { IconChevron } from '@/components/atoms/icons';

type DropdownPreviewState = 'hover' | 'focus' | 'active' | 'open';

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const Trigger = styled.button<{ $previewState?: DropdownPreviewState }>`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.62rem 1rem;
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.size.bodySmall.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: nowrap;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.bg.primary};
  border: 1px solid #64748b80;
  border-radius: 0.75rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) =>
      theme.components.dropdown.trigger.hover.background};
    border-color: ${({ theme }) =>
      theme.components.dropdown.trigger.hover.borderColor};
  }

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) =>
      theme.components.dropdown.trigger.focus.borderColor};
  }

  &:active {
    background: ${({ theme }) =>
      theme.components.dropdown.trigger.active.background};
    border-color: ${({ theme }) =>
      theme.components.dropdown.trigger.active.borderColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${({ theme, $previewState }) =>
    $previewState === 'hover' &&
    css`
      color: ${theme.colors.text.primary};
      background: ${theme.components.dropdown.trigger.hover.background};
      border-color: ${theme.components.dropdown.trigger.hover.borderColor};
    `}

  ${({ theme, $previewState }) =>
    (($previewState === 'focus' || $previewState === 'open') &&
      css`
        color: ${theme.components.dropdown.trigger.focus.color};
        border-color: ${theme.components.dropdown.trigger.focus.borderColor};
      `) ||
    undefined}

  ${({ theme, $previewState }) =>
    $previewState === 'active' &&
    css`
      color: ${theme.components.dropdown.trigger.active.color};
      background: ${theme.components.dropdown.trigger.active.background};
      border-color: ${theme.components.dropdown.trigger.active.borderColor};
    `}

  & > svg:first-child {
    flex-shrink: 0;
  }

  & > svg:last-child {
    flex-shrink: 0;
    width: 0.75rem;
    height: 0.75rem;
    transition: transform 0.2s ease;
  }
`;

const Menu = styled.ul<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0;
  z-index: 50;
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 100%;
  padding: 0.25rem;
  margin: 0;
  list-style: none;
  background: ${({ theme }) => theme.colors.bg.primary};
  border: 1px solid #64748b80;
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.components.dropdown.menu.shadow};
`;

const MenuItem = styled.li<{ $active: boolean }>`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme }) => theme.font.size.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme, $active }) =>
    $active
      ? theme.components.dropdown.item.active.color
      : theme.components.dropdown.item.color};
  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  cursor: pointer;
  border-radius: 0.5rem;
  transition:
    color 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.components.dropdown.item.hover.color};
    background: ${({ theme }) =>
      theme.components.dropdown.item.hover.background};
  }
`;

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
  triggerIcon?: React.ReactNode;
  disabled?: boolean;
  /** Forces a pseudo-state visually, for style-guide swatches only. */
  previewState?: DropdownPreviewState;
}

const _Dropdown = ({
  options,
  value,
  onChange,
  ariaLabel,
  triggerIcon,
  disabled = false,
  previewState,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOpen = open || previewState === 'open';

  const activeOption = options.find((o) => o.value === value);
  const activeLabel = activeOption?.label ?? value;

  const handleSelect = useCallback(
    (optionValue: string) => {
      onChange(optionValue);
      setOpen(false);
    },
    [onChange]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === 'Escape') {
        setOpen(false);
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    },
    [disabled]
  );

  return (
    <Container ref={wrapperRef}>
      <Trigger
        type="button"
        disabled={disabled}
        $previewState={previewState}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        {triggerIcon}
        {activeLabel}
        <IconChevron
          stroke="oklch(0.5544 0.0407 257.42 / 50.2%)"
          open={isOpen}
        />
      </Trigger>
      <Menu $open={isOpen} role="listbox" aria-label={ariaLabel}>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            $active={option.value === value}
            role="option"
            aria-selected={option.value === value}
            onClick={() => handleSelect(option.value)}
          >
            {option.icon}
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export const Dropdown = React.memo(_Dropdown);
