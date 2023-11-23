import { BadRequestException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";

@Injectable()
export default class AppService {
  /**
   * Basic Hello World function!
   *
   * @author Charles COLELLA
   * @date 23/11/2023
   * @param {string} [name]
   * @return {*}  {string}
   * @memberof AppService
   */
  getHello(name?: string): string {
    const nameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
    if (!name || !nameRegex.test(name))
      throw new BadRequestException("Invalid name");

    return `Hello World ${name}!`;
  }
}
