export class EnvControlNetwork{
    idControlNetwork!:any;
    classOfControlNetwork!:any;
    qty!:any;
    spareQty!:any;
    sfpspare!:any;
    sfps!:any;
    annee!:any;
    availablity!:Availablity;


}
export enum Availablity {
    Available='available',
    Required='required'
}