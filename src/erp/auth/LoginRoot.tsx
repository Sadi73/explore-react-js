import { useTranslation } from "react-i18next";

function LoginRoot() {
    const { t } = useTranslation("auth");
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="bg-surface border border-border rounded-xl p-8 w-full max-w-sm">

                <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center mb-5 text-background text-base">
                    ⚙
                </div>

                <h1 className="text-lg font-medium text-foreground mb-1">{t('welcome_back')}</h1>
                <p className="text-sm text-muted-foreground mb-6">{t('sign_in_message')}</p>

                {/* <LoginForm /> */}

            </div>
        </div>
    );
}

export default LoginRoot;