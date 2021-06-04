import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * example: localhost:3000/getText/Ani
   * @param param
   * @returns 
   */
  @Get("/getText/:regex")
  async getText(@Param() param) {
    return await this.appService.getText(param.regex);
  }

}
