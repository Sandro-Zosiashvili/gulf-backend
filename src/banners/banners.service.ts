import {Injectable} from '@nestjs/common';
import {CreateBannerDto} from './dto/create-banner.dto';
import {UpdateBannerDto} from './dto/update-banner.dto';

@Injectable()
export class BannersService {


    findAll() {
        const banners = [
            {
                id: 1,
                title: "დაიბრუნე ქეშბექი ქულების სახით",
                image: "https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/2a9b05c3-8939-4712-ef9b-a6c720b9c200/fit=scale-down,width=1920"

            },
            {
                id: 2,
                title: "ბიზნეს ბარათის და ჯიპიეს სისტემის ინტეგრაცია",
                image: "https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/d2901ead-9d87-4906-c896-560c61744500/fit=scale-down,width=1920"

            }, {
                id: 3,
                title: "ჩიპის სისტემა",
                image: "https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/35671376-698a-4b5b-e355-dcd9d5162c00/fit=scale-down,width=1920"

            }, {
                id: 4,
                title: "მობილური სადგურისა და საბარათე სისტემის ინტეგრაცია",
                image: "https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/6b0c1414-f1f2-443e-bb7f-db8a690d5a00/fit=scale-down,width=1920"

            },
        ]
        return banners;
    }

}
