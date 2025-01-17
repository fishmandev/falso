import { FakeOptions, fake } from './core/core';
import { data } from './domain-suffix.json';

/**
 * Generate a random domain suffix.
 *
 * @category Internet
 *
 * @example
 *
 * randDomainSuffix()
 *
 * @example
 *
 * randDomainSuffix({ length: 10 })
 *
 */
export function randDomainSuffix<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
