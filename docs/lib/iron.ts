import type { IronSessionOptions } from 'iron-session'

export const ironOptions: IronSessionOptions = {
  cookieName: 'siwe',
  password: process.env.NEXT_IRON_PASSWORD!,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
