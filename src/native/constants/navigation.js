import Colors from '../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: '#01ADBA' },
    titleStyle: {
      color: 'white',
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: Colors.textColor,
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(1, 173, 186, 0.5)',
    inactiveBackgroundColor: '#01ADBA',
    tabBarStyle: { backgroundColor: 'rgba(1, 173, 186, 0.5)' },
  },

  icons: {
    style: { color: 'white', height: 30, width: 30 },
  },
};
