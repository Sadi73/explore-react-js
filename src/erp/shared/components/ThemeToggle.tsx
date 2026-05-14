import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "../../../providers/ThemeProvider";

function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div>
            <Button type="default" onClick={toggleTheme}>
                {/* Toggle Theme */}
                {isDarkMode ? (
                    <div className="flex flex-row items-center gap-2">
                        <SunOutlined /> Light
                    </div>
                ) : (
                    <div className="flex flex-row items-center gap-2">
                        <MoonOutlined /> Dark
                    </div>
                )}
            </Button>
        </div>
    )
}
export default ThemeToggle;