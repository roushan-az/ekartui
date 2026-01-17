import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.diyainternational.com',
  appName: 'diya-dazzle',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
