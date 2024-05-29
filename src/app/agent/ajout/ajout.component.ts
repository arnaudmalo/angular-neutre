import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {Agent} from "../agent";
import {AgentService} from "../agent.service";
import {Router} from "@angular/router";
import {DividerModule} from "primeng/divider";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-ajout',
  standalone: true,
    imports: [
        FormsModule,
        DatePipe,
        DividerModule,
        SharedModule,
        InputTextModule,
        ButtonModule
    ],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.scss'
})
export class AjoutComponent {
    agent: Agent = new Agent();
    @ViewChild('agentForm') form!: NgForm;


    constructor(private agentService : AgentService,
                private  router : Router) {
    }

    clear(){
        this.form.resetForm();
    }

    /* Enregistrer l'agent  */
    saveAgent(){
        this.agentService.createAgent(this.agent).subscribe( data =>{
                console.log(data);
                this.goToAgentList();
            },
            error => console.log(error));
    }
    /* Liste des l'Agents dans la page Agent  */
    goToAgentList(){
        this.router.navigate(['/agent']);
    }

    /* Enregistrer l'agent dans La ReactiveForm */
    onSubmit(){
        console.log(this.agent);
        this.saveAgent();
    }
}
