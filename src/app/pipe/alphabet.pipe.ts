import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "alphabet"
})
export class AlphabetPipe implements PipeTransform {
  transform(profils: any[], alpha: string): any {
    if (alpha === "" || alpha === undefined || alpha === null) {
      return profils;
    }

    return profils.filter(item => item.name.startsWith(alpha));
  }
}
