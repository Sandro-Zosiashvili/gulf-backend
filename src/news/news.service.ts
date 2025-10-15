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
                title: 'გალფმა დაიწყო ახალი კამპანია',
                description: 'გალფმა მომხმარებლებისთვის წამოიწყო განსაკუთრებული ფასდაკლების აქცია საწვავზე.',
                image: 'https://b.gulf.ge/news1.png',
                date: '2025-10-15',
            },
            {
                id: 2,
                title: 'გალფი ლიდერია საწვავის ბაზარზე',
                description: 'გალფი აგრძელებს ხარისხისა და სერვისის სტანდარტების ამაღლებას საქართველოში.',
                image: 'https://b.gulf.ge/news2.png',
                date: '2025-10-10',
            },
            {
                id: 3,
                title: 'ახალი სადგური ბათუმში',
                description: 'გალფმა გახსნა ახალი თანამედროვე სადგური ბათუმის შემოსასვლელში.',
                image: 'https://b.gulf.ge/news3.png',
                date: '2025-09-30',
            },
            {
                id: 4,
                title: 'გალფი ზრუნავს ეკოლოგიაზე',
                description: 'კომპანია გალფი იწყებს ეკო-ინიციატივას გარემოს დაცვის ხელშეწყობისთვის.',
                image: 'https://b.gulf.ge/news4.png',
                date: '2025-09-20',
            },
        ];

        return news;
    }
}
