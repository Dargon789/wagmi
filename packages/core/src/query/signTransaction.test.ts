import { config } from '@wagmi/test'
import { expect, test } from 'vitest'

<<<<<<<< HEAD:packages/core/src/query/switchConnection.test.ts
import { switchConnectionMutationOptions } from './switchConnection.js'

test('default', () => {
  expect(switchConnectionMutationOptions(config)).toMatchInlineSnapshot(`
    {
      "mutationFn": [Function],
      "mutationKey": [
        "switchConnection",
========
import { signTransactionMutationOptions } from './signTransaction.js'

test('default', () => {
  expect(signTransactionMutationOptions(config)).toMatchInlineSnapshot(`
    {
      "mutationFn": [Function],
      "mutationKey": [
        "signTransaction",
>>>>>>>> upstream/main:packages/core/src/query/signTransaction.test.ts
      ],
    }
  `)
})
