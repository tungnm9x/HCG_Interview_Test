import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';
import { ResultItem } from '@core/models/response.model';
import { GenerationService } from '@core/services/generation.service';
import { VersionService } from '@core/services/version.service';
import { map } from 'rxjs';

@Component({
  selector: 'nmt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;

  version$ = this.versionService.getAll().pipe(map((res) => res.results));

  generations$ = this.generationService
    .getAll()
    .pipe(map((res) => res.results));

  constructor(
    private versionService: VersionService,
    private generationService: GenerationService
  ) {}

  ngOnInit(): void {}

  trackByFn(index: number, item: ResultItem) {
    return item.name;
  }
}
