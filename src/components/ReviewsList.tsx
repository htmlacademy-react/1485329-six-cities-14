import { ReviewsArrayType } from '../types/review';
import Review from './Review';

type ReviewsListProps = {
  selectedCardReviews: ReviewsArrayType;
}

function ReviewsList({selectedCardReviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        selectedCardReviews.map((review) => (
          <Review key={review.user.id} review={review}/>
        ))
      }
    </ul>
  );
}

export default ReviewsList;
