import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function Sobre() {
    const t = useTranslations('About');

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center justify-center w-2/4 my-10">
                <Image src={"/carlos_david.jpeg"} alt="foto de Carlos David" className="rounded-full mb-2" width={150} height={150}/>
                <p className='indent-6 mb-2 tracking-wider'>{t('span1')}</p>
                <p className='indent-6 mb-2 tracking-wider'>{t('span2')}</p>
                <p className='indent-6 mb-2 tracking-wider'>{t('span3')}</p>
                <p className='indent-6 mb-2 tracking-wider'>{t('span4')}</p>
            </div>
        </div>
    )
}