import { spawn } from 'node:child_process';
import process from 'node:process';

const port = process.env.PORT || 4173;
const child = spawn(
  'npx',
  ['vite', 'preview', '--host', '0.0.0.0', '--port', String(port)],
  { stdio: 'inherit', shell: true }
);

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
