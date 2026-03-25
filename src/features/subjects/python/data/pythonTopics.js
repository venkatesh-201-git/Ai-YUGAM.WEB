export const pythonTopics = [
  {
    id: 'intro',
    title: 'Python Introduction',
    content: `
      <p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
      <h3 class="text-2xl font-black text-gray-900 dark:text-white mt-10 mb-4 tracking-tight">Why Python?</h3>
      <ul class="space-y-4 text-gray-600 dark:text-gray-300">
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Easy to Read</strong>: Designed for readability and simplicity.</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Versatile</strong>: Used in AI, Web Dev, Data Science, and Automation.</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Huge Community</strong>: Thousands of libraries and frameworks.</span>
        </li>
      </ul>
    `,
    codeExample: `print("Hello, Ai-Yugam!")`,
  },
  {
    id: 'syntax',
    title: 'Python Syntax',
    content: `
      <p>Python syntax can be executed by writing directly in the Command Line. Or by creating a python file on the server, using the .py file extension.</p>
      <h3 class="text-2xl font-black text-gray-900 dark:text-white mt-10 mb-4 tracking-tight">Indentation</h3>
      <p>Indentation refers to the spaces at the beginning of a code line. Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.</p>
      <div class="p-6 bg-secondary/5 border-l-4 border-secondary rounded-xl my-8">
        <p class="text-sm italic text-gray-600">Python uses indentation to indicate a block of code.</p>
      </div>
    `,
    codeExample: `if 5 > 2:
  print("Five is greater than two!")`,
  },
  {
    id: 'variables',
    title: 'Python Variables',
    content: `
      <p>Variables are containers for storing data values. In Python, variables are created when you assign a value to it.</p>
      <h3 class="text-2xl font-black text-gray-900 dark:text-white mt-10 mb-4 tracking-tight">Creating Variables</h3>
      <p>Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.</p>
    `,
    codeExample: `x = 5
y = "John"
print(x)
print(y)`,
  },
];
