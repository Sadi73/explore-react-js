import { Outlet } from "react-router";
import PageLayout from "../shared/components/PageLayout";

function SalesDemandRoot() {
    return (
        <PageLayout>
            <Outlet />
        </PageLayout>
    );
}

export default SalesDemandRoot;