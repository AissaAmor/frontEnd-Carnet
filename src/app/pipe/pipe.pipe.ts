import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipe"
})
export class PipePipe implements PipeTransform {
  transform(value: any[], searchText: string): any {
    if (searchText === "" || searchText === null || searchText === undefined) {
      return value;
    }
    return value.filter(p => p.name.includes(searchText));
  }
}
