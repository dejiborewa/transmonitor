import styled from "styled-components";
import { arrowDown } from "../assets/arrowDown";
import { search } from "../assets/search";

const Container = styled.div`
  padding: 0 2em;

  .search {
    width: 60%;
  }

  .arrowDown {
    color: rgba(24, 117, 240, 1);
  }
`;

const Input = styled.input`
  background: transparent;
  outline: none;

  &::placeholder {
    color: rgba(120, 120, 120, 1);
  }
`;

function Payments() {
  return (
    <Container>
      <div>
        <h1 className="w-max text-[30px]">Payments</h1>
      </div>
      <div className="flex w-full">
        <p className="text-grey2">
          Showing <span className="arrowDown">20 {arrowDown}</span> out of 500
          payments
        </p>
        <div className="flex items-center search">
          {search}
          <Input type="text" placeholder="Search payment" />
        </div>
        <div className="flex">
          <p>Show</p>
          <div>All</div>
        </div>
      </div>
    </Container>
  );
}

export default Payments;
