'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const Trigger = styled.button`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  color: ${({ theme }) => theme.components.dropdown.trigger.color};
  white-space: nowrap;
  cursor: pointer;
  background: ${({ theme }) => theme.components.dropdown.trigger.background};
  border: 1px solid
    ${({ theme }) => theme.components.dropdown.trigger.borderColor};
  border-radius: 0.75rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.components.dropdown.trigger.hover.color};
    background: ${({ theme }) =>
      theme.components.dropdown.trigger.hover.background};
    border-color: ${({ theme }) =>
      theme.components.dropdown.trigger.hover.borderColor};
  }

  & > svg:last-child {
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
  background: ${({ theme }) => theme.components.dropdown.menu.background};
  border: 1px solid ${({ theme }) => theme.components.dropdown.menu.borderColor};
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.components.dropdown.menu.shadow};
`;

const MenuItem = styled.li<{ $active: boolean }>`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-family: ${({ theme }) => theme.font.family.sans};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme, $active }) =>
    $active
      ? theme.components.dropdown.item.active.color
      : theme.components.dropdown.item.color};
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

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
  >
    <path d="M3 4.5 L6 7.5 L9 4.5" />
  </svg>
);

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
}

const _Dropdown = ({ options, value, onChange, ariaLabel }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Trigger
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        {activeOption?.icon}
        {activeLabel}
        <ChevronIcon open={open} />
      </Trigger>
      <Menu $open={open} role="listbox" aria-label={ariaLabel}>
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
    </Wrapper>
  );
};

export const Dropdown = React.memo(_Dropdown);
