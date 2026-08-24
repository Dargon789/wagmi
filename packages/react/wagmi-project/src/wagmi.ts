import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export function getConfig() {
  const wcProjectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID

  const connectors = [
    injected(),
    baseAccount(),
    ...(wcProjectId ? [walletConnect({ projectId: wcProjectId })] : []),
  ]

  return createConfig({
    chains: [mainnet, sepolia],
    connectors,
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
