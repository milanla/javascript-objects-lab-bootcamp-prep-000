var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, recipes, {[key]: value })
}