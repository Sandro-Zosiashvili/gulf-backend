import {Injectable} from '@nestjs/common';
import {CreateNewsDto} from "./dto/create-news.dto";

interface News {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
}

@Injectable()
export class NewsService {
    findAll() {
        const news: CreateNewsDto[] = [
            {
                id: 1,
                title: 'გალფის სტიპენდიანტი',
                description: '24 ოქტომბერს ეროვნულ ბიბლიოთეკაში გალფის 2023-2024 წლის სასტიპენდიო პროგრამის სტუდენტებთან შეხვედრა გაიმართა, რომელსაც კომპანია გალფის მე...',
                image: 'https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/c7a55b06-faf0-4f5e-1823-22bb02134000/fit=scale-down,width=960',
                date: '24 ოქტომბერი 2023',
            },
            {
                id: 2,
                title: 'მოუარე საქართველოს',
                description: 'გახდი შენი ქვეყნის მიკროგმირი - მოუარე საქართველოს, ნორიოს პოლიგონის მიმდებარედ არსებული “პოლიეთილენის ტყე”, სადაც ხეები ...',
                image: 'https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/2d7f098a-9859-4da6-6985-ad7fad06da00/fit=scale-down,width=960',
                date: '10 ივნისი 2023',
            },
            {
                id: 3,
                title: 'შემოდგომის ლეგენდა 2023',
                description: 'გალფის ვიცე პრეზიდენტმა ნინო ჯიბლაძემ და თბილისის სახელმწიფო უნივერსტეტის რექტორმა ჯაბა სამუშიამ ერთობლივი პროექტის „შემოდგომის ლეგენდა 2...',
                image: 'https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/64a794e4-83e4-4021-d13e-23a5c66fc800/fit=scale-down,width=960',
                date: '18 სექტემბერი 2023',
            },
            {
                id: 4,
                title: 'ზაზა ფაჩულიას მოედნები',
                description: 'ქალაქ რუსთავში ზაზა ფაჩულიას სახელობის გალფის რიგით მეოთხე საკალათბურთო მოედანი გაიხსნა, რომელიც კომპანია გალფის და რუსთავის ადგილობ...',
                image: 'https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/8cbc5403-d495-46d8-89f8-a91c43eb8d00/fit=scale-down,width=960',
                date: '29 ივლისი 2023',
            },
        ];

        return news;
    }
}
