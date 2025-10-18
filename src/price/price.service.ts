import {Injectable} from '@nestjs/common';
import {CreatePriceDto} from './dto/create-price.dto';
import {UpdatePriceDto} from './dto/update-price.dto';

@Injectable()
export class PriceService {

    findAll() {

        const data: CreatePriceDto[] = [
            {
                id: 1,
                title: "G-Force სუპერი",
                price: "3.74₾"
            }, {
                id: 2,
                title: "G-Force პრემიუმი",
                price: "3.39₾"
            }, {
                id: 3,
                title: "G-Force რეგულარი",
                price: "3.24₾"
            }, {
                id: 4,
                title: "ევრო რეგულარი",
                price: "3.09₾"
            }, {
                id: 5,
                title: "G-Force ევრო დიზელი",
                price: "4.09₾"
            },
            {
                id: 6,
                title: "ევრო დიზელი",
                price: "3.99₾"
            }, {
                id: 7,
                title: "გაზი",
                price: "1.69₾"
            },
        ]
        return data;
    }


}
