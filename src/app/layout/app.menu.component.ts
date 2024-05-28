import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    model1:any[] = []

    ngOnInit() {
        this.model = [
            {
                label:'',
                icon: 'pi pi-fw pi-home',
                items:[
                    {
                        label:"Tableau de bord",
                        routerLink:["/"]
                    }
                ]

            },
            {
                items: [
                    {
                        label: 'Actes',
                        icon: 'pi pi-fw pi-folder-open',

                        items:[
                            {
                              label:'Avancement',
                              icon:'pi pi-fw pi-user',
                                routerLink:[]
                            },
                            {
                                label:'Décision annuelle',
                                icon:'pi pi-fw pi-user',
                                routerLink:[]
                            },


                        ]
                    },
                    {
                        label: 'Certificat',
                        icon: 'pi pi-fw pi-folder-open',

                        items:[
                            {
                                label:'Administratif',
                                icon:'pi pi-fw pi-users',
                                routerLink:[]
                            },

                            {
                                label:'Prise de service',
                                icon:'pi pi-fw pi-user',
                                routerLink:[]
                            },

                        ]
                    },
                    {
                        label: 'Parametres',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/dashboard-banking'],

                        items: [
                            
                            {
                                label: 'Roles',
                                icon: 'pi pi-fw pi-user-minus',
                                routerLink: ['/administration/parametres/roles'],
                            },
                            {
                                label: "Départements",
                                icon: 'pi pi-fw pi-user-minus',
                                routerLink: ['/administration/parametres/departements'],
                            },
                            {
                                label: "Décrets",
                                icon: 'pi pi-fw pi-user-minus',
                                routerLink: ['/administration/parametres/decrets'],

                            },   
                        ],
                    },

                            {
                                label: 'Administration',
                                icon: 'pi pi-fw pi-user',
                                items: [
                                    {
                                        label: 'Utilisateurs',
                                        icon: 'pi pi-fw pi-users',

                                    },
                                    {
                                        separator: true
                                    },

                                ]


                    }

                ]
            },


        ];
    }
}
