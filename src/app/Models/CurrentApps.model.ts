export class Resources { 
    idResources!:any;
    name!:any;
    annee!:any;
    bcVcpu!:any;
    bcRam!:any;
    bcNgVcpu!:any;
    bcNgRam!:any;
    icVcpuU!:any;
    icRam!:any;
    perfStrorage!:any;
    capaStorage!:any;
    Hypothesys!:any;
    
    typeResource!:TypeResource;

  }
  export enum TypeResource {
    CurrAppOIaaS = 'CurrAppOIaaS',
    CurrAppLocalPaaS = 'CurrAppLocalPaaS',
    CurrRessLocalPaaS = 'CurrRessLocalPaaS',
  }