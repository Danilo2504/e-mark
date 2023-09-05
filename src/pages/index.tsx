import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Layout from './Layout';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Head>
        <title>E-mark</title>
      </Head>
      <div>{t('saludo')}</div>
    </Layout>
  );
}
