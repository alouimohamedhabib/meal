import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cleanCategorieNames",
})
export class CleanCategorieNamesPipe implements PipeTransform {
  transform(value: any): any {
    if (value === undefined) return "undefined";
    return value.replace(/\s/g, "");
  }
}
