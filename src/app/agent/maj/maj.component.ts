import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AgentService} from "../agent.service";
import {Agent} from "../agent";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-maj',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './maj.component.html',
  styleUrl: './maj.component.scss'
})
export class MajComponent {


    id: number;
    agent: Agent = new Agent();
    constructor(private agentService: AgentService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.agentService.getAgentById(this.id).subscribe(data => {
            this.agent = data;
        }, error => console.log(error));
    }

    onSubmit(){
        this.agentService.updateAgent(this.id, this.agent).subscribe( data =>{
                this.goToAgentList();
            }
            , error => console.log(error));
    }

    goToAgentList(){
        this.router.navigate(['/agents']);
    }
}
