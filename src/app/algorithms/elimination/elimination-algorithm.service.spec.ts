import { EliminationAlgorithmService } from './elimination-algorithm.service';
import { VoteSelection } from '../vote-selection';

describe('EliminationAlgorithmService', () => {
  let service: EliminationAlgorithmService;

  beforeEach(() => {
    service = new EliminationAlgorithmService();
  });

  it('should throw error when not initialized', () => {
    expect(function() {
      service.getRemainingQuantityOfRounds();
    }).toThrowError("Service should be initialized first.");
  });

  it('should return the correct quantity of rounds', () => {
    let testSet = [ 
      { input: [], expected: -1},
      { input: [0], expected: 0},
      { input: [0, 1], expected: 1},
      { input: [0, 1, 2], expected: 2},
      { input: [0, 1, 2, 3], expected: 3},
      { input: [0, 1, 2, 3, 4], expected: 4}
    ];

    for (let i = 0; i < testSet.length; i++) {
      service.initialize(testSet[i].input);    
      expect(service.getRemainingQuantityOfRounds()).toBe(testSet[i].expected);
    }
  });

  it('should throw error when voting after vote is over', () => {
    service.initialize([0]);
    let errorMessage = "Voting is over.";
    expect(() => service.getVoteOptions()).toThrowError(errorMessage);
    expect(() => service.voteFor(VoteSelection.OptionA)).toThrowError(errorMessage);
  });

  it('should throw error when getting results before voting is over', () => {
    service.initialize([0, 1]);
    expect(() => service.getResults()).toThrowError("Voting is not over.");
  });

  it('should return correct results for 2 elements when voting for A', () => {
    service.initialize([0, 1]);
    expect(service.getRemainingQuantityOfRounds()).toBe(1);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getResults()).toEqual([
      {elementIndex: 1, score: 333},
      {elementIndex: 0, score: 667},
    ]);
  });

  it('should return correct results for 2 elements when voting for B', () => {
    service.initialize([0, 1]);
    expect(service.getRemainingQuantityOfRounds()).toBe(1);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getResults()).toEqual([
      {elementIndex: 0, score: 333},
      {elementIndex: 1, score: 667},
    ]);
  });

  it('should return correct results for 3 elements', () => {
    service.initialize([0, 1, 2]);
    expect(service.getRemainingQuantityOfRounds()).toBe(2);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getRemainingQuantityOfRounds()).toBe(1);
    expect(service.getVoteOptions()).toEqual({optionA: 2, optionB: 0});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getResults()).toEqual([
      {elementIndex: 1, score: 143},
      {elementIndex: 0, score: 286},
      {elementIndex: 2, score: 571},
    ]);
  });

  it('should return correct results for 4 elements', () => {
    service.initialize([0, 1, 2, 3]);
    expect(service.getRemainingQuantityOfRounds()).toBe(3);
    expect(service.getVoteOptions()).toEqual({optionA: 2, optionB: 3});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getRemainingQuantityOfRounds()).toBe(2);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getRemainingQuantityOfRounds()).toBe(1);
    expect(service.getVoteOptions()).toEqual({optionA: 2, optionB: 0});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getResults()).toEqual([
      {elementIndex: 3, score: 125},
      {elementIndex: 1, score: 125},
      {elementIndex: 0, score: 250},
      {elementIndex: 2, score: 500},
    ]);
  });

  it('should return correct results for 5 elements', () => {
    service.initialize([0, 1, 2, 3, 4]);
    expect(service.getRemainingQuantityOfRounds()).toBe(4);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getRemainingQuantityOfRounds()).toBe(3);
    expect(service.getVoteOptions()).toEqual({optionA: 4, optionB: 0});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getRemainingQuantityOfRounds()).toBe(2);
    expect(service.getVoteOptions()).toEqual({optionA: 2, optionB: 3});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getRemainingQuantityOfRounds()).toBe(1);
    expect(service.getVoteOptions()).toEqual({optionA: 4, optionB: 2});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getResults()).toEqual([
      {elementIndex: 1, score: 59},
      {elementIndex: 0, score: 118},
      {elementIndex: 3, score: 118},
      {elementIndex: 2, score: 235},
      {elementIndex: 4, score: 471},
    ]);
  });
});