export class EnvCompute{
    idCompute!:any;
    classOfCompute!:any;
    qty!:any;
    spareQty!:any;
    vcpu!:any;
    cpu!:any;
    annee!:any;
    vram!:any;
    bcvcpu!:any;
    bcvram!:any;
    bcngvcpu!:any;
    bcngvram!:any;
    icvcpu!:any;
    icvram!:any;
    sfps!:any;
    sfpspare!:any;
    availablity!:Availablity;


}
export enum Availablity {
    Available='available',
    Required='required'
}