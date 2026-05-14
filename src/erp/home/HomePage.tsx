import { Link } from "react-router";
import ThemeToggle from "../shared/components/ThemeToggle";
import LanguageSelect from "../shared/components/LanguageSelect";
import { useTranslation } from "react-i18next";

const modules = [
    {
        title: "sales_demand_module_title",
        desc: "sales_demand_module_desc",
        ns: "sales",
        icon: "users",
        color: "#185FA5",
        bg: "#E6F1FB",
        href: "/sales-demand",
    },
    {
        title: "field_force_module_title",
        desc: "field_force_module_desc",
        ns: "field",
        icon: "users",
        color: "#185FA5",
        bg: "#E6F1FB",
        href: "/field-force",
    },
    {
        title: "inventory_warehouse_module_title",
        desc: "inventory_warehouse_module_desc",
        ns: "inventory",
        icon: "tenants",
        color: "#854F0B",
        bg: "#FAEEDA",
        href: "/inventory-warehouse",
    },
    {
        title: "purchase_module_title",
        desc: "purchase_module_desc",
        ns: "purchase",
        icon: "jobs",
        color: "#0F6E56",
        bg: "#E1F5EE",
        href: "/purchase",
    },
    {
        title: "account_module_title",
        desc: "account_module_desc",
        ns: "accounts",
        icon: "search",
        color: "#534AB7",
        bg: "#EEEDFE",
        href: "/accounting-finance",
    },
    {
        title: "reports_module_title",
        desc: "reports_module_desc",
        ns: "reports",
        icon: "settings",
        color: "#993556",
        bg: "#FBEAF0",
        href: "/reports",
    },
    {
        title: "hrm_module_title",
        desc: "hrm_module_desc",
        ns: "home",
        icon: "users",
        color: "#993556",
        bg: "#FBEAF0",
        href: "/hrm",
    },
];

function HomePage() {

    const { t } = useTranslation();

    return (
        <div className="w-4/5 mx-auto p-6">
            <p className="text-sm ">{t("erp_system", { ns: "home" })}</p>
            <div className="flex items-baseline justify-between">
                <h1 className="text-2xl font-medium mb-6">{t("dashboard", { ns: "home" })}</h1>
                <LanguageSelect />
                <ThemeToggle />
                {/* <SignInOut /> */}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 list-none p-0">
                {modules.map((mod) => (
                    <Link
                        key={mod.title}
                        to={mod.href}
                        className="flex flex-col gap-3 p-5 rounded-xl border border-muted-foreground/30 hover:border-muted-foreground hover:-translate-y-0.5 transition-all no-underline group"
                    >
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                            style={{ background: mod.bg, color: mod.color }}
                        >
                            {/* <AppIcon name={mod.icon} /> */}
                        </div>
                        <div>
                            <p className="font-medium text-sm m-0">{t(mod.title, { ns: mod.ns })}</p>
                            <p className="text-xs  mt-1 m-0 leading-snug">{t(mod.desc, { ns: mod.ns })}</p>
                        </div>
                        <span className="text-sm mt-auto">→</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomePage;