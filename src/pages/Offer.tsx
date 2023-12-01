import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { OfferCity, OffersArrayType } from '../types/offer';
import { ReviewsArrayType } from '../types/review';
import CommentsForm from '../components/CommentsForm';
import { handleStars } from '../utils/constants';
import ReviewsList from '../components/ReviewsList';
import Map from '../components/Map';
import CardsList from '../components/CardsList';

type OfferProps = {
  offers: OffersArrayType;
  reviews: ReviewsArrayType;
  city: OfferCity;
};

function Offer ({offers, reviews, city}: OfferProps): JSX.Element {

  const params = useParams();
  const cardId = Number(params.id);

  const selectedCard = offers.filter((item) => item.id === cardId)[0];

  const recommendOffers = offers.slice(0,3);

  const [сardHoverId, setCardHoverId] = useState<number | null>(null);

  // const isFavoriteActive = `place-card__bookmark-button button ${selectedCard.isFavorite ? 'place-card__bookmark-button--active' : ''}`

  const selectedCardReviews = reviews.filter((item) => item.id === cardId);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {selectedCard.images.slice(0, 6).map((img) => (
                <div key={img} className='offer__image-wrapper'>
                  <img className='offer__image' src={img} alt='Photo studio' />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                selectedCard.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {selectedCard.title}
                </h1>
                <button className='offer__bookmark-button button' type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${handleStars(selectedCard.rating)}`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{selectedCard.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {selectedCard.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {selectedCard.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {selectedCard.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{selectedCard.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    selectedCard.goods.map((item) => (
                      <li className="offer__inside-item" key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {selectedCard.host.name}
                  </span>
                  {
                    selectedCard.host.isPro &&
                    <span className="offer__user-status">Pro</span>
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {selectedCard.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{selectedCardReviews.length}</span></h2>
                <ReviewsList selectedCardReviews={selectedCardReviews} />
                <CommentsForm />
              </section>
            </div>
          </div>
          <Map offers={recommendOffers} city={city} сardHoverId={сardHoverId} mapType={'offerScreen'}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList offers={recommendOffers} setCardHoverId={setCardHoverId} cardType={'offerScreen'} cardsListType={'offerScreen'}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
