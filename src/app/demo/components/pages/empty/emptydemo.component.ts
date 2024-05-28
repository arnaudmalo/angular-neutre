import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent implements OnInit { 



 items!:MenuItem[];

    ngOnInit(): void {
        this.items = [
            {
                label: 'Administration',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Utilisateurs',
                        icon: 'pi pi-fw pi-users',
                       
                    },
                    {
                        label: 'Profile',
                        icon: 'pi pi-fw pi-user'
                    },
                    {
                        separator: true
                    },
                  
                ]
            },
            {
                label: "Secteur d'activités",
                icon: 'pi pi-fw chart-line',
                items: [
                    {
                        label: 'Activité',
                        icon: 'pi pi-fw pi-align-left',
                        items:[
                            {
                                label: "Groupe d'activité",
                                icon: 'pi pi-fw pi-align-right'
                            },
                            {
                                label: 'Activités NAEMA',
                                icon: 'pi pi-fw pi-align-center'
                            },
                            {
                                label: "Groupe d'activité NAEMA",
                                icon: 'pi pi-fw pi-align-justify'
                            }
                        ]
                    },
                    
                ]
            },
            {
                label: 'Codifications',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Fiscalité',
                        icon: 'pi pi-fw pi-file',
                        items:[
                            {
                                label: 'Situation',
                                icon: 'pi pi-fw pi-user-minus'
                            },
                            {
                                label: "Motif d'une opération",
                                icon: 'pi pi-fw pi-user-minus'
                            },
                            {
                                label: 'Régime fiscal',
                                icon: 'pi pi-fw pi-user-minus'
                            },
                        ]
                    },
                    {
                        label: 'Documents',
                        icon: 'pi pi-fw pi-user-minus',
                        items:[
                            {
                                label: 'Type de pièce',
                                icon: 'pi pi-fw pi-user-minus'
                            },
                            {
                                label: 'Nationalité',
                                icon: 'pi pi-fw pi-flag'
                            },
                            {
                                label: 'Classe de document',
                                icon: 'pi pi-fw pi-file'
                            },
                        ]
                    },
                    {
                        label: 'Etablissements',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Zone Spéciale',
                                icon: 'pi pi-fw pi-map',
                                items: [
                                    {
                                        
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-building',
                                label: 'Rubrique de DCI'
                            },

                            {
                                icon: 'pi pi-fw pi-home',
                                label: 'Etablissement'
                            },
                            {
                                icon: 'pi pi-fw pi-building',
                                label: 'Type de propriété'
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Territoire',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Villages/Secteur',
                        icon: 'pi pi-fw pi-pencil',
                        
                    },
                    {
                        label: 'Arrondissement',
                        icon: 'pi pi-fw pi-calendar-times',
                     
                    },

                    {
                        label: 'Département',
                        icon: 'pi pi-fw pi-calendar-times',
                      
                    }
                ]
            },
         
        ];
    }
}
