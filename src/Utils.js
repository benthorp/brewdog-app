export function hasLactose(beer) {
  if (!beer || !beer.method || !beer.method.twist) return false;

  return beer.method.twist.match(/Lactose/i) !== null;
}

export function hasDryHops(beer) {
  if (!beer.ingredients || !beer.ingredients.hops) return false;

  return (
    beer.ingredients.hops.find((hop) => {
      if (!hop.add) return false;

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
