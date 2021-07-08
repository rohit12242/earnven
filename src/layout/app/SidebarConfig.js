
import dashboardLogo from '../../assets/icons/dashboardlogo.png';
import historyLogo from '../../assets/icons/history.png';
import defiMadeEasyLogo from '../../assets/icons/defimadeeasy.png';
import tradingLogo from '../../assets/icons/trading.png';
import bridgeLogo from '../../assets/icons/Bridge.png';

import safeFarmsLogo from '../../assets/icons/safefarm.png'
import multiSenderLogo from '../../assets/icons/multisender.png';
// import pylonProductsLogo from '../../../assets/icons/pylonproducts.png';

// ----------------------------------------------------------------------

const getIcon = (name) => <img src={name} alt="" width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/app/dashboard',
    icon: getIcon(dashboardLogo)
  },
  {
    title: 'history',
    path: '/app/history',
    icon: getIcon(historyLogo)
  },
  {
    title: 'defi made easy',
    path: '/app/defimadeasy',
    icon: getIcon(defiMadeEasyLogo)
  },
  {
    title: 'bridge',
    path: '/app/bridge',
    icon: getIcon(tradingLogo)
  },
  {
    title: 'multisender',
    path: '/app/multisender',
    icon: getIcon(bridgeLogo)
  },
  {
    title: 'safefarm',
    path: '/app/safefarm',
    icon: getIcon(safeFarmsLogo)
  },
  {
    title: 'trading',
    path: '/app/trading',
    icon: getIcon(multiSenderLogo)
  }
];

export default sidebarConfig;
