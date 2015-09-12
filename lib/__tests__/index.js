import tape from "tape-catch"
import keyMirrorSymbol from ".."

tape("keyMirrorSymbol", (test) => {
  test.equal(typeof keyMirrorSymbol({ foo: null }), "object")
  test.equal(typeof keyMirrorSymbol({ foo: null }).foo, "symbol")
  test.deepEqual(
    Object.keys(keyMirrorSymbol({ foo: null, bar: null })),
    ["foo", "bar"]
  )
  test.end()
})
