import { Injectable } from '@angular/core';
import { VoteOptions } from '../vote-options';
import { VoteSelection } from '../vote-selection';

@Injectable({
  providedIn: 'root'
})

export class EliminationAlgorithmService {
  private isInitialized: boolean;
  private quantity: number;
  private remainingRounds: number;

  constructor() {}

  initialize(quantityOfElements: number) {
    if (quantityOfElements <= 0) {
      throw new Error("Element quantity should be a positive number.")
    }

    this.quantity = quantityOfElements;
    this.isInitialized = true;
    this.remainingRounds = quantityOfElements - 1;
  }

  getRemainingQuantityOfRounds(): number {
    this.ensureIsInitialized();
    return this.remainingRounds;
  }

  getVoteOptions(): VoteOptions {
    return { optionA: 0, optionB: 1 };
  }

  voteFor(selected: VoteSelection) {
    
  }

  private ensureIsInitialized() {
    if (!this.isInitialized) {
      throw new Error("Service should be initialized first.")
    }
  }
}
