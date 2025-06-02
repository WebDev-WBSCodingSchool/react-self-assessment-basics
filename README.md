# React Self-Assessment Basics

Welcome! This mini-project lets you check your React fundamentals **all on your own**—no instructor required. Clone the repository, implement the features on each component under **`src/components`**, then run the automated tests to see how you did.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
   - [1. Clone the Repository](#1-clone-the-repository)
   - [2. Install Dependencies](#2-install-dependencies)
   - [3. Run the Tests](#3-run-the-tests)
3. [Iterate & Improve](#iterate--improve)
4. [What You Will Practise](#what-you-will-practise)
5. [Troubleshooting](#troubleshooting)
6. [License](#license)

---

## Prerequisites

| Tool                                                               | Version         | Notes                                                                          |
| ------------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------------ |
| [Node.js](https://nodejs.org/)                                     | ≥ 22            | You **just** installed Node—great! We use it to run tests and scripts.         |
| [npm](https://docs.npmjs.com/)                                     | comes with Node | You’ll use npm to install project dependencies.                                |
| [Git](https://git-scm.com/)                                        | any             | Needed to clone the repo.                                                      |
| [Visual Studio Code](https://code.visualstudio.com/) (recommended) | latest          | Optional but makes life easier, especially with the Playwright Test extension. |

> **Tip:** Check your setup by running `node -v` and `npm -v` in a terminal. If you see versions, you’re good to go!

---

## Getting Started

### 1. Clone the Repository

```bash
$ git clone git@github.com:WebDev-WBSCodingSchool/react-self--assessment-basics.git
$ cd react-self-assessment-basics
```

### 2. Install Dependencies

We use **npm ci** to install exactly the versions defined in **`package-lock.json`** so everyone has the same environment.

```bash
$ npm ci
```

### 3. Run the Tests

There are two ways to launch the automated **Vitest** tests that validate your code:

<details>
<summary><strong>Option A — VS Code GUI (Recommended)</strong></summary>

1. Install the <a href="https://marketplace.visualstudio.com/items?itemName=vitest.explorer">**Vitest**</a> extension.
2. Open the folder in VS Code.
3. Go to the <kbd>Test Explorer</kbd> view:
   <br><img src="https://code.visualstudio.com/assets/docs/python/testing/test-explorer-no-tests.png" width="450" alt="VS Code Test Explorer" />
4. Click ▶️ **Run All Tests** or run individual tests to focus on one function at a time.

</details>
<details>
<summary><strong>Option B — Terminal</strong></summary>

```bash
$ npm run test
```

</details>

When the tests finish, you’ll see green ✅ for passes and red ❌ for failures right in the output.

---

## Iterate & Improve

Testing is simply **running your code with Node and comparing the output to what we expect**. If something fails:

1. **Read the error message** — it tells you which test failed and why.
2. Open the corresponding source file in **`src/components`**.
3. Fix your logic.
4. Re-run the tests.
5. Check for errors. The tests' assertions are written in a rather high-level way so they are easy to interpret, e.g. This test expected `myNumber` to be of type `number` but we are returning a `boolean`
   ![Screenshot From 2025-05-16 16-57-18](https://github.com/user-attachments/assets/6842b178-ee24-4991-8e88-384da3106840)

> 🔁 **Rinse & repeat** until everything is green. Any function left as "NOT IMPLEMENTED" will be skipped, but skipped tests still mean unfinished work—aim for zero skips!

## What You Will Practise

- Writing clean, idiomatic JavaScript functions
- Working with numbers and sequences
- Using basic control flow and algorithms
- Reading and interpreting automated test output

---

## Troubleshooting

| Symptom                                   | Possible Cause                   | Fix                                               |
| ----------------------------------------- | -------------------------------- | ------------------------------------------------- |
| `npm ci` fails                            | Old Node/npm version             | Upgrade Node to ≥ 18.                             |
| Tests won’t run in VS Code                | Extension not installed          | Install _Playwright Test for VS Code_ and reload. |
| `npm run test` prints `command not found` | You’re not in the project folder | `cd javascript-self-assessment-basics` first.     |

---

## License

This project is released under the MIT License. See `LICENSE` for details.

Happy coding — and good luck on your self-assessment! 🎉
