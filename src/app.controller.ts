import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

    @Get('/')
    index() {
        return "Hola mundo desde NestJS";
    }

}