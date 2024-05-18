import AgentsTable from '@/Components/Agents/AgentsTable';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const Agents = () => {
  const { t } = useTranslation('common');

  return (
    <div className="agents-page">
      <h1>{t('agents')}</h1>
      <AgentsTable />
    </div>
  );
};

export const getStaticProps = async ({ locale }:any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Agents;
