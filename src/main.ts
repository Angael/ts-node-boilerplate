/**
 * Some predefined delay values (in milliseconds).
 */
import { nanoid } from 'nanoid';
import { helper } from '@utils/helper.js';

export enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000,
}

/**
 * Returns a Promise<string> that resolves after a given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - A number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(
  name: string,
  delay: number = Delays.Medium,
): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay),
  );
}

export async function greeter(name: any) {
  return await delayedHello(name, Delays.Short);
}

console.log(nanoid());
console.log(await greeter(helper('Krzysiek')));
