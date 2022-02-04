
import "zone.js/dist/zone"; // Included with Angular CLI.
(window as any).process = { env: { DEBUG: undefined }, nextTick: require('next-tick')};
(window as any)['global'] = window;
global.Buffer = global.Buffer || require('buffer').Buffer;