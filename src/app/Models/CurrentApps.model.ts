export class Resources { 
    idResources!:any;
    name!:any;
    annee!:any;
    bcVcpu!:any;
    bcRam!:any;
    bcNgVcpu!:any;
    bcNgRam!:any;
    icVcpu!:any;
    icRam!:any;
    perfStrorage!:any;
    capaStorage!:any;
    hypothesys!:any;
    
    type!:TypeResource;

  }
  export enum TypeResource {
    CurrAppOIaaS = 'CurrAppOIaaS',
    CurrAppLocalPaaS = 'CurrAppLocalPaaS',
    CurrRessLocalPaaS = 'CurrRessLocalPaaS',
  }