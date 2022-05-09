import styled from "styled-components";
import { bell } from "../assets/bell";
import { search } from "../assets/search";
import { transmonitor } from "../assets/transmonitor";
import dp from "../assets/dp.png";

const HeaderContainer = styled.header`
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
`;

const Input = styled.input`
  background: transparent;
  outline: none;
  width: 100%;
  margin-left: 0.5em;

  &::placeholder {
    color: #979797;
  }
`;

function Header() {
  return (
    <HeaderContainer className="w-full shadow-md py-5 flex items-center">
      <div className="w-[20%]">{transmonitor}</div>
      <div className="flex items-center justify-between px-4 w-[80%]">
        <div className="flex items-center search">
          {search}
          <Input type="text" placeholder="Search" />
        </div>

        <div className="flex items-center cursor-pointer">
          <nav>
            <ul className="flex items-center text-grey text-[14px]">
              <li className="mx-6">Support</li>
              <li className="mx-6">FAQ</li>
              <li className="mx-6">{bell}</li>
            </ul>
          </nav>

          <div className="flex items-center text-grey ml-8 cursor-pointer">
            <div>
              <p className="text-[10px] text-right">Hello</p>
              <p className="text-[14px]">Oluwaleke Ojo</p>
            </div>
            <img
              src={dp}
              className="block rounded-full ml-2 mr-[3em]"
              alt="dp"
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
