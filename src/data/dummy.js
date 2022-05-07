import { allOrders } from "../assets/allOrders";
import { manual } from "../assets/manual";
import { overview } from "../assets/overview";
import { pendingOrders } from "../assets/pendingOrders";
import { reconciled } from "../assets/reconciled";
import { unreconciled } from "../assets/unreconciled";
import { reconciledOrders } from "../assets/reconciledOrders";
import { wallet } from "../assets/wallet";
import { merchantProfile } from "../assets/merchantProfile";

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
