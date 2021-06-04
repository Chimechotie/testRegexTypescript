import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getText(regEx: string) {
    console.log("debug")
    const fetch = require("node-fetch");
    let source;
    let res = [];
    await fetch("https://api.publicapis.org/categories")
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(parseJson) {
          source=parseJson
        }
      );
    
      const pattern = new RegExp(".*(" + regEx + ").*");
    
    source.forEach(value => {
      if (pattern.test(value)){
        res.push(value);
      }
    });
    // console.log(res);
    return res;
  }
}
