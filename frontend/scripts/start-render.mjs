import { spawn } from 'node:child_process';
import process from 'node:process';

const port = process.env.PORT || 10000;
const child = spawn(
  'npx',
  ['serve', '-s', 'dist', '-l', String(port)],
  { stdio: 'inherit', shell: true }
);

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
