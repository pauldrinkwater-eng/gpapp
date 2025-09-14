import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uk.co.malthouse.app',
  appName: 'Malthouse Surgery',
  server: {
    // point at your deployed site so updates come from Vercel
    url: 'https://YOUR-DEPLOYED-URL', // e.g. https://malthouse-app.vercel.app
    cleartext: false,
    androidScheme: 'https',
  },
  ios: { contentInset: 'automatic' },
  plugins: {
    SplashScreen: { launchShowDuration: 0 }
  }
};
export default config;