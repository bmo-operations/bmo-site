import { BioQuestion } from "./BioQuestion";

export interface Player {
    id: string,
    name: string,
    captain: boolean,
    number: number,
    class: number,
    nickname: string,
    height: string,
    hometown: string,
    highSchool: string,
    concentration: string,
    bioQuestions: BioQuestion[],
}