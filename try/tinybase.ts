import { createStore } from "tinybase"

export function runTinyBase() {
  const store = createStore()
  store.setValue("v1", "Hello")
  store.setCell("t1", "r1", "c1", "World")
  console.log(store.getValue("v1") + " " + store.getCell("t1", "r1", "c1"))
}
