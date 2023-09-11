export class EnvStorage{
    idStorage!:any;
    classOfStorage!:any;
    rnge!:any;
    qty!:any;
    spareQty!:any;
    sfpspare!:any;
    sfps!:any;
    grossVolume!:any;
    netVolume!:any;
    perfGrossVolume!:any;
    capaNetVolume!:any;
    perfNetVolume!:any;
    capaGrossVolume!:any;
    annee!:any;
    availablity!:Availablity;


}
export enum Availablity {
    Available='available',
    Required='required'
}