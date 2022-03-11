import { IonButton } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setLanguage } from '../features/language';

export const LanguageSwitch: React.FC = () => {
    // get the current language
    const lang = useSelector((state: RootState) => state.language.lang);
    const dispatch = useDispatch();

    return (
        <IonButton onClick={() => dispatch(setLanguage(lang === 'en' ? 'de' : 'en'))}>
            {lang === 'en' ? 'DE' : 'EN'}
        </IonButton>
    );
}

export default LanguageSwitch;