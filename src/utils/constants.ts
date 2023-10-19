export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth:'NO_AUTH',
} as const;

export const AppRoute = {
  Login: '/login',
  Main: '/',
  Favorities: '/favorities',
  Offer: '/offer/:id'
} as const;
