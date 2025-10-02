// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uk.co.malthouse.app',
  appName: 'Malthouse Surgery',
  webDir: 'out',
  ios: { contentInset: 'automatic' },
  plugins: {
    SplashScreen: { launchShowDuration: 0 }
  }
};

export default config;
