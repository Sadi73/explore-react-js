import { Outlet } from "react-router";
import PageLayout from "../shared/components/PageLayout";

function HomePage() {
    return (
        <PageLayout>
            <Outlet />
        </PageLayout>
    );
}

export default HomePage;