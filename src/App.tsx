import { useTranslation } from 'react-i18next';
import LanguageSelect from './erp/shared/components/LanguageSelect';
import ThemeToggle from './erp/shared/components/ThemeToggle';

function App() {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-2xl font-bold underline'>Learn - Learn - Learn</p>
      <p className='text-xl text-danger'>This is an empty react project</p>

      <div className='flex gap-2'>
        <ThemeToggle />

        <LanguageSelect />
      </div>

      <h1>{t("welcome")}</h1>

      <p>{t("hello", { name: "Sadi" })}</p>
    </div>
  )
}

export default App
