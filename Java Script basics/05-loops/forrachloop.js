const arr = [10,20,30,40,50]
arr.forEach((index, item, arr) => console.log(item, index, arr)) ;

const myCoding = [
    {languageName: "java-script",
        languageFileName: "js"
    },
    {languageName: "c++",
        languageFileName: "c++"
    },
    {languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=> console.log(`Programming language is : ${item.languageName} and it's file extention is ${item.languageFileName}`))