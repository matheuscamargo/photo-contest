import { MergesortAlgorithmService } from './mergesort-algorithm.service';
import { VoteSelection } from '../vote-selection';

describe('MergesortAlgorithmService', () => {
  let service: MergesortAlgorithmService;

  beforeEach(() => {
    service = new MergesortAlgorithmService();
  });

  it('should throw error when not initialized', () => {
    expect(function() {
      service.getRemainingQuantityOfRounds();
    }).toThrowError("Service should be initialized first.");
  });

  it('should return the correct quantity of rounds', () => {
    let testSet = [ 
      { input: [], expected: 0},
      { input: [0], expected: 0},
      { input: [0, 1], expected: 1},
      { input: [0, 1, 2], expected: 3},
      { input: [0, 1, 2, 3], expected: 5},
      { input: [0, 1, 2, 3, 4], expected: 9},
      { input: [0, 1, 2, 3, 4, 5], expected: 11},
      { input: [0, 1, 2, 3, 4, 5, 6], expected: 14}
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
      {elementIndex: 1, score: 0},
      {elementIndex: 0, score: 1000},
    ]);
  });

  it('should return correct results for 2 elements when voting for B', () => {
    service.initialize([0, 1]);
    expect(service.getRemainingQuantityOfRounds()).toBe(1);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getResults()).toEqual([
      {elementIndex: 0, score: 0},
      {elementIndex: 1, score: 1000},
    ]);
  });

  it('should return correct results for 3 elements reducing rounds', () => {
    service.initialize([0, 1, 2]);
    // [0, 1, 2]
    expect(service.getRemainingQuantityOfRounds()).toBe(3);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionA);
    // [1, 0, 2]
    expect(service.getRemainingQuantityOfRounds()).toBe(2);
    expect(service.getVoteOptions()).toEqual({optionA: 1, optionB: 2});
    service.voteFor(VoteSelection.OptionA);
    // [2, 1, 0]
    expect(service.getResults()).toEqual([
      {elementIndex: 2, score: 0},
      {elementIndex: 1, score: 333},
      {elementIndex: 0, score: 667},
    ]);
  });

  it('should return correct results for 3 elements with all rounds', () => {
    service.initialize([0, 1, 2]);
    // [0, 1, 2]
    expect(service.getRemainingQuantityOfRounds()).toBe(3);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionA);
    // [1, 0, 2]
    expect(service.getRemainingQuantityOfRounds()).toBe(2);
    expect(service.getVoteOptions()).toEqual({optionA: 1, optionB: 2});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getRemainingQuantityOfRounds()).toBe(1);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 2});
    service.voteFor(VoteSelection.OptionB);
    // [1, 0, 2]
    expect(service.getResults()).toEqual([
      {elementIndex: 1, score: 0},
      {elementIndex: 0, score: 333},
      {elementIndex: 2, score: 667},
    ]);
  });

  it('should return correct results for 4 elements when ordered', () => {
    service.initialize([0, 1, 2, 3]);
    // [0, 1, 2, 3]
    expect(service.getRemainingQuantityOfRounds()).toBe(5);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionB);
    // [0, 1, 2, 3]
    expect(service.getRemainingQuantityOfRounds()).toBe(4);
    expect(service.getVoteOptions()).toEqual({optionA: 2, optionB: 3});
    service.voteFor(VoteSelection.OptionB);
    // [0, 1, 2, 3]
    expect(service.getRemainingQuantityOfRounds()).toBe(3);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 2});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getRemainingQuantityOfRounds()).toBe(2);
    expect(service.getVoteOptions()).toEqual({optionA: 1, optionB: 2});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getResults()).toEqual([
      {elementIndex: 0, score: 0},
      {elementIndex: 1, score: 167},
      {elementIndex: 2, score: 333},
      {elementIndex: 3, score: 500},
    ]);
  });

  it('should return correct results for 4 elements when reversed', () => {
    service.initialize([0, 1, 2, 3]);
    // [0, 1, 2, 3]
    expect(service.getRemainingQuantityOfRounds()).toBe(5);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionA);
    // [1, 0, 2, 3]
    expect(service.getRemainingQuantityOfRounds()).toBe(4);
    expect(service.getVoteOptions()).toEqual({optionA: 2, optionB: 3});
    service.voteFor(VoteSelection.OptionA);
    // [1, 0, 3, 2]
    expect(service.getRemainingQuantityOfRounds()).toBe(3);
    expect(service.getVoteOptions()).toEqual({optionA: 1, optionB: 3});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getRemainingQuantityOfRounds()).toBe(2);
    expect(service.getVoteOptions()).toEqual({optionA: 1, optionB: 2});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getResults()).toEqual([
      {elementIndex: 3, score: 0},
      {elementIndex: 2, score: 167},
      {elementIndex: 1, score: 333},
      {elementIndex: 0, score: 500},
    ]);
  });

  it('should return correct results for 5 elements', () => {
    // [0, 1, 2, 3, 4]
    service.initialize([0, 1, 2, 3, 4]);
    expect(service.getRemainingQuantityOfRounds()).toBe(9);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 1});
    service.voteFor(VoteSelection.OptionA);
    // [1, 0, 2, 3, 4]
    expect(service.getRemainingQuantityOfRounds()).toBe(8);
    expect(service.getVoteOptions()).toEqual({optionA: 2, optionB: 3});
    service.voteFor(VoteSelection.OptionB);
    // [1, 0, 2, 3, 4]
    expect(service.getRemainingQuantityOfRounds()).toBe(7);
    expect(service.getVoteOptions()).toEqual({optionA: 1, optionB: 2});
    service.voteFor(VoteSelection.OptionA);
    expect(service.getRemainingQuantityOfRounds()).toBe(6);
    expect(service.getVoteOptions()).toEqual({optionA: 1, optionB: 3});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getRemainingQuantityOfRounds()).toBe(5);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 3});
    service.voteFor(VoteSelection.OptionA);
    // [2, 1, 3, 0, 4]
    expect(service.getRemainingQuantityOfRounds()).toBe(4);
    expect(service.getVoteOptions()).toEqual({optionA: 2, optionB: 4});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getRemainingQuantityOfRounds()).toBe(3);
    expect(service.getVoteOptions()).toEqual({optionA: 1, optionB: 4});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getRemainingQuantityOfRounds()).toBe(2);
    expect(service.getVoteOptions()).toEqual({optionA: 3, optionB: 4});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getRemainingQuantityOfRounds()).toBe(1);
    expect(service.getVoteOptions()).toEqual({optionA: 0, optionB: 4});
    service.voteFor(VoteSelection.OptionB);
    expect(service.getResults()).toEqual([
      {elementIndex: 2, score: 0},
      {elementIndex: 1, score: 100},
      {elementIndex: 3, score: 200},
      {elementIndex: 0, score: 300},
      {elementIndex: 4, score: 400},
    ]);
  });
});