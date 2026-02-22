import { notFound } from 'next/navigation';
import TestPage from '@/layouts/test';

const ALLOWED_ENVS = ['devel', 'pre'];

export default async function Test() {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT ?? '';

  if (!ALLOWED_ENVS.includes(env)) {
    notFound();
  }

  return <TestPage />;
}
