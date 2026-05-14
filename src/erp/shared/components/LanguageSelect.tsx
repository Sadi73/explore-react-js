import { Select } from "antd";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
    const { i18n } = useTranslation();

    return (
        <Select
            value={i18n.language}
            style={{ width: 140 }}
            onChange={(value) => i18n.changeLanguage(value)}
            options={[
                {
                    label: "English",
                    value: "en",
                },
                {
                    label: "বাংলা",
                    value: "bn",
                },
            ]}
        />
    );
}