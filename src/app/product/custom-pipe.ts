import {Pipe,PipeTransform } from "@angular/core";



@Pipe({
    name:'ConvertToSpaces'
})

export class ConvertToSpacesPipes implements PipeTransform{
transform (value:string , character:string):string{


return value.replace(character, ' ');
}
}