import produce from './src/immer'
// @ts-ignore
window.__DEV__  = false

const obj = {
    a: {
        b: 2
    }
}

debugger
const newObj = produce(obj, (draft) => {
    draft.a.b = 2
    draft.a.b = 4
})

console.log(newObj)