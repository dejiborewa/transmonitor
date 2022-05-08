import { allOrders } from "../assets/allOrders";
import { manual } from "../assets/manual";
import { overview } from "../assets/overview";
import { pendingOrders } from "../assets/pendingOrders";
import { reconciled } from "../assets/reconciled";
import { unreconciled } from "../assets/unreconciled";
import { reconciledOrders } from "../assets/reconciledOrders";
import { wallet } from "../assets/wallet";
import { merchantProfile } from "../assets/merchantProfile";
import { arrowBlack } from "../assets/arrowBlack";
import { vw } from "../assets/vw symbol";
import { tinyGraph } from "../assets/tinyGraph";
// import { mainGraph } from "../assets/mainGraph";

export const sidebar_main = [
  {
    icon: overview,
    text: "Overview",
  },
];

export const sidebar_payment = [
  {
    icon: wallet,
    text: "All Payments",
  },
  {
    icon: reconciled,
    text: "Reconciled Payments",
  },
  {
    icon: unreconciled,
    text: "Un-Reconciled  Payments",
  },
  {
    icon: manual,
    text: "Manual Settlement",
  },
];

export const siderbar_orders = [
  {
    icon: allOrders,
    text: "All Orders",
  },
  {
    icon: pendingOrders,
    text: "Pending Orders",
  },
  {
    icon: reconciledOrders,
    text: "Reconciled Orders",
  },
];

export const sidebar_profile = [
  {
    icon: merchantProfile,
    text: "Merchant Profile",
  },
];

export const tableHeader = [
  "Item Type",
  "Price",
  "Transaction No",
  "Time",
  "Action",
];

export const tableBodyData = [
  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Pending",
    action: arrowBlack,
  },

  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconciled",
    action: arrowBlack,
  },
  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconciled",
    action: arrowBlack,
  },

  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Un-Reconciled",
    action: arrowBlack,
  },
  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconciled",
    action: arrowBlack,
  },

  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Un-Reconciled",
    action: arrowBlack,
  },
  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconciled",
    action: arrowBlack,
  },

  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Pending",
    action: arrowBlack,
  },
  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Pending",
    action: arrowBlack,
  },

  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconciled",
    action: arrowBlack,
  },
  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Un-Reconciled",
    action: arrowBlack,
  },

  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconciled",
    action: arrowBlack,
  },
  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Reconciled",
    action: arrowBlack,
  },

  {
    icon: vw,
    name: 'Apple Mac Book 15" 250 SSD 12GB',
    price: "$73430",
    transactionNo: "1234567890",
    time: "12:30",
    status: "Un-Reconciled",
    action: arrowBlack,
  },
];

export const dropdownData = [
  "All",
  "Reconciled",
  "Un-Reconciled",
  "Settled",
  "Unsettled",
];

export const dashboardData = [
  {
    type: "Daily Transaction Volume",
    value: "2,342",
    graph: tinyGraph,
  },

  {
    type: "Daily Transaction Value",
    value: <>&#8358;4,000,000</>,
    graph: tinyGraph,
  },

  {
    type: "Total Transaction Volume",
    value: "452000",
    graph: tinyGraph,
  },

  {
    type: "Total Transaction Value",
    value: <>&#8358;4,000,000</>,
    graph: tinyGraph,
  },
];
