import { Link } from 'react-router-dom';
import { OfferType } from '../types/offer';
import { cardTypeSettings, handleStars } from '../utils/constants';

type CardProps = {
  cardType: 'mainScreen' | 'offerScreen';
  card: OfferType;
  setCardHoverId(id: number | null): void;
}

function Card ({ card, setCardHoverId, cardType }: CardProps): JSX.Element {

  const {isPremium, isFavorite, previewImage, price, title, type, id, rating } = card;

  const isFavoriteActive = `place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`;

  const handleMouseOver = () => {
    setCardHoverId(id);
  };

  const handleMouseOut = () => {
    setCardHoverId(null);
  };

  return (
    <article className={`${cardTypeSettings[cardType].className}__card place-card`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}


      <div className="cities__image-wrapper place-card__image-wrapper">
        <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavoriteActive} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${handleStars(rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default Card;
