import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const CustomPagination = ({
  handleNextClick,
  handlePrevClick,
  handlePageNumberClick,
  PageLimit,
}: any) => {
  const [active, setActive] = useState(1);
  // const [i, setI] = useState(1);
  const items = [];
  // const active: number = 1;
  const prevClick = () => {
    if (active > 1) {
      handlePrevClick();
      setActive(active - 1);
    }
  };

  const nextClick = () => {
    if (active < PageLimit) {
      handleNextClick();
      setActive(active + 1);
    }
  };

  // for (i; i <= PageLimit; setI(i + 1))
  for (let i = 1; i <= PageLimit; i++) {
    const pageNumberClik = (pn: any) => {
      handlePageNumberClick(pn);
      setActive(pn);
    };
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => {
          console.log(i, "index");
          pageNumberClik(i);
        }}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="justify-content-center ">
      <Pagination.Prev onClick={prevClick} />
      <>
        {items.map((item) => {
          return item;
        })}
      </>
      <Pagination.Next onClick={nextClick} />
    </Pagination>
  );
};

export default CustomPagination;
