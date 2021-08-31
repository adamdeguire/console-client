const jsPlaceholder = 'const helloWorld = function () {\n  console.log(\'Hello World!\')\n}'
const pyPlaceholder = 'def my_function():\n  print("Hello from a function")'
const cPlaceholder = '#include <stdio.h>\nint main() {\n  printf("Hello, World!");\nreturn null;\n}'
const cppPlaceholder = '#include <iostream>\n\n</iostream>int main() {\n  std::cout << "Hello World!";\n  return 0;\n}'
const cSharpPlaceholder = 'namespace HelloWorld\n{\n  class Hello {\n    static void Main(string[] args)\n      {\n        System.Console.WriteLine("Hello World!");\n      }\n    }\n  }'
const languageOptions = [
  {
    language: 'javascript',
    buttonValue: 'JavaScript',
    placeholder: jsPlaceholder,
    height: '90px'
  }, {
    language: 'python',
    buttonValue: 'Python',
    placeholder: pyPlaceholder,
    height: '70px'
  },
  {
    language: 'clike',
    buttonValue: 'C#',
    placeholder: cSharpPlaceholder,
    height: '240px'
  }, {
    language: 'clike',
    buttonValue: 'C++',
    placeholder: cppPlaceholder,
    height: '170px'
  },
  {
    language: 'clike',
    buttonValue: 'C',
    placeholder: cPlaceholder,
    height: '140px'
  }
]

export default languageOptions
