export const javaIntro = {
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
}`
};
