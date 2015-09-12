export default function keyMirrorSymbol(object){
  const keys = Object.keys(object)
  return keys.reduce((acc, key) => ({ ...acc, [key]: Symbol(key) }), {})
}
