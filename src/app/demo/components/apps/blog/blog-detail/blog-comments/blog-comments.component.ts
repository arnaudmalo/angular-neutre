import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../../../api/blog';

@Component({
    selector: 'app-blog-comments',
    templateUrl: './blog-comments.component.html'
})
export class BlogCommentsComponent implements OnInit{
    ngOnInit(): void {
    }

    @Input() comments: Comment[] = [];

    rowCount = 3;

}
