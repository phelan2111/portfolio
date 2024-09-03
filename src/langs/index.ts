import { useAppSelector } from '@/hooks/redux';
import { dataLangue } from '@/redux/slice/langue';
import { Langue } from '@/utils/enums';
import { dataLocalizeEN } from '@/langs/data/en';
import { dataLocalizeVI } from '@/langs/data/vi';

function Localize(localize: string) {
	const lang = useAppSelector(dataLangue);
	switch (lang) {
		case Langue.vietNamese:
			return dataLocalizeVI[localize];
		default: {
			return dataLocalizeEN[localize];
		}
	}
}

export default Localize;
