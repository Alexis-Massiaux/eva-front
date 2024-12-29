export class StringEnumUtil {

  static getEnumKeyByValue(enumObj: any, value: string): string {

    for (let currentEnum of Object.entries(enumObj)) {
      if (currentEnum[1] === value) {
        return currentEnum[0];
      }
    }
    return '';
  }

  static getEnumValueByKey(enumObj: any, key: string): string {
    for (let currentEnum of Object.entries(enumObj)) {
      if (currentEnum[0] === key) {
        return <string>currentEnum[1];
      }
    }
    return '';
  }

}
