/*globals beforeEach*/
import BowlingGame from '../bowlingGame'
import {expect} from 'chai'

describe('Array', function() {
  describe('#score()', function () {
    let bowlingGame
    beforeEach(() => {
        bowlingGame = new BowlingGame()
    })

    it('should return 10 when start is called', function () {
      bowlingGame.roll(4)
      bowlingGame.roll(6)
      var score = bowlingGame.score()
      expect(score).to.equal(10)
    })
  })
})
