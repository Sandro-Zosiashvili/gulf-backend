import {Injectable} from '@nestjs/common';
import {CreateAdvantageDto} from './dto/create-advantage.dto';
import {UpdateAdvantageDto} from './dto/update-advantage.dto';

@Injectable()
export class AdvantagesService {


    findAll() {
        const data: CreateAdvantageDto[] = [{
            id: 1,
            title: " საწვავის ხარჯვის შემცირება",
            description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
        }, {
            id: 2,
            title: " საწვავის ხარჯვის შემცირება",
            description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
        }, {
            id: 3,
            title: " საწვავის ხარჯვის შემცირება",
            description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
        }, {
            id: 4,
            title: " საწვავის ხარჯვის შემცირება",
            description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
        },]
        return data;
    }

}
