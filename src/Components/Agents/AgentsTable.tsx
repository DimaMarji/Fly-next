import { useAppMediaQuery } from '@/Hooks/MediaQuery/use-app-media-query';
import { Table, Button, Space } from 'antd';
import { useTranslation } from 'next-i18next';

const AgentsTable = () => {
  const { t } = useTranslation('common');
  const {isMobile} = useAppMediaQuery()

  const columns = [
    {
      title: t('serialNumber'),
      dataIndex: 'serialNumber',
      key: 'serialNumber',
    },
    {
      title: t('agentName'),
      dataIndex: 'agentName',
      key: 'agentName',
    },
    {
      title: t('email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: t('commission'),
      dataIndex: 'commission',
      key: 'commission',
    },
    {
      title: t('tours'),
      dataIndex: 'tours',
      key: 'tours',
    },
    {
      title: t('accountStatus'),
      dataIndex: 'accountStatus',
      key: 'accountStatus',
      render: (status:any) => (
        <span className={status === 'Active' ? 'status-active' : 'status-inactive'}>
          {t(status.toLowerCase())}
        </span>
      ),
    },
    {
      title: t('dues'),
      dataIndex: 'dues',
      key: 'dues',
    },
    {
      title: t('paymentStatus'),
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      render: (status:any) => (
        <span className={status ? 'status-paid' : 'status-unpaid'}>
          {status ? '✓' : '✕'}
        </span>
      ),
    },
    {
      title: t('actions'),
      key: 'actions',
      render: () => (
        <Space size="middle">
          <Button>{t('edit')}</Button>
          <Button>{t('details')}</Button>
          <Button danger>{t('delete')}</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      serialNumber: '1',
      agentName: 'Agent 1',
      email: 'test@test.com',
      commission: '5%',
      tours: '10',
      accountStatus: 'Active',
      dues: 'SAR 100',
      paymentStatus: true,
    },
  ];

  return (
    <div className="agents-table">
      <div className="table-actions">
        <Button type="primary">{t('addNewAgent')}</Button>
        <input type="search" placeholder={t('search')} />
      </div>
      <Table  scroll={{x: isMobile ? "200px" : "950px"}} columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
    </div>
  );
};

export default AgentsTable;
