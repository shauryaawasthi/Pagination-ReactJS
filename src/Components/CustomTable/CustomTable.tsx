import Table from "react-bootstrap/Table";
import CustomPagination from "../CustomPagination/CustomPagination";
import UseApi from "../CustomHooks/UseApi";
import axios from "axios";
import { useEffect, useState } from "react";

const CustomTable = () => {
  const { data }: any = UseApi(`${process.env.REACT_APP_API_URL}`);
  const FinalPageLimit = Number(process.env.REACT_APP_FINAL_PAGE_LIMIT);
  console.log(FinalPageLimit, "ffffpffffflllll");

  const [initialLimit, setInitialLimit] = useState<number>(0);
  //   const [finalLimit, setFinalLimit] = useState<number>(10);
  const [finalLimit, setFinalLimit] = useState<number>(FinalPageLimit);

  const [pageNumber, setPageNumber] = useState<number>(1);
  //   const PageLimit = 3;
  const PageLimit = process.env.REACT_APP_PAGE_LIMIT;

  console.log(process.env.REACT_APP_API_URL, "working");
  console.log(data[0]?.brand, data[0]?.title, data[0]?.category);

  const handleNextClick = () => {
    setInitialLimit(initialLimit + FinalPageLimit);
    setFinalLimit(finalLimit + FinalPageLimit);
  };

  const handlePrevClick = () => {
    setInitialLimit(initialLimit - FinalPageLimit);
    setFinalLimit(finalLimit - FinalPageLimit);
  };

  const handlePageNumberClick = (pageCliked: any) => {
    // setInitialLimit(initialLimit * 2 - 10);
    // setFinalLimit(finalLimit * 2 - 10);
    setInitialLimit(FinalPageLimit * pageCliked - 10);
    setFinalLimit(FinalPageLimit * pageCliked);
  };

  const displayData = data.slice(initialLimit, finalLimit);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((result: any, index: any) => {
            return (
              <tr key={index}>
                <td>{index + (initialLimit + 1)}</td>
                <td>{result.title}</td>
                <td>{result.brand}</td>
                <td>{`$ ${result.price}`}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CustomPagination
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        PageLimit={PageLimit}
        handlePageNumberClick={handlePageNumberClick}
      />
    </>
  );
};

export default CustomTable;
