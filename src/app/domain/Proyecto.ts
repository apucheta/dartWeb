export class Proyecto {
    zona: string;
    barrio: string;
    area: string;
    lote: string;
    planta: number;
    superficie: ProyectoSuperficie;
    locales: ProyectoLocales;
}

class ProyectoLocales {
    cubierta: number;
    semicubierta: number;
    pileta: number;
    total: number;
}

class ProyectoSuperficie {
    estar: number;
    comedor: number;
    cocina: number;
    dormitorio: number;
    vestidor: number;
    estudio: number;
    bano: number;
    toilette: number;
    lavadero: number;
    baulera: number;
    galeria: number;
}