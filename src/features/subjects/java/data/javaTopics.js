export const javaTopics = [
  {
    id: 'intro',
    title: 'Java Introduction',
    content: `
      <p>Java is a popular, general-purpose, object-oriented programming language. It is used to develop mobile apps, web apps, desktop apps, games, and more!</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
         <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
           <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Cross-Platform</h4>
           <p class="text-[10px] text-gray-500 mt-2">Write Once, Run Anywhere. JVM allows Java to run on Windows, Mac, and Linux.</p>
         </div>
         <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
           <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Object-Oriented</h4>
           <p class="text-[10px] text-gray-500 mt-2">Java is fundamentally built around objects and classes.</p>
         </div>
      </div>
    `,
    codeExample: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Ai-Yugam!");
  }
}`,
  },
  {
    id: 'variables',
    title: 'Java Variables',
    content: `
      <p>Variables are containers for storing data values. In Java, there are different types of variables, for example: <code>String</code>, <code>int</code>, <code>float</code>, <code>char</code>, and <code>boolean</code>.</p>
    `,
    codeExample: `int myNum = 5;
String name = "John";
System.out.println(name + " is " + myNum);`,
  },
  {
    id: 'loops',
    title: 'Java Loops',
    content: `
      <p>Loops can execute a block of code as long as a specified condition is reached. Java supports <code>while</code> and <code>for</code> loops.</p>
    `,
    codeExample: `for (int i = 0; i < 5; i++) {
  System.out.println(i);
}`,
  },
  {
    id: 'methods',
    title: 'Java Methods',
    content: `
      <p>A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method.</p>
    `,
    codeExample: `public static void myMethod() {
  System.out.println("Method was called!");
}
// To call: myMethod();`,
  },
];
