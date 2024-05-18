import { Card } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';

const StatsCard:React.FC<any> = ({ title, value }) => {
  const { t } = useTranslation('common');
  return (
    <Card className="stat-card">
      <div className="stat-title">{t(title)}</div>
      <div className="stat-value">{value}</div>
    </Card>
  );
};

export default StatsCard;
