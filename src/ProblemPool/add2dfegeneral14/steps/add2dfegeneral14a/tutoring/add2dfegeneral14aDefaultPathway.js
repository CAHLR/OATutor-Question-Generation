var hints = [{id: "add2dfegeneral14a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["no"], dependencies: [], title: "Is there a greatest common factor?", text: "", choices: ["Yes", "No"], variabilization: {}}, {id: "add2dfegeneral14a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["other"], dependencies: ["add2dfegeneral14a-h1"], title: "Is the polynomial a binomial, trinomial, or are there more than three terms?", text: "", choices: ["binomial", "trinomial", "other"], variabilization: {}}, {id: "add2dfegeneral14a-h3", type: "hint", dependencies: ["add2dfegeneral14a-h2"], title: "More than three terms", text: "Since there are more than three terms, factor by grouping.", variabilization: {}}, {id: "add2dfegeneral14a-h4", type: "hint", dependencies: ["add2dfegeneral14a-h3"], title: "Grouping", text: "By grouping, you should be left have $$6a \\left(2b-1\\right)+5\\left(2b-1\\right)$$. Group together.", variabilization: {}}, {id: "add2dfegeneral14a-h5", type: "hint", dependencies: ["add2dfegeneral14a-h4"], title: "Check", text: "Is it factored completely? Do the factors multiply back to the original polynomial?", variabilization: {}}, ]; export {hints};