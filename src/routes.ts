import { createBrowserRouter } from "react-router";
import AccountingMenu1Root from "./erp/accounting-finance/menu-1/AccountingMenu1Root";
import AccountingMenu2Root from "./erp/accounting-finance/menu-2/AccountingMenu2Root";
import LoginRoot from "./erp/auth/LoginRoot";
import FieldForceMenu1 from "./erp/field-force/menu-1/FieldForceMenu1";
import FieldForceMenu2 from "./erp/field-force/menu-2/FieldForceMenu2";
import Dashboard from "./erp/home/Dashboard";
import HomePage from "./erp/home/HomePage";
import PurchaseMenu1 from "./erp/purchase/menu-1/PurchaseMenu1";
import PurchaseMenu2 from "./erp/purchase/menu-2/PurchaseMenu2";
import ReportMenu1 from "./erp/reports/menu-1/ReportMenu1";
import ReportMenu2 from "./erp/reports/menu-2/ReportMenu2";
import SalesMenu1 from "./erp/sales-demand/menu-1/SalesMenu1";
import SalesMenu2 from "./erp/sales-demand/menu-2/SalesMenu2";
import StockOnHandRoot from "./erp/inventory-warehouse/stock-on-hand/StockOnHandRoot";
import AdjustmentRoot from "./erp/inventory-warehouse/adjustment/AdjustmentRoot";
import FixedAssetRoot from "./erp/inventory-warehouse/fixed-asset/FixedAssetRoot";
import GoodReceiptRoot from "./erp/inventory-warehouse/good-receipt/GoodReceiptRoot";
import ProductsRoot from "./erp/inventory-warehouse/products/ProductsRoot";
import StockTransferRoot from "./erp/inventory-warehouse/stock-transfer/StockTransferRoot";
import WarehouseMapRoot from "./erp/inventory-warehouse/warehouse-map/WarehouseMapRoot";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
        children: [
            { index: true, Component: Dashboard },
            { path: "dashboard", Component: Dashboard },

            { path: "field-force/menu-1", Component: FieldForceMenu1 },
            { path: "field-force/menu-2", Component: FieldForceMenu2 },

            { path: "inventory/stock-on-hand", Component: StockOnHandRoot },
            { path: "inventory/adjustment", Component: AdjustmentRoot },
            { path: "inventory/fixed-asset", Component: FixedAssetRoot },
            { path: "inventory/good-receipt", Component: GoodReceiptRoot },
            { path: "inventory/products", Component: ProductsRoot },
            { path: "inventory/stock-transfer", Component: StockTransferRoot },
            { path: "inventory/warehouse-map", Component: WarehouseMapRoot },

            { path: "purchase/menu-1", Component: PurchaseMenu1 },
            { path: "purchase/menu-2", Component: PurchaseMenu2 },

            { path: "accounting/menu-1", Component: AccountingMenu1Root },
            { path: "accounting/menu-2", Component: AccountingMenu2Root },

            { path: "reports/menu-1", Component: ReportMenu1 },
            { path: "reports/menu-2", Component: ReportMenu2 },

            { path: "sales-demand/menu-1", Component: SalesMenu1 },
            { path: "sales-demand/menu-2", Component: SalesMenu2 },
        ],
    },
    {
        path: "/login",
        Component: LoginRoot,
    },
]);