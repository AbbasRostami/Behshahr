// theme.ts
import { createTheme } from 'react-data-table-component';

// Light Theme
createTheme('customLight', {
  text: { primary: '#000', secondary: '#333' },
  background: { default: '#fff' },
  context: { background: '#f3f4f6', text: '#000' },
  divider: { default: '#e5e7eb' },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'light');

// Dark Theme
createTheme('customDark', {
  text: { primary: '#fff', secondary: '#e5e5e5' },
  background: { default: '#1f2937' },
  context: { background: '#374151', text: '#fff' },
  divider: { default: '#4b5563' },
  action: {
    button: 'rgba(255,255,255,.54)',
    hover: 'rgba(255,255,255,.08)',
    disabled: 'rgba(255,255,255,.12)',
  },
}, 'dark');
