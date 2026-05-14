import { Outlet } from "react-router";
import PageLayout from "../shared/components/PageLayout";

function AccountingFinanceRoot() {
    return (
        <PageLayout>
            <Outlet />
        </PageLayout>
    );
}

export default AccountingFinanceRoot;