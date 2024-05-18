import { Menu } from 'antd';
import { useTranslation } from 'next-i18next';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <Menu mode="horizontal">
      <Menu.Item key="1">{t('dashboard')}</Menu.Item>
    </Menu>
  );
};

export default Navbar;
