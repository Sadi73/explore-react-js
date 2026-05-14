import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import bnCommon from "./locales/bn/common.json";

import enAuth from "../erp/auth/locales/en.json";
import bnAuth from "../erp/auth/locales/bn.json";

import enHome from "../erp/home/locales/en.json";
import bnHome from "../erp/home/locales/bn.json";

import enAccounts from "../erp/accounting-finance/locales/en.json";
import bnAccounts from "../erp/accounting-finance/locales/bn.json";

import enField from "../erp/field-force/locales/en.json";
import bnField from "../erp/field-force/locales/bn.json";

import enInventory from "../erp/inventory-warehouse/locales/en.json";
import bnInventory from "../erp/inventory-warehouse/locales/bn.json";

import enPurchase from "../erp/purchase/locales/en.json";
import bnPurchase from "../erp/purchase/locales/bn.json";

import enReports from "../erp/reports/locales/en.json";
import bnReports from "../erp/reports/locales/bn.json";

import enSales from "../erp/sales-demand/locales/en.json";
import bnSales from "../erp/sales-demand/locales/bn.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: enCommon,
                auth: enAuth,
                home: enHome,
                accounts: enAccounts,
                field: enField,
                inventory: enInventory,
                purchase: enPurchase,
                reports: enReports,
                sales: enSales,
            },
            bn: {
                common: bnCommon,
                auth: bnAuth,
                home: bnHome,
                accounts: bnAccounts,
                field: bnField,
                inventory: bnInventory,
                purchase: bnPurchase,
                reports: bnReports,
                sales: bnSales,
            },  
        },

        fallbackLng: "en",

        ns: ["common"],
        defaultNS: "common",

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
    });

export default i18n;