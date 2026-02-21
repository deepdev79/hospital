import Star from "../../assets/TableStar.svg?react";
interface RatingProp {
  rating: string;
}
function Rating({ rating }: RatingProp) {
  return (
    <div className="flex items-center gap-0.5">
      <Star className="fill-yellow-400 w-5 h-5" />
      <p>{rating}</p>
    </div>
  );
}

export default Rating;
