'use client';

import React, { useCallback } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { IconLanguage } from '@/components/atoms/icons';
import { DropdownOption, Dropdown } from '@/components/molecules/Dropdown';
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

  return (
    <Dropdown
      options={OPTIONS}
      value={currentLang}
      onChange={handleChange}
      ariaLabel="Language"
      triggerIcon={
        <IconLanguage size="1.125rem" ariaLabel="Selected language" />
      }
    />
  );
};

export const LanguageSwitcher = React.memo(_LanguageSwitcher);
