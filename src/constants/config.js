const devMode = process.env.NODE_ENV !== 'development';

export default {
  // App Details
  appName: 'TherapyMart',
  backgroundColor: '#01ADBA',

  // Build Configuration - eg. Debug or Release?
  DEV: devMode,

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: devMode ? 'UA-84284256-2' : 'UA-84284256-1',
};
