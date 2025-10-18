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
            title: "უვადო RFID ბარათის უფასოდ მიღება",
            description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
        }, {
            id: 3,
            title: "რეპორტინგის მეშვეობით სრული ანგარიშების მიღება",
            description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
        }, {
            id: 4,
            title: "კორპორატიული მომსახურების მიღება",
            description: "Gulf card არის კორპორატიული ბარათი, საწვავის ტალონებით შესყიდვის თანამედროვე შემცვლელი."
        },]
        return data;
    }

}
