// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uk.co.malthouse.app',
  appName: 'Malthouse Surgery',

  // If you want the native shell to load your live Vercel site:
  server: {
    // TODO: replace with your real deployed URL
    url: 'https://YOUR-DEPLOYED-URL', // e.g. https://malthouse-app.vercel.app
    androidScheme: 'https',
    cleartext: false,
  },

  ios: { contentInset: 'automatic' },

  plugins: {
    SplashScreen: { launchShowDuration: 0 },
  },
};

export default config;
