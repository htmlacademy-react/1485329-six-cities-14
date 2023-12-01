import { cardsListTypeSettings } from '../utils/constants';
import Card from '../components/Card';
import { OffersArrayType } from '../types/offer';

type CardsListProps = {
  offers: OffersArrayType;
  cardType: 'mainScreen' | 'offerScreen';
  cardsListType: 'mainScreen' | 'offerScreen';
  setCardHoverId(id: number | null): void;
};

function CardsList ({offers, setCardHoverId, cardType, cardsListType}: CardsListProps): JSX.Element {


  return (
    <div className={`${cardsListTypeSettings[cardsListType].className} places__list`}>
      {
        offers.map((card) => <Card key={card.id} card={card} setCardHoverId={setCardHoverId} cardType={cardType}/>
        )
      }
    </div>
  );
}

export default CardsList;
