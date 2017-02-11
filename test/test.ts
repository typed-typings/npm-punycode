import test = require('blue-tape');
import * as punycode from 'punycode';

test('decode', (t) => {
  t.plan(1);
  t.equal(punycode.decode('--dqo34k'), '☃-⌘');
});
