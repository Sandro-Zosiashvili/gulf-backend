import {Injectable} from '@nestjs/common';
import {CreateServiceDto} from './dto/create-service.dto';
import {UpdateServiceDto} from './dto/update-service.dto';

@Injectable()
export class ServicesService {

    findAll() {
        const data : CreateServiceDto[] = [
            {
                id: 1,
                title: "Gulf club - ქულების დაგროვების სისტემა",
                description: "Gulf Club ის სახით კომპანია გალფი თავის მომხმარებელს მომენტალური ფასდაკლებისა და ქულების დაგროვების ბარათს სთავაზობს."
            },
            {
                id: 2,
                title: "Gulf store - ყველაფერი ერთ სივრცეში",
                description: "Gulf Store კომპანიის ახალი პროექტია, სადაც მომხმარებელი შეხვდება ყოველდღიური მოხმარების სხვადასხვა საგნებს."
            }, {
                id: 3,
                title: "Gulf store - ყველაფერი ერთ სივრცეში",
                description: "Gulf Store კომპანიის ახალი პროექტია, სადაც მომხმარებელი შეხვდება ყოველდღიური მოხმარების სხვადასხვა საგნებს."
            }, {
                id: 4,
                title: "საერთაშორისო ბარათები",
                description: "E100 და Aris Baltija-ს ბარათების გამოყენება მთელი საქართველლოს მასშტაბით"
            }, {
                id: 5,
                title: "ტალონი",
                description: "მოქნილი სატალონე მომსახურება თქვენი ბიზნესისთვის"
            },

        ]

        return data;
    }

}
