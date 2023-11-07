
import Card from '../components/Card';
import { OffersArrayType } from '../types/offer';

type CardsListProps = {
  offers: OffersArrayType;
  setCardHoverId(id: number | null): void;
};

function CardsList ({offers, setCardHoverId}: CardsListProps): JSX.Element {


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((card) => <Card key={card.id} card={card} setCardHoverId={setCardHoverId}/>
        )
      }
    </div>
  );
}

export default CardsList;
