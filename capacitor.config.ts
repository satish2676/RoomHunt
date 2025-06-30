const config = {
  appId: 'com.roomhunt.app', // or your package name
  appName: 'RoomHunt',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    AdMob: {
      adSize: 'SMART_BANNER',
      position: 'BOTTOM_CENTER',
      margin: 0,
      isTesting: true, // false in production
      androidAdMobAppId: 'ca-app-pub-8905932082438698~4212837439', // ✅ your real App ID
    },
  },
};

export default config;
