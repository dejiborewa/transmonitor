import styled from "styled-components";
import { arrowBlack } from "../assets/arrowBlack";
import { arrowLeft } from "../assets/arrowLeft";
import { arrowRight } from "../assets/arrowRight";
import { line } from "../assets/line";
import { mainGraph } from "../assets/mainGraph";
import { dashboardData, months, orders, payments } from "../data/dummy";

const Container = styled.section`
  padding: 0 2em;
  margin-bottom: 2em;
`;

function Dashboard() {
  return (
    <Container>
      <div className="flex justify-between w-full mt-8">
        {dashboardData.map((item, index) => (
          <div
            className="flex bg-white items-center p-4 rounded-sm"
            key={index}
          >
            <div>
              <p className="text-grey6 text-[12px] text-left">{item.type}</p>
              <p className="text-grey7 text-[18px] text-left">{item.value}</p>
            </div>
            <div className="ml-4">{item.graph}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-8 gap-2">
        <div className="w-[65%]">
          <div className="flex items-center justify-between bg-white p-4">
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
          <div className="bg-white relative">
            <div>{mainGraph}</div>

            <div className="grid grid-cols-6 absolute w-full top-6">
              {months.map((item, index) => (
                <span
                  key={index}
                  className="text-center font-[700] text-[14px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-[35%]">
          <div className="bg-white px-4 py-2">
            <h2 className="font-[700] text-grey7">Orders</h2>
            <div className="py-2">{line}</div>
            {orders.map((item) => (
              <div>
                <p className="text-[14px] py-1">
                  Pending Orders:{" "}
                  <span className="text-yellow font-[700]">
                    {item.pendingOrders}
                  </span>
                </p>
                <p className="text-[14px] py-1">
                  Reconciled Orders:{" "}
                  <span className="text-green font-[700]">
                    {item.reconciledOrders}
                  </span>
                </p>
                <p className="text-[14px] py-1">
                  Total Orders:{" "}
                  <span className="text-blue font-[700]">{item.total}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white px-4 py-2">
            <h2 className="font-[700] text-grey7">Payments</h2>
            <div className="py-2">{line}</div>
            {payments.map((item, index) => (
              <div key={index}>
                <p className="text-[14px] py-1">
                  Reconciled Orders:{" "}
                  <span className="text-yellow font-[700]">
                    {item.reconciledOrders}
                  </span>
                </p>
                <p className="text-[14px] py-1">
                  Un-reconciled Orders:{" "}
                  <span className="text-green font-[700]">
                    {item.unreconciled}
                  </span>
                </p>
                <p className="text-[14px] py-1">
                  Total Orders:{" "}
                  <span className="text-blue font-[700]">{item.total}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
