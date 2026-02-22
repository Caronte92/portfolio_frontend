'use client';

import React, { useCallback } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { Dropdown, type DropdownOption } from '@/components/atoms';
import { IconLanguage } from '@/components/atoms/icons';
import type { Locale } from '../../../i18n-config';

const OPTIONS: DropdownOption[] = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
  { value: 'cat', label: 'CAT' },
];

const _LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLang = (params.lang as Locale) ?? 'en';

  const handleChange = useCallback(
    (newLang: string) => {
      const segments = pathname.split('/');
      segments[1] = newLang;
      router.push(segments.join('/'));
    },
    [pathname, router]
  );

  // Icon only in trigger, not in options
  return (
    <Dropdown
      options={OPTIONS}
      value={currentLang}
      onChange={handleChange}
      ariaLabel="Language"
      // @ts-ignore
      triggerIcon={<IconLanguage size={18} ariaLabel="Selected language" />}
    />
  );
};

export const LanguageSwitcher = React.memo(_LanguageSwitcher);
