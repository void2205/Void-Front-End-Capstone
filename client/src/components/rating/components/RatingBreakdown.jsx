import React from 'react';
import { useSelector } from 'react-redux';

//Components
import Stars from '../../detail/Stars';

//Styles
import {
  StarContainer,
  StarLeft,
  StarMiddle,
  StarBar,
  StarFill,
  StarRight
} from '../styles/RatingBreakdown.styled';
import {
  RatingContainer,
  TableContainer
} from '../styles/FlexContainers.styled';

//Helper Functions
import averageNumber from '../helpers/averageNumber';
import percentRec from '../helpers/percentRec';
import starCounter from '../helpers/starCounter';

export default function RatingBreakdown() {
  const { productMetaData } = useSelector((state) => state.productMetaData);
  const percent = percentRec(productMetaData.recommended);

  let percentMessage;
  if (percent && percent >= 0) {
    percentMessage = <p>{percent}% of reviews recommend this product</p>;
  } else {
    percentMessage = <p>There are no reviews for this product yet</p>;
  }

  let starBreakdown = starCounter(productMetaData.ratings);

  return (
    <>
      <RatingContainer>
        <span className="rating">{averageNumber(productMetaData.ratings)}</span>
        <span>
          <Stars />
        </span>
      </RatingContainer>
      <TableContainer>
        {starBreakdown.map((star, index) => {
          return (
            <StarContainer key={5 - index}>
              <StarLeft>
                <div>{5 - index} Stars</div>
              </StarLeft>
              <StarMiddle>
                <StarBar>
                  <StarFill fill={star[0]}></StarFill>
                </StarBar>
              </StarMiddle>
              <StarRight>{star[1]}</StarRight>
            </StarContainer>
          );
        })}
        <span>{percentMessage}</span>
      </TableContainer>
    </>
  );
}
