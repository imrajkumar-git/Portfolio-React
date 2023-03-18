
import Resume from "../../Assets/resumes.pdf"
import { useTranslation} from 'react-i18next';

export const CTA = () =>{
    const { t } = useTranslation();

    return (
        <div className="cta">
            <a href={Resume} download="rajkumar's resume"><button className="glow-on-hover" type="button">{t('Download Resume')} </button>
</a>
<a href="#contact" >            <button className="glow-on-hover" type="button">{t('Hire Me')}</button>
</a>
        </div>
    )
}
