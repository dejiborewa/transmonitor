import styled from "styled-components";
import { arrowBlack } from "../assets/arrowBlack";
import { arrowLeft } from "../assets/arrowLeft";
import { arrowRight } from "../assets/arrowRight";
import { mainGraph } from "../assets/mainGraph";
import { dashboardData } from "../data/dummy";

const Container = styled.section`
  padding: 0 2em;
`;

function Dashboard() {
  return (
    <Container>
      <div className="flex justify-between w-full mt-8">
        {dashboardData.map((item) => (
          <div className="flex bg-white items-center p-4 rounded-sm">
            <div>
              <p className="text-grey6 text-[12px] text-left">{item.type}</p>
              <p className="text-grey7 text-[18px] text-left">{item.value}</p>
            </div>
            <div className="ml-4">{item.graph}</div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between bg-white mt-8 p-4">
          <h3 className="text-black2 font-[18px] font-[700]">
            Today: 5, Aug 2018
          </h3>
          <div className="flex items-center ">
            <div className="text-tableHeader text-[12px] border border-borderGrey rounded-[4.25px] px-2 py-1">
              <span className="mr-4">1 Jan - 1 Jun</span> {arrowBlack}
            </div>

            <div className="flex items-center ml-4 ">
              <div className="border border-borderGrey px-1 rounded-[4.25px]">
                {arrowLeft}
              </div>
              <div className="border border-borderGrey px-1 rounded-[4.25px] ml-4">
                {arrowRight}
              </div>
            </div>
          </div>
        </div>{" "}
        <div>{mainGraph}</div>
      </div>

      <div>
        
      </div>
    </Container>
  );
}

export default Dashboard;
