import { Outlet } from "react-router";
import PageLayout from "../shared/components/PageLayout";

function FieldForceRoot() {
    return (
        <PageLayout>
            <Outlet />
        </PageLayout>
    );
}

export default FieldForceRoot;