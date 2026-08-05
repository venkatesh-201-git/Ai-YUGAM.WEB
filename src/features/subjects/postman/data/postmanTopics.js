export const postmanTopics = [
  {
    id: 'module-1-intro-what-is-postman',
    title: 'Module 1 – What is Postman? & History',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        <strong>Postman</strong> is the world's leading API Development, Testing, and Collaboration Platform used by millions of software developers, QA engineers, DevOps practitioners, and backend architects.
      </p>

      <div class="p-6 bg-secondary/10 border-l-4 border-secondary rounded-2xl my-8">
        <h4 class="text-sm font-black text-secondary tracking-widest uppercase mb-1">Analogy</h4>
        <p class="text-base text-gray-700 dark:text-gray-300">
          Think of Postman as <strong>VS Code for APIs</strong>. Instead of writing complex command-line HTTP scripts or full backend code immediately, Postman allows you to interactively send requests, view responses, run tests, and debug APIs visually.
        </p>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">1. What Does Postman Help You Do?</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex items-center gap-2"><span class="text-secondary font-bold">✓</span> <strong>Send & Test APIs:</strong> Construct HTTP/REST, GraphQL, and gRPC calls.</li>
            <li class="flex items-center gap-2"><span class="text-secondary font-bold">✓</span> <strong>Debug APIs:</strong> View raw headers, bodies, status codes, and console logs.</li>
            <li class="flex items-center gap-2"><span class="text-secondary font-bold">✓</span> <strong>Automate Testing:</strong> Write JS test assertions and run suites.</li>
            <li class="flex items-center gap-2"><span class="text-secondary font-bold">✓</span> <strong>Generate Code:</strong> Export requests to JS, Python, Java, C#, Go, PHP, etc.</li>
          </ul>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex items-center gap-2"><span class="text-secondary font-bold">✓</span> <strong>Document APIs:</strong> Automatically generate web documentation.</li>
            <li class="flex items-center gap-2"><span class="text-secondary font-bold">✓</span> <strong>Mock Servers:</strong> Create fake APIs before backend code is ready.</li>
            <li class="flex items-center gap-2"><span class="text-secondary font-bold">✓</span> <strong>Monitor APIs:</strong> Schedule health checks and uptime monitoring.</li>
            <li class="flex items-center gap-2"><span class="text-secondary font-bold">✓</span> <strong>Team Collaboration:</strong> Share collections and environments in workspaces.</li>
          </ul>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Who Created Postman?</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Postman was created in <strong>2012</strong> by <strong>Abhinav Asthana</strong>, <strong>Ankit Sobti</strong>, and <strong>Abhijit Kane</strong>. It started originally as a simple side-project Google Chrome Extension to simplify API testing. Over the years, it evolved into a standalone cross-platform desktop application and an enterprise cloud platform used by over 30 million developers worldwide.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. Why Was Postman Created?</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
              <th class="p-4">Before Postman (The Old Painful Way)</th>
              <th class="p-4 text-secondary">With Postman (Modern Enterprise Solution)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 text-gray-600 dark:text-gray-400">Testing via command-line <code>curl</code> commands or browser URLs.</td>
              <td class="p-4 font-semibold text-gray-800 dark:text-gray-200">Intuitive graphical Request Builder & Response Inspector.</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-600 dark:text-gray-400">Writing custom Java/Python code just to test a single API endpoint.</td>
              <td class="p-4 font-semibold text-gray-800 dark:text-gray-200">Instant point-and-click execution without setup overhead.</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-600 dark:text-gray-400">No easy way to save, organize, or share API requests with teammates.</td>
              <td class="p-4 font-semibold text-gray-800 dark:text-gray-200">Organized Collections, Environment Variables & Cloud Sync.</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-600 dark:text-gray-400">Manual verification of JSON responses and auth headers.</td>
              <td class="p-4 font-semibold text-gray-800 dark:text-gray-200">Automated JavaScript Test Assertions & Token Chaining.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    codeExample: `# Before Postman: Testing an API via curl in terminal
curl -X POST https://api.example.com/users \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer token123" \\
  -d '{"name":"John", "email":"john@gmail.com"}'`
  },
  {
    id: 'module-2-api-http-fundamentals',
    title: 'Module 2 – API & HTTP Fundamentals',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Before mastering Postman, you MUST understand what an <strong>API</strong> is and how the <strong>HTTP Protocol</strong> powers communications across the web.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. What is an API?</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        <strong>API</strong> stands for <strong>Application Programming Interface</strong>. It acts as a bridge or messenger that enables two software applications to communicate and exchange data securely.
      </p>

      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 my-6">
        <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">The Restaurant Analogy</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-4">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
            <span class="text-xs font-black uppercase text-blue-500">Customer</span>
            <p class="text-sm font-bold mt-1">Client (Mobile / React App)</p>
          </div>
          <div class="p-4 bg-secondary/10 rounded-2xl border border-secondary/20">
            <span class="text-xs font-black uppercase text-secondary">Waiter</span>
            <p class="text-sm font-bold mt-1">The API (Messenger)</p>
          </div>
          <div class="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
            <span class="text-xs font-black uppercase text-purple-500">Kitchen</span>
            <p class="text-sm font-bold mt-1">Server & Database</p>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-4 text-center">You (Customer) don't enter the Kitchen. You give your order to the Waiter (API), who brings the food back from the Kitchen (Server).</p>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Four Major API Architectures</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <span class="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 font-mono text-xs font-bold uppercase">REST API</span>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mt-2">Representational State Transfer</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Most popular web API. Uses HTTP methods (GET, POST, PUT, DELETE) with JSON payload format.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <span class="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 font-mono text-xs font-bold uppercase">SOAP API</span>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mt-2">Simple Object Access Protocol</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Strict XML-based protocol. Used heavily in banking, payment gateways, and enterprise legacy systems.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <span class="px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-600 font-mono text-xs font-bold uppercase">GraphQL</span>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mt-2">Query Language for APIs</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Single endpoint query language. Allows clients to request exact fields, preventing over-fetching.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <span class="px-2.5 py-1 rounded-md bg-green-500/10 text-green-600 font-mono text-xs font-bold uppercase">gRPC</span>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mt-2">Google Remote Procedure Call</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Ultra-fast RPC framework using Protocol Buffers over HTTP/2. Designed for microservice communication.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. HTTP Methods & Memory Trick</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
              <th class="p-4">Method</th>
              <th class="p-4">Purpose</th>
              <th class="p-4">Memory Trick</th>
              <th class="p-4">Example Endpoint</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 font-bold text-blue-500 font-mono">GET</td>
              <td class="p-4">Retrieve data from server</td>
              <td class="p-4 font-bold text-blue-500">GET = Read / Fetch</td>
              <td class="p-4 font-mono text-xs">GET /api/users</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-green-500 font-mono">POST</td>
              <td class="p-4">Create new resource</td>
              <td class="p-4 font-bold text-green-500">POST = Push new record</td>
              <td class="p-4 font-mono text-xs">POST /api/users</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-amber-500 font-mono">PUT</td>
              <td class="p-4">Replace entire existing resource</td>
              <td class="p-4 font-bold text-amber-500">PUT = Overwrite / Replace</td>
              <td class="p-4 font-mono text-xs">PUT /api/users/10</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-purple-500 font-mono">PATCH</td>
              <td class="p-4">Partial update selected fields</td>
              <td class="p-4 font-bold text-purple-500">PATCH = Small patch edit</td>
              <td class="p-4 font-mono text-xs">PATCH /api/users/10</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-red-500 font-mono">DELETE</td>
              <td class="p-4">Remove resource from server</td>
              <td class="p-4 font-bold text-red-500">DELETE = Remove</td>
              <td class="p-4 font-mono text-xs">DELETE /api/users/10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">4. HTTP Status Codes Cheat Sheet</h3>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 my-6">
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <span class="text-xs font-black uppercase text-blue-500">1xx</span>
          <p class="text-xs font-bold text-gray-700 dark:text-gray-300 mt-1">Informational</p>
          <span class="text-[10px] text-gray-400 block mt-1">100 Continue</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/40 text-center">
          <span class="text-xs font-black uppercase text-green-600">2xx</span>
          <p class="text-xs font-bold text-gray-700 dark:text-gray-300 mt-1">Success</p>
          <span class="text-[10px] text-gray-500 block mt-1">200 OK | 201 Created | 204 No Content</span>
        </div>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-center">
          <span class="text-xs font-black uppercase text-amber-600">3xx</span>
          <p class="text-xs font-bold text-gray-700 dark:text-gray-300 mt-1">Redirection</p>
          <span class="text-[10px] text-gray-500 block mt-1">301 Moved | 304 Not Modified</span>
        </div>
        <div class="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-center">
          <span class="text-xs font-black uppercase text-red-600">4xx</span>
          <p class="text-xs font-bold text-gray-700 dark:text-gray-300 mt-1">Client Error</p>
          <span class="text-[10px] text-gray-500 block mt-1">400 Bad | 401 Unauth | 403 Forbidden | 404 Not Found</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 text-center">
          <span class="text-xs font-black uppercase text-purple-600">5xx</span>
          <p class="text-xs font-bold text-gray-700 dark:text-gray-300 mt-1">Server Error</p>
          <span class="text-[10px] text-gray-500 block mt-1">500 Internal | 502 Gateway | 503 Unavailable</span>
        </div>
      </div>
    `,
    codeExample: `# Anatomy of a URL:
# https://api.example.com/users/10?page=2&limit=10
# 
# Protocol: https://
# Host/Domain: api.example.com
# Path: /users
# Path Parameter: /10
# Query Parameters: ?page=2&limit=10`
  },
  {
    id: 'module-3-postman-interface-setup',
    title: 'Module 3 – Postman Interface, Workspaces & Requests',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Mastering the Postman user interface (UI) allows you to build, configure, organize, and execute API calls seamlessly.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Main Interface Sections</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">Sidebar</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Navigate Collections, History, Environments, Mock Servers, Monitors, & Flows.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">Request Builder</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Configure HTTP Method, URL, Params, Auth, Headers, Body, Pre-request Scripts, & Tests.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">Response Panel</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Inspect status code, response time, data size, cookies, headers, and pretty-printed JSON body.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">Postman Console</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Essential log inspector displaying raw network requests, response headers, and <code>console.log()</code> output.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Workspaces & Collections</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        <strong>Workspaces</strong> group related API projects (Personal, Team, Public, Partner).<br/>
        <strong>Collections</strong> are folders that organize related API requests into structured suites (e.g. User API → Login, Register, Update, Delete).
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. Body Types in Postman</h3>
      <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300 my-6">
        <li><strong>form-data:</strong> Used for file uploads or submitting key-value pairs (multipart/form-data).</li>
        <li><strong>x-www-form-urlencoded:</strong> Standard HTML form submission format.</li>
        <li><strong>raw:</strong> Most popular for REST APIs. Supports <code>JSON</code>, <code>XML</code>, <code>HTML</code>, <code>Text</code>, and <code>JavaScript</code> payloads.</li>
        <li><strong>binary:</strong> Used to send raw binary files (images, PDFs, audio).</li>
      </ul>
    `,
    codeExample: `// Sample JSON Request Body (raw JSON format)
{
  "email": "john.doe@example.com",
  "password": "SecretPassword123",
  "role": "ADMIN"
}`
  },
  {
    id: 'module-4-authentication',
    title: 'Module 4 – Authentication & Security in Postman',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Most production APIs require <strong>Authentication</strong> to verify client identity and grant permissions before processing requests.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">Supported Authentication Types</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <span class="px-2.5 py-1 rounded-md bg-green-500/10 text-green-600 font-mono text-xs font-bold uppercase">Bearer Token</span>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mt-2">Bearer Token (JWT - Most Popular)</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Passes access token in Authorization header: <code>Authorization: Bearer {{token}}</code>.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <span class="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 font-mono text-xs font-bold uppercase">API Key</span>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mt-2">API Key</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Passes key-value pair in Header or Query Parameter (e.g. <code>X-API-KEY: secret123</code>).</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <span class="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 font-mono text-xs font-bold uppercase">Basic Auth</span>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mt-2">Basic Auth</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Sends Base64-encoded username and password string.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <span class="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 font-mono text-xs font-bold uppercase">OAuth 2.0</span>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mt-2">OAuth 2.0</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Industry standard authorization framework supporting Access Tokens, Refresh Tokens, & Authorization Codes.</p>
        </div>
      </div>
    `,
    codeExample: `// Automatic Auth Header injected by Postman for Bearer Token:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
  },
  {
    id: 'module-5-variables-environments',
    title: 'Module 5 – Variables, Environments & Dynamic Values',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        <strong>Variables</strong> allow you to store and reuse dynamic values across requests, eliminating hardcoded URLs, tokens, or IDs.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Six Variable Scopes Hierarchy</h3>
      <div class="p-6 bg-gray-900 text-gray-200 rounded-3xl space-y-3 font-mono text-sm my-6">
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span>1. Global Variables</span> <span class="text-gray-500 text-xs">Accessible across ALL collections & workspaces</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span>2. Collection Variables</span> <span class="text-gray-500 text-xs">Accessible across requests in a specific Collection</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2 text-secondary font-bold">
          <span>3. Environment Variables</span> <span class="text-secondary text-xs">Active environment scope (Dev / Test / Prod) [MOST USED]</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span>4. Data Variables</span> <span class="text-gray-500 text-xs">Derived from CSV / JSON files in Collection Runner</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span>5. Local Variables</span> <span class="text-gray-500 text-xs">Transient variables scoped to single request execution</span>
        </div>
        <div class="flex justify-between items-center">
          <span>6. Vault Variables</span> <span class="text-gray-500 text-xs">Encrypted sensitive credentials</span>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Environment Switching</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <span class="text-xs font-black uppercase text-blue-500">Development</span>
          <p class="font-mono text-xs text-gray-600 dark:text-gray-400 mt-2">base_url = https://dev.api.com</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <span class="text-xs font-black uppercase text-amber-500">Testing (QA)</span>
          <p class="font-mono text-xs text-gray-600 dark:text-gray-400 mt-2">base_url = https://test.api.com</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <span class="text-xs font-black uppercase text-red-500">Production</span>
          <p class="font-mono text-xs text-gray-600 dark:text-gray-400 mt-2">base_url = https://api.com</p>
        </div>
      </div>
    `,
    codeExample: `# Postman Built-in Dynamic Variables (Generate random data instantly):
{{$guid}}         // Generates random UUID
{{$timestamp}}    // Current UNIX timestamp
{{$randomEmail}}  // Generates fake random email
{{$randomFirstName}} // Generates fake first name`
  },
  {
    id: 'module-6-scripts-tests-pm-object',
    title: 'Module 6 – Pre-request Scripts, Test Scripts & pm Object',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Postman includes a powerful JavaScript sandbox environment. You can run <strong>Pre-request Scripts</strong> before sending a request and <strong>Test Scripts</strong> to validate responses after execution.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. The <code>pm</code> Object API Reference</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
              <th class="p-4">Method / Property</th>
              <th class="p-4">Purpose</th>
              <th class="p-4">Example Usage</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 font-mono text-xs font-bold text-secondary">pm.response.json()</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Parses response body string into JSON object</td>
              <td class="p-4 font-mono text-xs">const data = pm.response.json();</td>
            </tr>
            <tr>
              <td class="p-4 font-mono text-xs font-bold text-secondary">pm.environment.set(k, v)</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Stores variable in active environment</td>
              <td class="p-4 font-mono text-xs">pm.environment.set("token", data.token);</td>
            </tr>
            <tr>
              <td class="p-4 font-mono text-xs font-bold text-secondary">pm.environment.get(k)</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Retrieves value from active environment</td>
              <td class="p-4 font-mono text-xs">const token = pm.environment.get("token");</td>
            </tr>
            <tr>
              <td class="p-4 font-mono text-xs font-bold text-secondary">pm.test(name, fn)</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Defines an assertion test block</td>
              <td class="p-4 font-mono text-xs">pm.test("Status 200", () => { ... });</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Common Test Assertions (Chai BDD Syntax)</h3>
    `,
    codeExample: `// Check HTTP Status Code is 200 OK
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Check Response Time is under 500ms
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Extract JSON & Save Token to Environment
const responseData = pm.response.json();
pm.environment.set("authToken", responseData.token);

// Validate JSON object property
pm.test("User name matches John", function () {
    pm.expect(responseData.name).to.eql("John");
});`
  },
  {
    id: 'module-7-collection-runner-data-testing',
    title: 'Module 7 – Collection Runner & Data-Driven Testing',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        The <strong>Collection Runner</strong> allows you to execute all requests inside a collection automatically in sequence, enabling automated regression testing and data-driven load simulation.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Request Chaining Workflow</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Request chaining passes dynamic output from one request into the input of subsequent requests:</p>
      
      <div class="p-6 bg-gray-900 text-gray-200 rounded-3xl space-y-3 font-mono text-sm my-6">
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">1</span> <strong>POST /login</strong> → Server returns JWT Token → Save to <code>{{token}}</code>.</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs">2</span> <strong>GET /products</strong> → Uses <code>Bearer {{token}}</code> → Save Product ID to <code>{{productId}}</code>.</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">3</span> <strong>PUT /products/{{productId}}</strong> → Updates item details.</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs">4</span> <strong>DELETE /products/{{productId}}</strong> → Deletes test product.</div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Data-Driven Testing (CSV / JSON)</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Upload a CSV or JSON file containing multiple test data rows into Collection Runner to execute automated parameter iteration tests.
      </p>
    `,
    codeExample: `// Example CSV File for Data-Driven Testing (users.csv):
// email,password,expectedStatus
// john@test.com,123456,200
// invalid@test.com,wrongpass,401

// Test script reading CSV iteration data:
pm.test("Status code matches CSV dataset", function () {
    pm.response.to.have.status(pm.iterationData.get("expectedStatus"));
});`
  },
  {
    id: 'module-8-newman-cli-cicd',
    title: 'Module 8 – Newman CLI & CI/CD Automation',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        <strong>Newman</strong> is the official command-line collection runner for Postman. It allows developers and DevOps engineers to execute Postman tests directly in terminal environments and CI/CD build servers (Jenkins, GitHub Actions, GitLab CI).
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Installation & Terminal Execution</h3>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-xl text-sm font-mono my-4"><code># Install Newman globally via Node.js npm
npm install -g newman

# Install HTML reporter plugin
npm install -g newman-reporter-htmlextra

# Run collection from terminal
newman run collection.json -e environment.json -r htmlextra</code></pre>
    `,
    codeExample: `# Sample GitHub Actions CI Workflow integrating Newman test suite:
name: API Regression Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install -g newman
      - run: newman run tests/PostmanCollection.json -e tests/DevEnv.json`
  },
  {
    id: 'module-9-advanced-postman-features',
    title: 'Module 9 – Advanced Postman Features',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Explore enterprise capabilities: Mock Servers, Scheduled Monitors, Interactive Flows, API Documentation, WebSockets, GraphQL, and gRPC.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-secondary text-lg mb-1">Mock Servers</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Simulate backend API responses before backend code is written, enabling parallel frontend development.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-secondary text-lg mb-1">Monitors</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Schedule automatic cloud test execution (every 5 mins / hourly) to check production uptime & health.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-secondary text-lg mb-1">Postman Flows</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Visual drag-and-drop workflow canvas to visually chain requests, logic loops, and conditions without code.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-secondary text-lg mb-1">Visualizer</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Render JSON response data as interactive HTML tables and graphs using Handlebars templates.</p>
        </div>
      </div>
    `,
    codeExample: `// Example Postman Visualizer Template Script (Tests Tab):
var template = \`
    <table border="1">
        <tr><th>ID</th><th>Name</th></tr>
        {{#each response}}
            <tr><td>{{id}}</td><td>{{name}}</td></tr>
        {{/each}}
    </table>
\`;
pm.visualizer.set(template, { response: pm.response.json() });`
  },
  {
    id: 'module-10-real-company-workflow',
    title: 'Module 10 – Real Company E-Commerce Project Workflow',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Here is the exact step-by-step workflow used by professional software engineering teams to test an E-Commerce backend service in Postman.
      </p>

      <div class="p-6 bg-gray-900 text-white rounded-3xl space-y-4 my-8">
        <h4 class="font-bold text-secondary text-lg">Amazon E-Commerce API Test Suite Walkthrough</h4>
        <ol class="list-decimal list-inside space-y-2 text-xs text-gray-300 font-mono">
          <li><strong>Step 1: Login API (POST /login)</strong> → Send email & password. Server returns token: <code>{"token": "ABC123XYZ"}</code>.</li>
          <li><strong>Step 2: Save Token Automatically</strong> → In Tests tab: <code>pm.environment.set("token", pm.response.json().token);</code></li>
          <li><strong>Step 3: Add Authorization Header</strong> → Set collection Authorization to <code>Bearer {{token}}</code>.</li>
          <li><strong>Step 4: Get Products (GET /products)</strong> → Server returns product list. In Tests tab: <code>pm.environment.set("productId", pm.response.json()[0].id);</code></li>
          <li><strong>Step 5: Update Product (PUT /products/{{productId}})</strong> → Send updated price payload. Assert status 200.</li>
          <li><strong>Step 6: Delete Product (DELETE /products/{{productId}})</strong> → Assert status 204 No Content.</li>
        </ol>
      </div>
    `,
    codeExample: `// Complete Request Processing Lifecycle:
// Create Request → Method & URL → Headers & Body → Pre-request Script 
// → Click Send → Server Execution → Response Received → Run Tests → Save Variables`
  },
  {
    id: 'module-11-roadmap-timeline-cheat-sheet',
    title: 'Module 11 – Roadmap, Timeline & 10-Min Cheat Sheet',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Your complete 5-level learning roadmap, timeline, and 22-topic revision cheat sheet for Postman mastery.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Estimated Learning Timeline</h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <span class="text-xs font-black text-blue-500 uppercase">1–2 Days</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">API fundamentals, HTTP methods & basic UI usage.</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <span class="text-xs font-black text-green-500 uppercase">1 Week</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Collections, environments, variables, auth & assertions.</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <span class="text-xs font-black text-amber-500 uppercase">2–4 Weeks</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Advanced JS scripting, request chaining, Newman CLI & CI/CD.</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <span class="text-xs font-black text-purple-500 uppercase">1–2 Months</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Full production test suites, contract testing & enterprise governance.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. One-Line Fast Revision Table</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
              <th class="p-3">Term</th>
              <th class="p-3">One-Line Definition</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-xs">
            <tr><td class="p-3 font-bold text-secondary">API</td><td class="p-3">Communication bridge between software systems</td></tr>
            <tr><td class="p-3 font-bold text-secondary">Postman</td><td class="p-3">API development and automated testing platform</td></tr>
            <tr><td class="p-3 font-bold text-secondary">GET / POST / PUT / DELETE</td><td class="p-3">Read / Create / Replace / Remove data operations</td></tr>
            <tr><td class="p-3 font-bold text-secondary">Collection</td><td class="p-3">Folder organizing related API requests</td></tr>
            <tr><td class="p-3 font-bold text-secondary">Environment</td><td class="p-3">Set of dynamic variables for deployment stages (Dev/Test/Prod)</td></tr>
            <tr><td class="p-3 font-bold text-secondary">Bearer Token</td><td class="p-3">JWT token string used for API authentication</td></tr>
            <tr><td class="p-3 font-bold text-secondary">Pre-request Script</td><td class="p-3">JavaScript executed BEFORE sending the HTTP request</td></tr>
            <tr><td class="p-3 font-bold text-secondary">Test Script</td><td class="p-3">JavaScript executed AFTER receiving response to run assertions</td></tr>
            <tr><td class="p-3 font-bold text-secondary">Newman</td><td class="p-3">Command-line runner for executing collections in terminal & CI/CD</td></tr>
          </tbody>
        </table>
      </div>
    `,
    codeExample: `# 10-Minute Postman Summary Commands
# Run collection headlessly in terminal
newman run collection.json -e env.json`
  },
  {
    id: 'module-12-interview-questions-best-practices',
    title: 'Module 12 – Top 20 Interview Q&A & Best Practices',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Frequently asked Postman interview questions with expert answers and industry best practices.
      </p>

      <div class="space-y-6 my-8">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-secondary text-base">Q1. Difference between PUT and PATCH?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> <code>PUT</code> replaces the ENTIRE resource object on the server. If fields are omitted, they may be overwritten with null. <code>PATCH</code> performs partial updates, modifying ONLY the specific fields provided in the request payload.</p>
        </div>

        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-secondary text-base">Q2. How do you extract a token from one response and use it in another request?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> In the <strong>Tests</strong> tab of the login request, parse the JSON response and store it in an environment variable: <code>pm.environment.set("token", pm.response.json().token);</code>. Then in subsequent requests, set Authorization to <code>Bearer {{token}}</code>.</p>
        </div>

        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-secondary text-base">Q3. What is Newman and why is it used?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> Newman is Postman's CLI runner. It allows running Postman test collections headlessly in command-line environments, generating HTML reports, and automating API regression tests inside CI/CD pipelines (Jenkins, GitHub Actions).</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">Enterprise Best Practices</h3>
      <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300 my-6">
        <li class="flex items-center gap-3">✅ Never hardcode environment URLs or secret API tokens in requests — always use <code>{{variables}}</code>.</li>
        <li class="flex items-center gap-3">✅ Keep sensitive credentials inside Environment Variables or Vaults, excluding them from shared public collections.</li>
        <li class="flex items-center gap-3">✅ Write automated response time and status code assertions for every single request in a collection.</li>
        <li class="flex items-center gap-3">✅ Organize requests into clear, modular collection folders mirroring backend API controllers.</li>
      </ul>
    `,
    codeExample: `// Best practice test snippet for all API endpoints:
pm.test("Status is 200 OK", () => pm.response.to.have.status(200));
pm.test("Response time < 500ms", () => pm.expect(pm.response.responseTime).to.be.below(500));
pm.test("Content-Type is JSON", () => pm.response.to.have.header("Content-Type", /json/));`
  }
];
