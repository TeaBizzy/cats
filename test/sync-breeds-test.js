const { expect } = require('chai');
const breedDetails = require('../sync-breeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    const output = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

    expect(breedDetails("Bombay")).to.be.equal(output);
  });

  it('returns breed details for the Balinese breed', () => {
    const output = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";

    expect(breedDetails("Balinese")).to.be.equal(output);
  });

  it('returns undefined when no breed is specified', () => {

    expect(breedDetails()).to.be.undefined;
  });
});
