import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'titlecase'})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const words = value.split(' ');
    const titleCasedWords = words.map(word => {
        if (word.toLocaleLowerCase() == "the" || word.toLocaleLowerCase() == "of") {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    let firstWord = titleCasedWords[0].charAt(0).toUpperCase() + titleCasedWords[0].slice(1).toLowerCase();
    titleCasedWords[0] = firstWord;


    return titleCasedWords.join(' ');
  }

}