import { slugifyLetters } from './slugifyLetters';
import { genderMap } from './genderMap';

export const getCategoryUrl = (category) =>
    `/shop/${genderMap[category.gender]}/${slugifyLetters(category.title)}/${category.id}`;