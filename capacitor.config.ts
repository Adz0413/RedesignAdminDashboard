import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.smartcommand.admin',
  appName: 'SMART Command',
  webDir: 'dist',
  backgroundColor: '#f4f6f8',
  android: {
    backgroundColor: '#f4f6f8',
    allowMixedContent: false,
  },
  server: {
    androidScheme: 'https',
  },
}

export default config
