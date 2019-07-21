import { Injectable } from '@angular/core';
import { VoteOptions } from '../vote-options';
import { VoteSelection } from '../vote-selection';
import { VotingAlgorithm } from '../voting-algorithm-interface';
import { VoteResult } from '../vote-result';

@Injectable({
  providedIn: 'root'
})

export class EliminationAlgorithmService implements VotingAlgorithm {
  readonly totalDesiredScore = 1000;

  private isInitialized: boolean;
  private remainingRounds: number;
  private currentLevelScore: number;
  private elementsOnCurrentLevel: number[];
  private elementsOnNextLevel: number[];
  private results: VoteResult[];

  constructor() {}

  initialize(quantityOfElements: number) {
    if (quantityOfElements <= 0) {
      throw new Error("Element quantity should be a positive number.")
    }

    this.isInitialized = true;
    this.currentLevelScore = 1;
    this.remainingRounds = quantityOfElements - 1;
    let firstLevelSize = this.getQuantityOfElementsOnFirstLevel(quantityOfElements);
    this.elementsOnCurrentLevel = Array.from(Array(firstLevelSize).keys());
    let secondLevelSize = quantityOfElements - firstLevelSize;
    this.elementsOnNextLevel = Array.from({length: secondLevelSize}, (_, k) => k + firstLevelSize);
    this.results = new Array(0);
  }

  getRemainingQuantityOfRounds(): number {
    this.ensureIsInitialized();
    return this.remainingRounds;
  }

  getVoteOptions(): VoteOptions {
    this.ensureVotingIsNotOver();
    let length = this.elementsOnCurrentLevel.length;
    let optionB = this.elementsOnCurrentLevel[length - 1];
    let optionA = this.elementsOnCurrentLevel[length - 2];
    return { optionA: optionA, optionB: optionB };
  }

  voteFor(selected: VoteSelection) {
    this.ensureVotingIsNotOver();
    this.remainingRounds--;
    let optionB = this.elementsOnCurrentLevel.pop();
    let optionA = this.elementsOnCurrentLevel.pop();
    if (selected == VoteSelection.OptionA) {
      this.results.push({elementIndex: optionB, score: this.currentLevelScore});
      this.elementsOnNextLevel.push(optionA);
    } else if (selected == VoteSelection.OptionB) {
      this.results.push({elementIndex: optionA, score: this.currentLevelScore});
      this.elementsOnNextLevel.push(optionB);
    }

    if (this.remainingRounds == 0) {
      let index = this.elementsOnNextLevel[0];
      this.results.push({elementIndex: index, score: 2 * this.currentLevelScore});
      this.normalizeScores(this.results);
      return;
    }

    if (this.elementsOnCurrentLevel.length == 0) {
      this.elementsOnCurrentLevel = this.elementsOnNextLevel;
      this.elementsOnNextLevel = new Array(0);
      this.currentLevelScore *= 2;
    }
  }

  getResults(): VoteResult[] {
    this.ensureVotingIsOver();
    return this.results;
  }

  private ensureIsInitialized() {
    if (!this.isInitialized) {
      throw new Error("Service should be initialized first.")
    }
  }

  private ensureVotingIsNotOver() {
    if (this.remainingRounds <= 0) {
      throw new Error("Voting is over.")
    }
  }

  private ensureVotingIsOver() {
    if (this.remainingRounds > 0) {
      throw new Error("Voting is not over.")
    }
  }

  private getQuantityOfElementsOnFirstLevel(totalQuantity: number) {
    let powerOfTwoOfFirstCompleteLevel = Math.floor(Math.log2(totalQuantity));
    let sizeOfFirstCompleteLevel = Math.pow(2, powerOfTwoOfFirstCompleteLevel);
    return sizeOfFirstCompleteLevel == totalQuantity ?
      totalQuantity :
      2 * (totalQuantity - sizeOfFirstCompleteLevel);
  }

  private normalizeScores(results: VoteResult[]) {
    let reducedResults = this.results.map(r => { return { elementIndex: r.elementIndex, score: Math.floor(r.score/2) } });
    let totalScore = reducedResults.map(r => r.score).reduce((prev, next) => prev + next);
    let adjustFactor = this.totalDesiredScore / totalScore;
    this.results = reducedResults.map(r => { 
      return { elementIndex: r.elementIndex, score: Math.round(r.score * adjustFactor) };
    });
  }
}
