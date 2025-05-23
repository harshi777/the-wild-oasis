import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";

import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const filterValue = searchParams?.get("discount") || "all";

  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({ queryKey: ["cabins"], queryFn: getCabins });

  // let filteredCabins;

  // if (filterValue === "all") filteredCabins = cabins;

  // if (filterValue === "no-discount")
  //   filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  // if (filterValue === "with-discount")
  //   filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
