import styled from "styled-components";
import { transmonitor } from "../assets/transmonitor";

const HeaderContainer = styled.div`
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
`;

function Header() {
  return (
    <HeaderContainer className="w-full shadow-md py-5">
      <div className="w-[20%]">{transmonitor}</div>
    </HeaderContainer>
  );
}

export default Header;
