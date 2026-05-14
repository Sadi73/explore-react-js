import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function FeatureInProgress() {
    const { t } = useTranslation('common');
    return (
        <div className="flex h-[calc(100vh-120px)] items-center justify-center p-6">
            <div className="relative w-full max-w-2xl text-center space-y-8 animate-in fade-in zoom-in duration-700">
                {/* Decorative background elements */}
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />

                <div className="relative space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-foreground">
                        {t('feature_under_development')}
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        {t('building_message')}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto px-8 py-2.5 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 text-center"
                    >
                        {t('back_to_dashboard')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeatureInProgress;