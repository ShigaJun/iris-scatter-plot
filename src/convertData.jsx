export default function convertData(data, xProperty, yProperty) {
  const properties = {
    "sepal length": "sepalLength",
    "sepal width": "sepalWidth",
    "petal length": "petalLength",
    "petal width": "petalWidth",
  };

  const xKey = properties[xProperty];
  const yKey = properties[yProperty];

  return data.map((d) => ({
    x: d[xKey],
    y: d[yKey],
    species: d.species,
  }));
}
