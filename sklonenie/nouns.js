const RussianNouns = require('russian-nouns-js');

const rne = new RussianNouns.Engine();

const Ⰳ = (word, caseNumber) => {
    const c = RussianNouns.CASES[caseNumber - 1];
    return rne.decline(word, c)[0];
};

//Чтобы отобразить второй вариант при нескольких вариантах склонения
const Ⰴ = (word, caseNumber) => {
    const c = RussianNouns.CASES[caseNumber - 1];
    const result = rne.decline(word, c);
    return result[result.length - 1];
};

const ⰃⰃ = (word, caseNumber) => {
    const c = RussianNouns.CASES[caseNumber - 1];
    const pluralForm = rne.pluralize(word)[0];
    return rne.decline(word, c, pluralForm)[0];
};

const L = RussianNouns.createLemma;
const Gender = RussianNouns.Gender;

/**
 *  FEMININE = 'женский',
    MASCULINE = 'мужской',
    NEUTER = 'средний',
    COMMON = 'общий',
 */


//const cap = (str) => str[0].toUpperCase() + str.substring(1);

/** LemmaOptions {
    text: string;
    gender?: Gender[keyof Gender] | undefined;
    indeclinable?: boolean | undefined;
    pluraleTantum?: boolean | undefined;
    animate?: boolean | undefined;
} */


const lemmaForAlias = L({text: 'вакханка', gender: Gender.FEMININE})


let a = RussianNouns.CASES.map(c => {
    return rne.decline(lemmaForAlias, c);
});

let aa = RussianNouns.CASES.map(c => {
    const pluralForm = rne.pluralize(lemmaForAlias)[0];
    return rne.decline(lemmaForAlias, c, pluralForm);
})

a = a.concat(aa);

let b = [].concat.apply([], a)

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  

let unique = b.filter(onlyUnique)
/**
Пример:
console.log(`${cap(Ⰳ(буря, 1))} ${Ⰴ(мгла, 5)} ${Ⰳ(небо, 4)} кроет,
${cap(ⰃⰃ(вихрь, 4))} снежные крутя;
То, как ${Ⰳ(зверь, 1)}, она завоет,
То заплачет, как ${Ⰳ(дитя, 1)},
То по ${Ⰳ(кровля, 3)} обветшалой
Вдруг ${Ⰳ(солома, 5)} зашумит,
То, как ${Ⰳ(путник, 1)} запоздалый,
К нам в ${Ⰳ(окошко, 4)} застучит.`);



console.log(`- ${cap(Ⰳ(lemmaForAlias, 1))},
- ${cap(Ⰳ(lemmaForAlias, 2))}
- ${cap(Ⰳ(lemmaForAlias, 3))}
- ${cap(Ⰳ(lemmaForAlias, 4))}
- ${cap(Ⰳ(lemmaForAlias, 5))}
- ${cap(Ⰳ(lemmaForAlias, 6))}
- ${cap(Ⰴ(lemmaForAlias, 1))}
`);
**/

console.log(`- ${unique.join('\n- ')}`);
// console.log(RussianNouns.getDeclension(lemmaForAlias));




