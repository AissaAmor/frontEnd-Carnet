import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipe"
})
export class PipePipe implements PipeTransform {
  transform(value: any[], Search: string): any {
    if (Search === "" || Search === null || Search === undefined) {
      return value;
    }
    return value.filter(p => p.firstName.includes(Search));
  }
}
