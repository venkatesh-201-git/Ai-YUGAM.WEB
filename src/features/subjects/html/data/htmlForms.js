export const htmlForms = {
  id: 'forms',
  title: 'HTML Forms',
  content: `
    <p>An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
    <p class="mt-4">The <code>&lt;form&gt;</code> element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, etc.</p>
  `,
  codeExample: `<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`
};
