import { TipZaduzenja } from './tip-zaduzenja';
import { Zemljiste } from './zemljiste';

export class ZaduzenjeZem {
    id: number;
    tip: TipZaduzenja;
    zemljiste: Zemljiste;
    opis: string;
    zem_namena: string;
    ko: string;
    ln: string;
    parcela: string;
    kultura: string;
    potes: string;
    cena: number;
    povrsina: number;
    vrednost: number;
    zona: string;
    zona_koef: number;
    kvalitet: string;
    kvalitet_koef: number;
    udeo1: number;
    udeo2: number;
    osovica: number;
    stopa: number;
    iznos: number;
    dug: number;
    kamata: number;

}
