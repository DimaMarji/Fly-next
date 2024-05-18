import { Row, Col } from 'antd';
import StatsCard from './StatsCard';
import ChartCard from './LineChart';
import { useTranslation } from 'next-i18next';

const Dashboard = () => {
  const { t } = useTranslation('common');

  return (
    <div className="dashboard">
      <Row gutter={16}>
        <Col span={8}>
          <ChartCard title={t('completedTours')} />
        </Col>
        <Col span={8}>
          <ChartCard title={t('agents')} />
        </Col>
        <Col span={8}>
          <ChartCard title={t('clients')} />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={8}>
          <StatsCard title="totalPayments" value="$41,741.42" />
        </Col>
        <Col span={8}>
          <StatsCard title="currentSubscriptions" value="$45,141" />
        </Col>
        <Col span={8}>
          <StatsCard title="packageValue" value="$15,141" />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
