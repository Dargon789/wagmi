import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
// eslint-disable-next-line import/no-unresolved
import { locales } from 'nextra/locales'

const redirects: Record<string, string> = {
  '/docs/connectors/coinbase-wallet': '/docs/connectors/coinbaseWallet',
  '/docs/connectors/metamask': '/docs/connectors/metaMask',
  '/docs/connectors/walletconnect': '/docs/connectors/walletConnect',
  '/docs/create-wagmi': '/cli/create-wagmi',
  '/docs/migrating-to-030': '/docs/migrating-to-03', // Tweeted wrong link: https://twitter.com/awkweb/status/1518607780332122116
  '/docs/migrating-to-03': '/docs/migration-guide',
  '/docs/provider': '/docs/WagmiConfig',
  '/react/prepare-hooks/intro': '/react/prepare-hooks',
}

export function middleware(request: NextRequest) {
  // Handle redirect in `_middleware.ts` because of bug using `next.config.js`
  // https://github.com/shuding/nextra/issues/384
  const redirectPath = redirects[request.nextUrl.pathname]
  if (redirectPath) {
    const url = request.nextUrl.clone()
    url.pathname = redirectPath
    return NextResponse.redirect(url)
  }

  const skipMiddlewareRegex = /^\/assets|favicon\/.+/
  if (!skipMiddlewareRegex.test(request.nextUrl.pathname))
    return locales(request)
  // return NextResponse.next({ request })
}
