import { Outlet } from "react-router";
import PageLayout from "../shared/components/PageLayout";

function PurchaseRoot() {
    return (
        <PageLayout>
            <Outlet />
        </PageLayout>
    );
}

export default PurchaseRoot;