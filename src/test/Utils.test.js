import { hasDryHops, hasLactose, sortByABVDesc } from '../Utils';
import * as td from './TestData';

describe('hasLactose input checks', () => {
  it('returns false if input beers === null', () => {
    expect(hasLactose(null)).toBeFalsy();
  });

  it('returns false if missing method node', () => {
    expect(hasLactose(td.beerMethodIsMissing)).toBeFalsy();
  });

  it('returns false if missing twist node', () => {
    expect(hasLactose(td.beerMethodTwistIsMissing)).toBeFalsy();
  });
});

describe('hasLactose true/false checks', () => {
  it('returns false if twist is not null and does not contain lactose', () => {
    expect(hasLactose(td.beerCompleteNoLactoseNoHops)).toBeFalsy();
  });

  it('returns false if twist is null', () => {
    expect(hasLactose(td.beerMethodTwistIsNull)).toBeFalsy();
  });

  it('returns true if twist contains lactose', () => {
    expect(hasLactose(td.beerCompleteHasLactose)).toBeTruthy();
  });
});

describe('hasDryHops input checks', () => {
  it('returns false if ingredients node is missing', () => {
    expect(hasDryHops(td.beerIngredientsIsMissing)).toBeFalsy();
  });

  it('returns false if hops node is missing', () => {
    expect(hasDryHops(td.beerHopsIsMissing)).toBeFalsy();
  });
});

describe('hasDryHops true/false checks', () => {
  it('returns false if does not contain dry hops', () => {
    expect(hasDryHops(td.beerCompleteNoLactoseNoHops)).toBeFalsy();
  });

  it('returns true if contains dry hops', () => {
    expect(hasDryHops(td.beerCompleteHasDryHops)).toBeTruthy();
  });

  it('returns true if contains dry hops and also a missing add node', () => {
    expect(hasDryHops(td.beerHasHopsButMissingAdd)).toBeTruthy();
  });
});

describe('sortByABVDesc data quality check', () => {
  it('does not exception if abv node is missing', () => {
    expect(td.beersAbvNodesMissing.sort(sortByABVDesc()).length).toStrictEqual(
      4
    );
  });

  it('does not exception if array is empty', () => {
    expect([].sort(sortByABVDesc()).length).toStrictEqual(0);
  });

  it('does not exception if array only has 1 element', () => {
    expect(
      [td.beerCompleteNoLactoseNoHops].sort(sortByABVDesc()).length
    ).toStrictEqual(1);
  });

  it('sorts by abv in descending order', () => {
    td.beersForSortingByAbv.sort(sortByABVDesc());

    expect(td.beersForSortingByAbv[0].abv).toStrictEqual(6.3);
    expect(td.beersForSortingByAbv[1].abv).toStrictEqual(4.5);
    expect(td.beersForSortingByAbv[2].abv).toStrictEqual(4.2);
    expect(td.beersForSortingByAbv[3].abv).toStrictEqual(4.1);
  });
});
