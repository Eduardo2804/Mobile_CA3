import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  episode: Observable<any>;
  episodeId = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
    })
    }
}
