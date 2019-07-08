import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';
import { VotingAlgorithm } from '../algorithms/voting-algorithm-interface';
import { VoteSelection } from '../algorithms/vote-selection';
import { VoteResult } from '../algorithms/vote-result';
import { ResultGroup } from '../final-order/result-group';
import { EliminationAlgorithmService } from '../algorithms/elimination/elimination-algorithm.service';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})

export class VotingComponent implements OnInit {
  @Input() photos: Photo[];
  @Input() algorithm: VotingAlgorithm;

  public photoA: Photo;
  public photoB: Photo;
  public isFinished: boolean;
  public quantityOfRemainingRounds: number;
  public results: ResultGroup[];

  constructor() {
    // TODO: Inject.
    this.algorithm = new EliminationAlgorithmService();
    this.algorithm.initialize(5);
    let photoService = new PhotosService();
    this.photos = photoService.getPhotos();
  }

  ngOnInit() {
    this.initializeVoting();
  }

  onVoted(photo: string) {
    this.applyVote(photo);
  }

  private initializeVoting() {
    this.isFinished = false;
    this.updateView();
  }

  private applyVote(votedForIndex: string) {
    if (votedForIndex == 'a') {
      this.algorithm.voteFor(VoteSelection.OptionA);
    }
    else if (votedForIndex == 'b') {
      this.algorithm.voteFor(VoteSelection.OptionB);
    }
    else {
      // Add error.
      return;
    }

    this.updateView();
  }

  private updateView() {
    if (this.algorithm.getRemainingQuantityOfRounds() == 0) {
      this.isFinished = true;
      this.results = this.convertResult(this.algorithm.getResults());
      return;
    }

    let voteOptions = this.algorithm.getVoteOptions();
    this.photoA = this.photos[voteOptions.optionA];
    this.photoB = this.photos[voteOptions.optionB];
    this.quantityOfRemainingRounds = this.algorithm.getRemainingQuantityOfRounds();
  }

  private convertResult(results: VoteResult[]): ResultGroup[] {
    type ResultMap = Record<number, ResultGroup>;
    let output: ResultMap = {};
    for (let result of results) {
      if (!output.hasOwnProperty(result.score)) {
        output[result.score] = { score: result.score, photos: new Array(0)};
      }

      output[result.score].photos.push(this.photos[result.elementIndex]);
    }

    return Object.values(output).reverse();
  }
}
