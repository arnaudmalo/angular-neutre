import {Component, OnInit} from '@angular/core';
import {Agent} from "../agent";
import {ActivatedRoute} from "@angular/router";
import {AgentService} from "../agent.service";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements  OnInit{

    id: number
    agen: Agent
    constructor(private route: ActivatedRoute, private agentService: AgentService) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.agen = new Agent();
        this.agentService.getAgentById(this.id).subscribe( data => {
            this.agen = data;
        });
    }

}
