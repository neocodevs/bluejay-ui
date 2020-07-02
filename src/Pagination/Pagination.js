import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";
import PaginationItem from "./PaginationItem";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const ArrowSVG = styled.svg`
  fill: #9da1a7;
  width: 1em;
  height: 1em;
  cursor: pointer;
`;

const InertedArrowSVG = styled(ArrowSVG)`
  transform: scaleX(-1);
`;

const Pagination = ({
  paginationLength = 1,
  defaultPage = 1,
  page = defaultPage,
  ...props
}) => {
  const [pageNumber, setPageNumber] = useState(page);

  function handleClick(value) {
    setPageNumber(paginationArrowButtons(value));
  }

  const paginationArrowButtons = (pageTypeOrNumber) => {
    const next = pageNumber + 1;
    const previous = pageNumber - 1;

    if (!isNaN(pageTypeOrNumber)) {
      return pageTypeOrNumber;
    }
    switch (pageTypeOrNumber) {
      case "first":
        return 1;
      case "previous":
        return previous <= 0 ? 1 : previous;
      case "next":
        return next < paginationLength ? next : paginationLength;
      case "last":
        return paginationLength;
      default:
        return null;
    }
  };

  return (
    <PaginationContainer {...props}>
      {renderArrows({
        ...props,
        pageNumber,
        onClick: () => handleClick("first"),
        direction: "left",
        arrowType: "doubleArrow",
      })}
      {renderArrows({
        ...props,
        pageNumber,
        onClick: () => handleClick("previous"),
        direction: "left",
      })}

      {[...Array(paginationLength).keys()].map((pageIndex) => {
        const itemPageNumber = pageIndex + 1;
        const activeItem = pageNumber === itemPageNumber;
        return (
          <PaginationItem
            key={itemPageNumber}
            onClick={() => handleClick(itemPageNumber)}
            {...props}
            activeItem={activeItem}
          >
            {itemPageNumber}
          </PaginationItem>
        );
      })}

      {renderArrows({
        ...props,
        pageNumber,
        onClick: () => handleClick("next"),
      })}
      {renderArrows({
        ...props,
        pageNumber,
        onClick: () => handleClick("last"),
        arrowType: "doubleArrow",
      })}
    </PaginationContainer>
  );
};

const renderArrows = ({
  pageNumber,
  hideNavigationArrows = false,
  hideNextAndPrevArrowButton = false,
  hideFirstAndLastArrowButton = false,
  direction = "right",
  arrowType = "singleArrow",
  ...props
}) => {
  const arrowProps = getArrowProps(arrowType);
  return (
    !hideNavigationArrows && (
      <DirectionArrowComponent
        viewBox={arrowProps.viewBox}
        direction={direction}
        {...props}
      >
        {arrowProps.path()}
      </DirectionArrowComponent>
    )
  );
};

const getArrowProps = (arrowType = "singleArrow") =>
  arrowType === "singleArrow"
    ? {
        path: () => (
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.8772 10.5L12.253 18.8758L10.6288 20.5L0.628784 10.5L10.6288 0.5L12.253 2.12421L3.8772 10.5Z"
          />
        ),
        viewBox: "0 0 13 21",
      }
    : {
        path: () => (
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.5 17L10.2923 15.2078L3.5845 8.5L10.2923 1.79225L8.5 0L0 8.5L8.5 17ZM16.6288 15.2078L9.92104 8.5L16.6288 1.79225L14.8365 0L6.33654 8.5L14.8365 17L16.6288 15.2078Z"
          />
        ),
        viewBox: "0 0 17 17",
      };

const DirectionArrowComponent = ({ direction = "right", ...props }) => {
  return direction === "right" ? (
    <InertedArrowSVG {...props} />
  ) : (
    <ArrowSVG {...props} />
  );
};

export default Pagination;
