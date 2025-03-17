let pronoun = ['the', 'our'];
let adj = ['great', 'big'];  
let noun = ['jogger', 'racoon'];
const dominio = ["com", "es", "io", "net"]; 

const arr = [pronoun, adj, noun, dominio]; 

console.log(arr);
const generate = () => {


pronoun.forEach(el => {
  adj.forEach(val => {
    noun.forEach(item => {
      dominio.forEach(i => {
        console.log(`${el}${val}${item}.${i}`);
      })
    })
  })
})
}
generate()