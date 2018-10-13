import { Sonde } from "./sonde";

export interface Newsondage {
    id?:Number;
    Date:Date;
    idFormulaire:Number;
    List:string[];
    Sonde:Sonde;
}
