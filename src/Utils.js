export function hasLactose(beer) {
  if (beer.method === null || beer.method.twist === null) return false;

  return beer.method.twist.match(/Lactose/i) !== null;
}

export function hasDryHops(beer) {
  if (beer.ingredients === null || beer.ingredients.hops === null) return false;

  return (
    beer.ingredients.hops.find((hop) => {
      if (hop.add === null) return false;

      return hop.add.match(/dry hop/i);
    }) !== undefined
  );
}

export function sortByABVDesc() {
  return function (a, b) {
    const ABV = 'abv';

    if (parseFloat(a[ABV]) > parseFloat(b[ABV])) return -1;
    else if (parseFloat(a[ABV]) < parseFloat(b[ABV])) return 1;

    return 0;
  };
}
