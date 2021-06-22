/* const div = (strings, ...args) =>
    strings.reduce(
        (acc, currentString, index) => acc + currentString + (args[index] || ""),
        ""
    );

const firstName = "Luan";
const lastName = "Braga";

const template =  div`Hello ${firstName} ${lastName} !`;
console.log(template); */


const createElement = tagName => (strings, ...args) => ({
    type: tagName,
    template: strings.reduce(
        (acc, currentString, index) => acc + currentString + (args[index] || ""),
        ""
    )
})

const div = createElement("div");
const p = createElement("p");

const firstName = "Luan";
const lastName =  "Braga";

const { template } = p`Hello ${firstName} ${lastName}`;

console.log(template);
