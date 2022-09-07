import { defineConfig } from 'tsup';
import baseConfig from '@changeset-test123/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options),
  external: ['react'],
  entry: ['src/index.ts', 'config.ts', 'setup.ts'],
}));
