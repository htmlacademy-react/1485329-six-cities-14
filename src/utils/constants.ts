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

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const handleStars = (width: number) => `${String(Math.round(width * 20)) }%`;

export const cardTypeSettings = {
  mainScreen: {
    className: 'cities'
  },
  offerScreen: {
    className: 'near-places'
  }
};

export const cardsListTypeSettings = {
  mainScreen: {
    className: 'cities__places-list tabs__content'
  },
  offerScreen: {
    className: 'near-places__list'
  }
};

export const mapTypeSettings = {
  mainScreen: {
    className: 'cities'
  },
  offerScreen: {
    className: 'offer'
  }
};
