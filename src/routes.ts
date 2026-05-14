import { createBrowserRouter } from "react-router";
import AccountingFinanceRoot from "./erp/accounting-finance/AccountingFinanceRoot";
import AccountingHome from "./erp/accounting-finance/Home/AccountingHome";
import LoginRoot from "./erp/auth/LoginRoot";
import FieldForceRoot from "./erp/field-force/FieldForceRoot";
import FieldForceHome from "./erp/field-force/home/FieldForceHome";
import HomePage from "./erp/home/HomePage";
import InventoryWarehouseRoot from "./erp/inventory-warehouse/InventoryWarehouseRoot";
import InventoryHome from "./erp/inventory-warehouse/home/InventoryHome";
import PurchaseRoot from "./erp/purchase/PurchaseRoot";
import PurchaseHome from "./erp/purchase/home/PurchaseHome";
import ReportsRoot from "./erp/reports/ReportsRoot";
import ReportHome from "./erp/reports/home/ReportHome";
import SalesDemandRoot from "./erp/sales-demand/SalesDemandRoot";
import SalesHome from "./erp/sales-demand/home/SalesHome";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/login",
        Component: LoginRoot,
    },
    {
        path: "/accounting-finance",
        Component: AccountingFinanceRoot,
        children: [
            { index: true, Component: AccountingHome },
        ],
    },
    {
        path: "/field-force",
        Component: FieldForceRoot,
        children: [
            { index: true, Component: FieldForceHome },
        ],
    },
    {
        path: "/inventory-warehouse",
        Component: InventoryWarehouseRoot,
        children: [
            { index: true, Component: InventoryHome }
        ],
    },
    {
        path: "/purchase",
        Component: PurchaseRoot,
        children: [
            { index: true, Component: PurchaseHome }
        ],
    },
    {
        path: "/reports",
        Component: ReportsRoot,
        children: [
            { index: true, Component: ReportHome }
        ],
    },
    {
        path: "/sales-demand",
        Component: SalesDemandRoot,
        children: [
            { index: true, Component: SalesHome }
        ],
    },
]);