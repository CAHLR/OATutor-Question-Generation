import hints from "./arrays1a-index.js"; const step = {id: "arrays1a", stepAnswer: ["make_array(@{a},math.sin(@{b}),@{c},@{d}**math.cos(@{b}))"], problemType: "TextBox", stepTitle: "Make an array called weird_numbers containing the following numbers (in the given order): \\n 1) @{a} \\n 2) the sine of @{b} \\n 3) @{c} \\n 4) @{d} to the power of the cosine of @{b} \\n \\n import math \\n weird_numbers =", stepBody: "", answerType: "string", hints: hints, variabilization: {a: ["", "12", "13", "16", "1"], b: ["", "8", "10", "12", "1"], c: ["", "9", "11", "14", "1"], d: ["", "8", "12", "15", "1"]}}; export {step};