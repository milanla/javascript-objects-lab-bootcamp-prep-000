var recipes = {}


function updateObjectWithKeyAndValue(recipes, key, value) {
  return object.assign({}, recipes, {[key]: value })
}