import { Outlet } from "react-router";
import PageLayout from "../shared/components/PageLayout";

function ReportsRoot() {
    return (
        <PageLayout>
            <Outlet />
        </PageLayout>
    );
}

export default ReportsRoot;