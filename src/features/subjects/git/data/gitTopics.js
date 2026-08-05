export const gitTopics = [
  {
    id: 'module-1-intro',
    title: 'Module 1 – Introduction to Version Control',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Welcome to the ultimate mastery module on <strong>Git & GitHub</strong>. Version Control is the single most critical tool for modern software developers, enabling seamless teamwork, instant recovery from mistakes, and tracking every line of code across time.
      </p>

      <div class="p-6 bg-secondary/10 border-l-4 border-secondary rounded-2xl my-8">
        <h4 class="text-sm font-black text-secondary tracking-widest uppercase mb-1">Core Concept</h4>
        <p class="text-base text-gray-700 dark:text-gray-300">
          A <strong>Version Control System (VCS)</strong> is software that tracks and records changes to files over time so that you can recall specific versions later, compare changes, and collaborate without stepping on teammates' toes.
        </p>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">1. Problems Before Git Existed</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Before Git, developers managed project versions manually by saving multiple copies of project folders:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
          <span class="text-xs font-black uppercase text-red-600 tracking-wider">The Old Way (Disaster)</span>
          <ul class="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>❌ <code>Project_v1.zip</code></li>
            <li>❌ <code>Project_Final.zip</code></li>
            <li>❌ <code>Project_Final_v2_LATEST.zip</code></li>
            <li>❌ <code>Project_REAL_FINAL_dont_touch.zip</code></li>
          </ul>
        </div>
        <div class="p-5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
          <span class="text-xs font-black uppercase text-red-600 tracking-wider">Major Pain Points</span>
          <ul class="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>⚠️ Team members overwriting each other's code.</li>
            <li>⚠️ No way to know WHO made a specific bug or WHEN.</li>
            <li>⚠️ Sharing code via USB drives, zip files, or email.</li>
            <li>⚠️ Zero automated rollback or recovery options.</li>
          </ul>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Why Git Was Invented</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        In <strong>2005</strong>, <strong>Linus Torvalds</strong> (the creator of Linux) invented <strong>Git</strong> to manage the massive Linux kernel source code. He designed Git with key goals: extraordinary speed, distributed architecture, protection against data corruption, and robust branching capabilities.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. Centralized vs Distributed Version Control</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black tracking-wider text-gray-600 dark:text-gray-300">
              <th class="p-4">Feature</th>
              <th class="p-4">Centralized (CVCS - SVN, CVS)</th>
              <th class="p-4 text-secondary">Distributed (DVCS - Git)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 font-bold">Repository Copy</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Single central server holds full history.</td>
              <td class="p-4 font-semibold text-gray-800 dark:text-gray-200">EVERY developer has a FULL copy of history locally.</td>
            </tr>
            <tr>
              <td class="p-4 font-bold">Offline Work</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Cannot commit, view history, or branch offline.</td>
              <td class="p-4 font-semibold text-gray-800 dark:text-gray-200">100% full offline support for commits, history, branching.</td>
            </tr>
            <tr>
              <td class="p-4 font-bold">Speed</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Slow (requires network requests for operations).</td>
              <td class="p-4 font-semibold text-gray-800 dark:text-gray-200">Lightning fast (all operations execute locally on disk).</td>
            </tr>
            <tr>
              <td class="p-4 font-bold">Single Point Failure</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">If central server crashes, work stops for everyone.</td>
              <td class="p-4 font-semibold text-gray-800 dark:text-gray-200">No single point of failure; every peer acts as a full backup.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">4. Git vs GitHub vs GitLab vs Bitbucket</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <div class="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center font-black text-lg mb-3">Git</div>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white">Git (The CLI / Engine)</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Open-source command-line tool installed on your computer. Tracks file history, manages commits, and handles local branches.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-black text-lg mb-3">GH</div>
          <h4 class="font-bold text-lg text-gray-900 dark:text-white">GitHub (Cloud Host & Platform)</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Cloud-based hosting web platform built ON TOP of Git. Provides UI, Pull Requests, Issues, Actions (CI/CD), and team security management.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">5. Complete Git Architecture (4 Key Areas)</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-6">Understanding how your code flows through these 4 states is the key to mastering Git:</p>
      
      <div class="p-6 bg-gray-900 text-white rounded-3xl space-y-6 my-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div class="p-4 bg-gray-800 rounded-2xl border border-gray-700">
            <span class="text-xs uppercase tracking-widest text-amber-400 font-black">1. Working Directory</span>
            <p class="text-xs text-gray-400 mt-2">Your active local folder where you edit source files.</p>
          </div>
          <div class="p-4 bg-gray-800 rounded-2xl border border-gray-700">
            <span class="text-xs uppercase tracking-widest text-blue-400 font-black">2. Staging Area (Index)</span>
            <p class="text-xs text-gray-400 mt-2">Shopping cart holding selected changes ready for commit.</p>
          </div>
          <div class="p-4 bg-gray-800 rounded-2xl border border-gray-700">
            <span class="text-xs uppercase tracking-widest text-green-400 font-black">3. Local Repository</span>
            <p class="text-xs text-gray-400 mt-2">Git's local database (<code>.git</code>) storing full commit snapshots.</p>
          </div>
          <div class="p-4 bg-gray-800 rounded-2xl border border-gray-700">
            <span class="text-xs uppercase tracking-widest text-purple-400 font-black">4. Remote Repository</span>
            <p class="text-xs text-gray-400 mt-2">Cloud server (GitHub) for sharing code with your team.</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">6. File Lifecycle in Git</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Every file inside a Git repository cycles through 4 statuses:</p>
      <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <li class="flex items-center gap-3"><span class="px-2.5 py-1 rounded-md bg-gray-200 dark:bg-gray-800 font-mono text-xs font-bold">Untracked</span> File newly created, unknown to Git. Run <code>git add</code> to stage.</li>
        <li class="flex items-center gap-3"><span class="px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-600 font-mono text-xs font-bold">Staged</span> Changes added to Staging Area, ready to be committed.</li>
        <li class="flex items-center gap-3"><span class="px-2.5 py-1 rounded-md bg-green-100 dark:bg-green-950 text-green-600 font-mono text-xs font-bold">Unmodified / Tracked</span> Committed into database, matches local snapshot.</li>
        <li class="flex items-center gap-3"><span class="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-600 font-mono text-xs font-bold">Modified</span> File edited in Working Directory after last commit.</li>
      </ul>
    `,
    codeExample: `# Check current file statuses in your project
git status

# Add file to staging area
git add index.html

# Commit staged file to local repository
git commit -m "Initial commit"`
  },
  {
    id: 'module-2-install-config',
    title: 'Module 2 – Installing & Configuring Git',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Before you start tracking code, Git must be installed on your machine and configured with your developer identity (Name and Email). This author information is baked into every commit you create.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Installation Steps</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="text-xs font-black uppercase text-blue-600 tracking-wider">Windows</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Download installer from <strong>git-scm.com</strong>. Run setup using default settings. Includes <strong>Git Bash</strong> shell.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="text-xs font-black uppercase text-purple-600 tracking-wider">macOS</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Install via Homebrew: <code>brew install git</code> or install Xcode Command Line Tools: <code>xcode-select --install</code>.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="text-xs font-black uppercase text-green-600 tracking-wider">Linux (Ubuntu/Debian)</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Run terminal command: <code>sudo apt update && sudo apt install git</code>.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Three Configuration Levels</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Git configuration settings are stored in 3 hierarchical levels:</p>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
              <th class="p-4">Level</th>
              <th class="p-4">Command Flag</th>
              <th class="p-4">File Location</th>
              <th class="p-4">Scope</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 font-bold">System</td>
              <td class="p-4 font-mono text-xs">--system</td>
              <td class="p-4 font-mono text-xs">/etc/gitconfig</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Applies to all OS users & repos.</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-secondary">Global</td>
              <td class="p-4 font-mono text-xs text-secondary font-bold">--global</td>
              <td class="p-4 font-mono text-xs">~/.gitconfig</td>
              <td class="p-4 text-gray-700 dark:text-gray-300 font-semibold">Applies to current user across ALL repos (Most Used).</td>
            </tr>
            <tr>
              <td class="p-4 font-bold">Local</td>
              <td class="p-4 font-mono text-xs">--local</td>
              <td class="p-4 font-mono text-xs">.git/config</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Applies ONLY to the specific repository.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. Managing Multiple GitHub Accounts</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">If you use a Personal and a Company GitHub account on the same PC:</p>
      <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <li>Generate two separate SSH keys: <code>id_rsa_personal</code> and <code>id_rsa_company</code>.</li>
        <li>Configure <code>~/.ssh/config</code> with Host aliases (e.g. <code>github-personal</code> and <code>github-company</code>).</li>
        <li>Use local config inside company repos: <code>git config --local user.email "office@company.com"</code>.</li>
      </ol>
    `,
    codeExample: `# Verify Git Version
git --version

# Set Global Author Identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set Default Branch Name to main
git config --global init.defaultBranch main

# List All Active Configuration Settings
git config --list`
  },
  {
    id: 'module-3-repositories',
    title: 'Module 3 – Creating Repositories',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        A <strong>Repository (Repo)</strong> is a project directory monitored and managed by Git. It stores all source files, documentation, assets, and the complete historical timeline of every modification.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Local vs Remote Repositories</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Local Repository</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Stored directly on your local hard disk in your project folder. Managed by the hidden <code>.git</code> folder.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Remote Repository</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Hosted in the cloud on servers like GitHub, GitLab, or Bitbucket for collaborative access across teams.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Anatomy of the Hidden <code>.git</code> Folder</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">When you run <code>git init</code>, Git creates a hidden directory named <code>.git</code>. This folder IS the repository. Deleting it destroys all commit history!</p>
      
      <div class="p-6 bg-gray-900 text-gray-200 rounded-3xl font-mono text-sm space-y-2 my-6">
        <div>📁 <strong>.git/</strong></div>
        <div class="pl-4">├── 📁 <strong>HEAD</strong> <span class="text-gray-500">// Text file pointing to active checked-out branch</span></div>
        <div class="pl-4">├── 📁 <strong>config</strong> <span class="text-gray-500">// Repository-specific configuration settings</span></div>
        <div class="pl-4">├── 📁 <strong>index</strong> <span class="text-gray-500">// Binary staging area holding cached file states</span></div>
        <div class="pl-4">├── 📁 <strong>objects/</strong> <span class="text-gray-500">// Database storing all Blobs, Trees, Commits (SHA-1)</span></div>
        <div class="pl-4">├── 📁 <strong>refs/</strong> <span class="text-gray-500">// Pointers to local branches, remote branches, & tags</span></div>
        <div class="pl-4">└── 📁 <strong>hooks/</strong> <span class="text-gray-500">// Scripts executed before/after Git commands</span></div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. The <code>.gitignore</code> File</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        A <code>.gitignore</code> file tells Git which files or directories to ignore (e.g. <code>node_modules/</code>, build artifacts, passwords, environment variables <code>.env</code>).
      </p>
    `,
    codeExample: `# Initialize a new local repository in current directory
git init

# Clone an existing remote repository from GitHub
git clone https://github.com/user/repository.git

# Example .gitignore content
node_modules/
.env
dist/
*.log`
  },
  {
    id: 'module-4-basics-commands',
    title: 'Module 4 – Essential Git Commands Handbook',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        This is your comprehensive handbook for fundamental Git commands. Each command is framed with: <strong>Definition, Why it exists, When to use it, Syntax, Real-time example, and Interview Question</strong>.
      </p>

      <div class="space-y-10 my-8">
        
        <!-- Command 1: git status -->
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-xl font-black text-secondary font-mono">1. git status</h4>
            <span class="px-3 py-1 bg-secondary/10 text-secondary text-xs font-black rounded-full uppercase">Most Used</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Definition:</strong> Inspects and displays the current state of the Working Directory and Staging Area.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Why it exists:</strong> To give developers complete visibility over modified, staged, untracked, and deleted files before committing.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>When to use:</strong> Run before <code>git add</code> and right before <code>git commit</code> (used 20+ times a day).</p>
          <p class="text-sm font-mono text-secondary bg-secondary/5 p-2 rounded-lg">Syntax: git status</p>
          <p class="text-xs text-gray-500 italic">Interview Question: What does git status show? Answer: It shows untracked files, modified files, staged changes, and current branch state.</p>
        </div>

        <!-- Command 2: git add -->
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-4">
          <h4 class="text-xl font-black text-secondary font-mono">2. git add</h4>
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Definition:</strong> Moves selected changes from Working Directory to Staging Area (Index).</p>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Why it exists:</strong> Allows selective committing (like placing chosen items into a shopping cart).</p>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>When to use:</strong> Whenever you finish modifying a file or creating new features.</p>
          <p class="text-sm font-mono text-secondary bg-secondary/5 p-2 rounded-lg">Syntax: git add filename.ext  OR  git add .</p>
        </div>

        <!-- Command 3: git commit -->
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-4">
          <h4 class="text-xl font-black text-secondary font-mono">3. git commit</h4>
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Definition:</strong> Saves a permanent snapshot of staged changes into the local repository with a unique SHA-1 hash.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Why it exists:</strong> Records project history checkpoints that can be recalled anytime.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>When to use:</strong> After staging logical units of work with meaningful commit messages.</p>
          <p class="text-sm font-mono text-secondary bg-secondary/5 p-2 rounded-lg">Syntax: git commit -m "Add authentication API"</p>
        </div>

        <!-- Command 4: git log -->
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-4">
          <h4 class="text-xl font-black text-secondary font-mono">4. git log</h4>
          <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Definition:</strong> Displays chronological commit history including Commit SHA, Author, Date, and Message.</p>
          <p class="text-sm font-mono text-secondary bg-secondary/5 p-2 rounded-lg">Syntax: git log --oneline --graph --all</p>
        </div>

      </div>
    `,
    codeExample: `# Daily Essential Commands Workflow
git status
git add .
git commit -m "FEAT: Add user profile management module"
git log --oneline -n 5`
  },
  {
    id: 'module-5-branching',
    title: 'Module 5 – Git Branching Mastery',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Branching is Git's superpower. A <strong>branch</strong> is a lightweight, moveable pointer to a specific commit. It allows developers to work in complete isolation without polluting the stable <code>main</code> branch.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Standard Industry Branch Naming</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-mono text-xs font-bold text-secondary">main / master</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Production-ready branch. Contains strictly tested, live release code.</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-mono text-xs font-bold text-blue-500">develop</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Integration branch for current sprint development features.</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-mono text-xs font-bold text-green-500">feature/feature-name</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Created for developing specific new modules (e.g. <code>feature/payment-gateway</code>).</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-mono text-xs font-bold text-red-500">hotfix/bug-name</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Emergency patch created directly off <code>main</code> to fix live production bugs.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Detached HEAD State Explained</h3>
      <div class="p-6 bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-2xl my-6">
        <h4 class="font-bold text-amber-700 dark:amber-400">What is Detached HEAD?</h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">
          Occurs when HEAD points directly to a <strong>commit hash</strong> instead of a branch reference (e.g. when running <code>git checkout &lt;commit-id&gt;</code>). Any new commits made in this state are orphan commits and will be lost if you switch branches!
        </p>
        <p class="text-xs font-mono text-amber-600 mt-3">Fix: git switch -c new-temporary-branch-name</p>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. What If You Forgot to Switch Branch Before Editing?</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">If you edited code on <code>main</code> by mistake, but HAVEN'T committed yet:</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-xl text-sm font-mono"><code># Method 1: Create and switch to new branch (uncommitted changes move automatically!)
git switch -c feature/login

# Method 2: Stash changes, switch, and apply
git stash
git switch feature/login
git stash pop</code></pre>
    `,
    codeExample: `# List all local branches (* indicates active branch)
git branch

# Create a new branch
git branch feature/user-profile

# Switch to existing branch (Modern command)
git switch feature/user-profile

# Shortcut: Create AND switch to branch in 1 step
git switch -c feature/user-profile

# Delete merged branch
git branch -d feature/user-profile`
  },
  {
    id: 'module-6-merging',
    title: 'Module 6 – Merging & Conflict Resolution',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        <strong>Merging</strong> integrates changes from one branch into another. Understanding Fast-Forward vs 3-Way merges and mastering conflict resolution is required for every developer.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Fast-Forward vs 3-Way Merge</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Fast-Forward Merge</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Occurs when target branch has no new commits since feature branch was created. Git simply moves branch pointer forward. No merge commit is created.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">3-Way Merge</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Occurs when BOTH branches have new independent commits. Git combines them using a common ancestor commit and creates a special <strong>Merge Commit</strong>.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Merge Conflict Markers Anatomy</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">When two developers edit the same line of the same file, Git pauses merge and outputs conflict markers:</p>
      
      <div class="p-6 bg-gray-900 text-gray-100 rounded-3xl font-mono text-sm space-y-2 my-6">
        <div class="text-red-400">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Your Current Active Branch)</div>
        <div class="text-gray-300">System.out.println("Hello World from Developer A");</div>
        <div class="text-yellow-400">======= (Divider)</div>
        <div class="text-blue-400">System.out.println("Welcome User from Developer B");</div>
        <div class="text-green-400">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/login (Incoming Branch)</div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. Step-by-Step Conflict Resolution Workflow</h3>
      <ol class="list-decimal list-inside space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <li>Open conflicted file in code editor (VS Code highlights conflicts automatically).</li>
        <li>Manually edit text to keep desired code and remove all markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>).</li>
        <li>Save file and stage it: <code>git add filename</code>.</li>
        <li>Complete merge: <code>git commit -m "FIX: Resolve merge conflict in LoginController.java"</code>.</li>
      </ol>
    `,
    codeExample: `# Switch to target branch
git switch main

# Merge feature branch into main
git merge feature/login

# If conflict happens, check conflicted files
git status

# After resolving conflicts manually in editor
git add .
git commit -m "Merge resolved"`
  },
  {
    id: 'module-7-remote-github',
    title: 'Module 7 – Remote GitHub & SSH Setup',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Connecting your local Git project to remote cloud hosts like <strong>GitHub</strong> enables remote collaboration, off-site backup, automated code reviews, and CI/CD pipelines.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Connecting Local Project to GitHub</h3>
      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-4 my-6">
        <div class="space-y-2">
          <span class="text-xs font-black uppercase text-secondary tracking-wider">Step 1: Create empty repo on GitHub.com</span>
          <p class="text-sm text-gray-600 dark:text-gray-400">Do not check "Initialize with README" if you already have local files.</p>
        </div>
        <div class="space-y-2">
          <span class="text-xs font-black uppercase text-secondary tracking-wider">Step 2: Add remote origin URL</span>
          <pre class="bg-gray-900 text-gray-100 p-3 rounded-xl text-xs font-mono">git remote add origin https://github.com/username/repository-name.git</pre>
        </div>
        <div class="space-y-2">
          <span class="text-xs font-black uppercase text-secondary tracking-wider">Step 3: Push code with upstream tracking</span>
          <pre class="bg-gray-900 text-gray-100 p-3 rounded-xl text-xs font-mono">git push -u origin main</pre>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. SSH Keys vs HTTPS (PAT) Authentication</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">HTTPS + PAT</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Requires generating Personal Access Tokens (PAT) on GitHub. Standard URL format: <code>https://github.com/...</code></p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-secondary mb-2">SSH Key (Recommended)</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Uses public-private key cryptography (<code>ed25519</code> algorithm). Passwordless, ultra-secure. URL format: <code>git@github.com:...</code></p>
        </div>
      </div>
    `,
    codeExample: `# Check registered remote URLs
git remote -v

# Change remote URL (e.g. from HTTPS to SSH)
git remote set-url origin git@github.com:username/repository.git

# Fetch latest commits from remote without merging
git fetch origin

# Pull latest changes (fetch + merge)
git pull origin main`
  },
  {
    id: 'module-8-pull-requests',
    title: 'Module 8 – Pull Requests & Code Review',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        A <strong>Pull Request (PR)</strong> is a request submitted on GitHub proposing that your feature branch changes be reviewed and merged into a target branch (like <code>main</code> or <code>develop</code>).
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Why Enterprise Companies Use PRs</h3>
      <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300 my-6">
        <li class="flex items-center gap-3">✅ <strong>Code Quality Control:</strong> Senior developers inspect code for bugs and architectural standard adherence.</li>
        <li class="flex items-center gap-3">✅ <strong>Knowledge Sharing:</strong> Team members stay informed about newly implemented platform capabilities.</li>
        <li class="flex items-center gap-3">✅ <strong>Automated Testing Trigger:</strong> Opening a PR triggers automated CI build/test scripts.</li>
        <li class="flex items-center gap-3">✅ <strong>Protected Branches:</strong> Prevents unauthorized direct pushes to <code>main</code>.</li>
      </ul>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Three PR Merge Options</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
              <th class="p-4">Merge Strategy</th>
              <th class="p-4">How It Works</th>
              <th class="p-4">History Effect</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 font-bold">Create a Merge Commit</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Merges feature branch into main with a dedicated 3-way merge commit.</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Preserves entire feature branch history.</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-secondary">Squash and Merge</td>
              <td class="p-4 text-gray-700 dark:text-gray-300 font-semibold">Combines all 10+ feature commits into 1 single clean commit on main.</td>
              <td class="p-4 text-secondary font-bold">Ultra-clean, linear main branch history (Industry Standard).</td>
            </tr>
            <tr>
              <td class="p-4 font-bold">Rebase and Merge</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Rebases feature commits individually onto tip of main.</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Linear history without merge commits.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    codeExample: `# CLI approach to create PR using GitHub CLI tool (gh)
gh pr create --title "FEAT: Implement OAuth Login" --body "Closes issue #42"`
  },
  {
    id: 'module-9-github-workflow',
    title: 'Module 9 – GitHub Workflow & Collaboration',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        The <strong>GitHub Workflow</strong> is the standard collaborative process used by thousands of companies and open-source projects worldwide to ship code safely.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">Complete 9-Step Lifecycle</h3>
      
      <div class="p-6 bg-gray-900 text-gray-200 rounded-3xl space-y-4 my-8 font-mono text-sm">
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">1</span> <strong>Fork:</strong> Create personal remote copy of upstream repo (if external).</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">2</span> <strong>Clone:</strong> Download repo to local workspace (<code>git clone</code>).</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">3</span> <strong>Branch:</strong> Create feature branch (<code>git switch -c feature/name</code>).</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">4</span> <strong>Commit:</strong> Make modular, logical local commits.</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">5</span> <strong>Push:</strong> Publish branch to GitHub (<code>git push origin feature/name</code>).</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">6</span> <strong>PR:</strong> Open Pull Request against target <code>develop</code>/<code>main</code> branch.</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">7</span> <strong>Review:</strong> Peers review, request changes, & CI tests execute.</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">8</span> <strong>Merge:</strong> Team Lead approves and merges PR into target branch.</div>
        <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">9</span> <strong>Cleanup:</strong> Delete feature branch locally and remotely.</div>
      </div>
    `,
    codeExample: `# Typical daily collaboration commands
git switch develop
git pull origin develop
git switch -c feature/shopping-cart
# ... edit code ...
git add .
git commit -m "FEAT: Add cart items counter"
git push origin feature/shopping-cart`
  },
  {
    id: 'module-10-git-flow',
    title: 'Module 10 – Git Flow & Branching Strategies',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        A <strong>Branching Strategy</strong> defines strict rules on how branches are created, named, merged, and released in production enterprise software.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Git Flow (Vincent Driessen Model)</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Popular strategy in large enterprises with scheduled software releases:</p>
      
      <div class="space-y-4 my-6">
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">master / main</span> → Strictly production code. Every commit has a version release tag (v1.0.0).
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-blue-500">develop</span> → Active development baseline branch for next release cycle.
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-green-500">feature/*</span> → Branched off <code>develop</code>, merged back into <code>develop</code>.
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-purple-500">release/*</span> → Created off <code>develop</code> when preparing release candidates for final QA testing.
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-red-500">hotfix/*</span> → Emergency branch off <code>main</code>, merged into BOTH <code>main</code> and <code>develop</code>.
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. GitHub Flow vs Trunk-Based Development</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">GitHub Flow (Lightweight)</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Used by SaaS startups. Simple: <code>main</code> + short-lived feature branches. Immediate deployment on merge.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Trunk-Based Development</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Used by Big Tech (Google, Meta). Developers commit directly to single <code>main</code> branch multiple times daily behind feature flags.</p>
        </div>
      </div>
    `,
    codeExample: `# Creating a version tag for release
git tag -a v1.0.0 -m "Production Release v1.0.0"
git push origin v1.0.0`
  },
  {
    id: 'module-11-github-features',
    title: 'Module 11 – GitHub Platform Features',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        GitHub is far more than code storage. It is an end-to-end DevOps software delivery platform packed with project management, CI/CD, and security capabilities.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-secondary text-lg mb-1">GitHub Issues</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Track bugs, task requests, and feature ideas with labels, assignees, and milestones.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-secondary text-lg mb-1">GitHub Actions</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Native automated CI/CD engine driven by YAML files in <code>.github/workflows/</code>.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-secondary text-lg mb-1">GitHub Secrets</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Encrypts API keys, database credentials, and deployment tokens used in Actions workflows.</p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-secondary text-lg mb-1">GitHub Packages</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Host private Docker container images, npm packages, and Maven artifacts directly on GitHub.</p>
        </div>
      </div>
    `,
    codeExample: `# Sample GitHub Actions Workflow File (.github/workflows/ci.yml)
name: Java CI Pipeline
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
      - name: Build with Maven
        run: mvn clean package`
  },
  {
    id: 'module-12-cicd-devops',
    title: 'Module 12 – CI/CD & DevOps Integration',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Git acts as the primary trigger in modern <strong>Continuous Integration (CI)</strong> and <strong>Continuous Deployment (CD)</strong> pipelines. A simple <code>git push</code> sets off automated builds, tests, containerization, and cloud deployment.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">Complete End-to-End CI/CD Flow</h3>
      
      <div class="p-6 bg-gray-900 text-white rounded-3xl space-y-4 my-8">
        <div class="flex items-center gap-4">
          <div class="px-3 py-1 bg-blue-500 rounded-lg text-xs font-bold font-mono">1. Git Push</div>
          <p class="text-xs text-gray-300">Developer pushes code to GitHub branch.</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="px-3 py-1 bg-purple-500 rounded-lg text-xs font-bold font-mono">2. CI Trigger</div>
          <p class="text-xs text-gray-300">Webhook notifies GitHub Actions / Jenkins server.</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="px-3 py-1 bg-amber-500 rounded-lg text-xs font-bold font-mono">3. Build & Test</div>
          <p class="text-xs text-gray-300">Automated runner executes unit tests & code linting.</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="px-3 py-1 bg-green-500 rounded-lg text-xs font-bold font-mono">4. Containerize</div>
          <p class="text-xs text-gray-300">Docker image built & pushed to Docker Hub / ECR.</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="px-3 py-1 bg-emerald-500 rounded-lg text-xs font-bold font-mono">5. Deploy</div>
          <p class="text-xs text-gray-300">Kubernetes cluster or Vercel/Render deploys new pod update.</p>
        </div>
      </div>
    `,
    codeExample: `# Docker integration command example
docker build -t my-app:v1 .
docker push my-registry/my-app:v1`
  },
  {
    id: 'module-13-undoing-changes',
    title: 'Module 13 – Undoing Changes (Restore, Reset, Revert)',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Made a mistake? Git provides powerful mechanisms to undo changes at every level: Working Directory, Staging Area, Local Repository, and Remote Repository.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Git Reset: 3 Modes Comparison</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
              <th class="p-4">Reset Flag</th>
              <th class="p-4">HEAD Moved?</th>
              <th class="p-4">Staging Area State</th>
              <th class="p-4">Working Directory State</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 font-bold text-green-500">--soft</td>
              <td class="p-4">Yes</td>
              <td class="p-4 text-green-500 font-bold">Kept Staged</td>
              <td class="p-4 text-green-500 font-bold">Files Preserved</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-amber-500">--mixed (Default)</td>
              <td class="p-4">Yes</td>
              <td class="p-4 text-amber-500 font-bold">Unstaged</td>
              <td class="p-4 text-green-500 font-bold">Files Preserved</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-red-500">--hard</td>
              <td class="p-4">Yes</td>
              <td class="p-4 text-red-500 font-bold">Wiped Clean</td>
              <td class="p-4 text-red-500 font-bold">DELETED Permanently!</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Revert vs Reset (Crucial Interview Topic)</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">git reset</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Rewrites history by removing commits. <strong>Dangerous on public shared remote branches!</strong></p>
        </div>
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-lg text-secondary mb-2">git revert (Safe)</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Creates a <strong>NEW inverse commit</strong> that undoes changes without altering past history. Safe for public shared repos.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. Recovering Lost Commits with <code>git reflog</code></h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        <code>git reflog</code> records every local HEAD movement (commits, resets, branch switches). Even if you ran <code>git reset --hard</code>, reflog lets you restore lost commits!
      </p>
    `,
    codeExample: `# Discard local uncommitted edits in a file
git restore filename.txt

# Unstage a staged file
git restore --staged filename.txt

# Undo last commit (keep changes staged)
git reset --soft HEAD~1

# Safely revert a pushed commit hash on remote
git revert a1b2c3d

# View reference log to find lost commit SHA
git reflog
git reset --hard HEAD@{2}`
  },
  {
    id: 'module-14-stash',
    title: 'Module 14 – Git Stash (WIP Storage)',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        <strong>Git Stash</strong> acts as a temporary clipboard for uncommitted changes in your Working Directory. Use it when you need to switch branches urgently without committing half-finished code.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold font-mono text-secondary">git stash pop</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Applies latest stashed changes and REMOVES them from stash stack.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold font-mono text-secondary">git stash apply</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Applies latest stashed changes but KEEPS them stored in stash stack.</p>
        </div>
      </div>
    `,
    codeExample: `# Save current uncommitted changes to stash
git stash save "WIP: Login form validation"

# List all saved stashes
git stash list

# Re-apply latest stash and pop it from stack
git stash pop

# Delete all saved stashes
git stash clear`
  },
  {
    id: 'module-15-cherry-pick',
    title: 'Module 15 – Git Cherry-Pick',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        <code>git cherry-pick</code> lets you select a single specific commit from another branch and apply it onto your current active branch.
      </p>

      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 my-6">
        <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Real Company Scenario</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Developer A fixed an urgent bug on <code>feature/login</code> (Commit ID: <code>e4f5a6b</code>). Production needs this bug fix IMMEDIATELY, but the rest of <code>feature/login</code> is unfinished. Use cherry-pick to apply ONLY commit <code>e4f5a6b</code> directly onto <code>main</code>!
        </p>
      </div>
    `,
    codeExample: `# Switch to main branch
git switch main

# Cherry pick specific commit hash from feature branch
git cherry-pick e4f5a6b`
  },
  {
    id: 'module-16-rebase',
    title: 'Module 16 – Git Rebase vs Merge',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        <strong>Rebasing</strong> is the process of moving or combining a sequence of commits to a new base commit, resulting in a perfectly linear historical timeline.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">Merge vs Rebase Comparison</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
              <th class="p-4">Property</th>
              <th class="p-4">git merge</th>
              <th class="p-4 text-secondary">git rebase</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 font-bold">History Shape</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Non-linear (branch graphs visible).</td>
              <td class="p-4 text-secondary font-bold">Perfectly linear 1-line history.</td>
            </tr>
            <tr>
              <td class="p-4 font-bold">Commits Rewritten?</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">No (preserves original commits).</td>
              <td class="p-4 text-secondary font-bold">Yes (creates new commit SHAs).</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-red-500">Golden Rule</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">Safe on public shared branches.</td>
              <td class="p-4 text-red-500 font-bold">NEVER rebase public/shared branches!</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    codeExample: `# Interactive rebase to cleanup & squash last 3 commits
git rebase -i HEAD~3

# In interactive text editor:
# Change 'pick' to 'squash' (or 's') for 2nd & 3rd commits`
  },
  {
    id: 'module-17-internals',
    title: 'Module 17 – Git Internals & Data Model',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Under the hood, Git is a simple content-addressable key-value filesystem stored inside <code>.git/objects/</code> using 40-character <strong>SHA-1 hashes</strong>.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">The 4 Core Git Objects</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">1. Blob (Binary Large Object)</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Stores file contents only (no file names or permissions).</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">2. Tree</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Represents directory structures, file names, and pointers to Blobs/sub-Trees.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">3. Commit</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Points to top-level Tree object, author, committer, date, message, & parent commit SHA.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="font-bold text-secondary">4. Tag</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Explicit reference pointing to a specific commit object.</p>
        </div>
      </div>
    `,
    codeExample: `# Inspect object type of a commit SHA
git cat-file -t a1b2c3d

# Inspect object contents
git cat-file -p a1b2c3d`
  },
  {
    id: 'module-18-interview-questions',
    title: 'Module 18 – Top Git Interview Q&A',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Curated high-frequency interview questions for Freshers and Experienced developers.
      </p>

      <div class="space-y-6 my-8">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-gray-900 dark:text-white text-base">Q1. What is the difference between git fetch and git pull?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2"><strong>Answer:</strong> <code>git fetch</code> downloads latest commits from remote repo into local origin branches without modifying your working files. <code>git pull</code> performs <code>git fetch</code> AND automatically merges changes into your current active branch (<code>git pull = git fetch + git merge</code>).</p>
        </div>

        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-gray-900 dark:text-white text-base">Q2. How do you recover a deleted branch?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2"><strong>Answer:</strong> Run <code>git reflog</code> to locate the SHA of the last commit on the deleted branch, then run <code>git branch &lt;branch-name&gt; &lt;commit-sha&gt;</code>.</p>
        </div>

        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h4 class="font-bold text-gray-900 dark:text-white text-base">Q3. What is git reflog?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2"><strong>Answer:</strong> Reference Log (reflog) is Git's safety net that logs every local HEAD pointer change. It enables recovery of unreferenced commits, lost branches, or reversed hard resets.</p>
        </div>
      </div>
    `,
    codeExample: `# Sample command for branch recovery via reflog
git reflog
git branch recovered-feature 9f8e7d6`
  },
  {
    id: 'module-19-real-project-workflow',
    title: 'Module 19 – Simulated Enterprise Project Workflow',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Here is a real-world simulation of daily software company project operations involving Team Lead, Developers, QA, and DevOps engineers.
      </p>

      <div class="p-6 bg-gray-900 text-white rounded-3xl space-y-4 my-8">
        <h4 class="font-bold text-secondary text-lg">Developer Daily Routine Walkthrough</h4>
        <ol class="list-decimal list-inside space-y-2 text-xs text-gray-300 font-mono">
          <li>Morning Sync: <code>git switch develop && git pull origin develop</code></li>
          <li>Feature Isolation: <code>git switch -c feature/payment-gateway</code></li>
          <li>Coding & Staging: Edit code → <code>git status</code> → <code>git add .</code> → <code>git commit -m "FEAT: Add Stripe API endpoint"</code></li>
          <li>Pre-push Sync: <code>git fetch origin && git rebase origin/develop</code></li>
          <li>Publishing: <code>git push origin feature/payment-gateway</code></li>
          <li>Code Review & CI: Open Pull Request on GitHub → Actions test pass → Team Lead approves → Squash & Merge into <code>develop</code>.</li>
        </ol>
      </div>
    `,
    codeExample: `# Enterprise workflow summary commands
git switch develop
git pull origin develop
git switch -c feature/api-integration
git add .
git commit -m "FEAT: Implement REST client"
git push origin feature/api-integration`
  },
  {
    id: 'module-20-troubleshooting',
    title: 'Module 20 – Troubleshooting Common Git Errors',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Quick reference troubleshooting guide for the 10 most common Git terminal error messages.
      </p>

      <div class="space-y-4 my-8">
        <div class="p-5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
          <span class="font-mono text-xs font-bold text-red-600">Error: fatal: not a git repository</span>
          <p class="text-xs text-gray-700 dark:text-gray-300 mt-1"><strong>Cause:</strong> Directory does not contain a <code>.git</code> folder. <strong>Fix:</strong> Run <code>git init</code> or navigate to correct project folder.</p>
        </div>

        <div class="p-5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
          <span class="font-mono text-xs font-bold text-red-600">Error: error: failed to push some refs (non-fast-forward)</span>
          <p class="text-xs text-gray-700 dark:text-gray-300 mt-1"><strong>Cause:</strong> Remote repo has new commits that you don't have locally. <strong>Fix:</strong> Run <code>git pull origin main</code> to fetch & merge before pushing.</p>
        </div>

        <div class="p-5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
          <span class="font-mono text-xs font-bold text-red-600">Error: src refspec main does not match any</span>
          <p class="text-xs text-gray-700 dark:text-gray-300 mt-1"><strong>Cause:</strong> Trying to push before making any initial local commit. <strong>Fix:</strong> Make a commit first: <code>git commit -m "Initial commit"</code>.</p>
        </div>
      </div>
    `,
    codeExample: `# Solution for non-fast-forward push rejection:
git pull --rebase origin main
git push origin main`
  },
  {
    id: 'module-21-qa-knowledge-base',
    title: 'Complete Q&A Master Knowledge Base',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Detailed reference answers for every essential Git & GitHub interview concept.
      </p>

      <div class="space-y-6 my-8">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-secondary text-base">Q: Why was Git invented?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Easy Definition:</strong> To replace BitKeeper and eliminate code loss, file overwrites, and manual zip sharing in Linux development.<br/><strong>Interview Definition:</strong> Git was created by Linus Torvalds in 2005 as a high-speed, distributed version control system designed to support non-linear development, cryptographic data integrity, and offline operations.</p>
        </div>

        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-secondary text-base">Q: What is the difference between origin and upstream?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> <code>origin</code> refers to your default remote repository copy (your GitHub fork). <code>upstream</code> refers to the original main repository from which your fork was created.</p>
        </div>

        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-secondary text-base">Q: How is Git used in Java Full Stack & MERN development?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> Full-stack teams maintain separate feature branches for frontend (React/Angular) and backend (Spring Boot/Node.js). Git triggers CI pipelines that run Maven unit tests or npm build scripts before deploying docker containers.</p>
        </div>
      </div>
    `,
    codeExample: `# Check registered remote names (origin / upstream)
git remote -v`
  }
];
