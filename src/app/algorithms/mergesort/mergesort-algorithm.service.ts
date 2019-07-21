import { Injectable } from '@angular/core';
import { VoteOptions } from '../vote-options';
import { VoteSelection } from '../vote-selection';
import { VotingAlgorithm } from '../voting-algorithm-interface';
import { VoteResult } from '../vote-result';

@Injectable({
  providedIn: 'root'
})

export class MergesortAlgorithmService implements VotingAlgorithm {
  readonly totalDesiredScore = 1000;

  private isInitialized: boolean;
  private remainingRounds: number;
  private currentOptionA: number;
  private currentOptionB: number;
  private results: VoteResult[];
  private currentBlockSize: number;  
  private mergedBlock: number[];
  private elements: number[];
  private mergedBlockStartIndex: number;

  constructor() {}

  initialize(elements: number[]) {
    let quantityOfElements = elements.length;
    this.isInitialized = true;
    this.remainingRounds = this.getTotalQuantityOfRounds(quantityOfElements);
    this.currentBlockSize = 1;
    this.currentOptionA = this.mergedBlockStartIndex = 0;
    this.currentOptionB = 1;
    this.elements = elements;
    this.mergedBlock = new Array();
  }

  getRemainingQuantityOfRounds(): number {
    this.ensureIsInitialized();
    return this.remainingRounds;
  }

  getInitialQuantityOfRounds(numberOfElements: number): number {
    return this.getTotalQuantityOfRounds(numberOfElements);
  }

  getVoteOptions(): VoteOptions {
    this.ensureVotingIsNotOver();
    return {
      optionA: this.elements[this.currentOptionA],
      optionB: this.elements[this.currentOptionB]
    };
  }

  voteFor(selected: VoteSelection) {
    this.ensureVotingIsNotOver();
    this.remainingRounds--;

    if (selected == VoteSelection.OptionA) {
      this.mergedBlock.push(this.elements[this.currentOptionB++]);
    }
    else if (selected == VoteSelection.OptionB) {
      this.mergedBlock.push(this.elements[this.currentOptionA++]);
    }

    if (this.currentOptionA >= this.elements.length ||
        this.currentOptionA >= this.mergedBlockStartIndex + this.currentBlockSize) {
      // Copy what remains of block B.
      while (this.currentOptionB < this.elements.length &&
             this.currentOptionB < this.mergedBlockStartIndex + (this.currentBlockSize * 2)) {
        this.mergedBlock.push(this.elements[this.currentOptionB++]);
        this.remainingRounds--;
      }

      // Adding back +1 since that does not count as a round.
      this.remainingRounds++;
    }
    else if (this.currentOptionB >= this.elements.length ||
             this.currentOptionB >=this.mergedBlockStartIndex + (this.currentBlockSize * 2)) {
      // Copy what remains of block A.
      while (this.currentOptionA < this.elements.length &&
             this.currentOptionA < this.mergedBlockStartIndex + this.currentBlockSize) {
        this.mergedBlock.push(this.elements[this.currentOptionA++]);
        this.remainingRounds--;
      }   

      // Adding back +1 since that does not count as a round.
      this.remainingRounds++;
    }

    if (this.mergedBlock.length == (this.currentBlockSize * 2) ||
        this.remainingRounds == 0) {
      // Current merge is over, prepare next merge.
      this.copyArray(this.elements, this.mergedBlockStartIndex, this.mergedBlock);
      this.mergedBlockStartIndex += this.mergedBlock.length;
      this.currentOptionA = this.mergedBlockStartIndex;
      this.currentOptionB = this.currentOptionA + this.currentBlockSize;
      if (this.currentOptionA >= this.elements.length ||
          this.currentOptionB >= this.elements.length) {
        // Current level is done.
        this.currentBlockSize *= 2;
        this.mergedBlockStartIndex = 0;
        this.currentOptionA = 0;
        this.currentOptionB = this.currentBlockSize;
      }
      
      this.mergedBlock = new Array();
    }
  }

  getResults(): VoteResult[] {
    this.ensureVotingIsOver();
    if (this.results == null) {
      this.results = this.elements.map((v, i) => {return {elementIndex: v, score: i};});
      this.normalizeScores(this.results);
    }

    return this.results;
  }

  private ensureIsInitialized() {
    if (!this.isInitialized) {
      throw new Error("Service should be initialized first.");
    }
  }

  private ensureVotingIsNotOver() {
    if (this.remainingRounds <= 0) {
      throw new Error("Voting is over.");
    }
  }

  private ensureVotingIsOver() {
    if (this.remainingRounds > 0) {
      throw new Error("Voting is not over.");
    }
  }

  private normalizeScores(results: VoteResult[]) {
    let totalScore = this.results.map(r => r.score).reduce((prev, next) => prev + next);
    let adjustFactor = this.totalDesiredScore / totalScore;
    this.results = this.results.map(r => { 
      return { elementIndex: r.elementIndex, score: Math.round(r.score * adjustFactor) };
    });
  }  

  private getTotalQuantityOfRounds(inputSize: number): number {
    let blockSize = 1;
    let quantity = 0;
    while (blockSize < inputSize) {
      let fullBlocks = Math.floor(inputSize / blockSize);
      let fullBlockPairs = Math.floor(fullBlocks / 2);
      quantity += fullBlockPairs * (2 * blockSize - 1);

      let remainingElements = inputSize - fullBlockPairs * blockSize * 2;
      if (remainingElements > blockSize) {
        quantity += remainingElements - 1;
      }
      
      blockSize *= 2;
    }
    
    return quantity;
  }
  
  private copyArray(elements: number[], mergedBlockStartIndex: number, mergedBlock: number[]) {
    let length = mergedBlock.length;
    for (let i = 0; i < length; i++) {
      elements[mergedBlockStartIndex + i] = mergedBlock[i];
    }
  }
}
