# Arc Library (arc-lib)

Arc Library (`arc-lib`) is a unified collection of modular utilities designed for modern Node.js and browser environments.  
Each submodule focuses on a specific domain — from validation and hashing to arrays, dates, and structured error handling — and can be used independently or through this aggregate package.

---

## 📦 Installation

```bash
npm install arc-lib
```

---

## 🧭 Overview

`arc-lib` provides an umbrella API that consolidates all core ARC libraries under a single import.  
It automatically re-exports each library's default export, along with grouped error classes and utility functions.

### Included Modules

| Library               | Description                                                          |
|-----------------------|----------------------------------------------------------------------|
| **arc-is**            | Lightweight runtime type checker (`is(value) -> string`)             |
| **arc-array**         | Extended array utilities with additional mapping and joining helpers |
| **arc-check**         | Simple include/exclude rule engine for string validation             |
| **arc-date**          | Date/time utilities with timezone formatting and arithmetic          |
| **arc-events**        | Minimal event emitter for managing async event hooks                 |
| **arc-hash**          | Consistent object, array, and string hashing (MD5, SHA256, Base64)   |
| **arc-object**        | Object manipulation helpers for key sorting, flattening, and cloning |
| **arc-promise-queue** | Concurrency-safe queue for managing asynchronous tasks               |
| **arc-reg-exp**       | Collection of pre-built and dynamic regular expression helpers       |
| **arc-router**        | Lightweight in-memory route matching and pattern parsing             |
| **arc-validate**      | Strong input validation via `validateTypes()`                        |
| **arc-errors**        | Structured HTTP-style errors and a generic `throwByStatus()` helper  |
| **arc-logger**        | Lightweight, environment-aware logging and profiling                 |

---

## 🚀 Quick Start

### Importing the Full Bundle

```js
import ArcLib from 'arc-lib';

const { is, ArcArray, ArcErrors, validateTypes } = ArcLib;

console.log(is(123)); // 'number'

const arr = new ArcArray('A', 'B', 'C');
console.log(arr.joinCallback(v => v.toLowerCase(), '-')); // 'a-b-c'

validateTypes('example@example.com', ['email']); // passes silently

throw new ArcErrors.BadRequest('Missing parameter', { field: 'email' });
```

### Importing Specific Utilities

```js
import { validateTypes, Errors, ArcHash, PromiseQueue } from 'arc-lib';

// Validation
validateTypes('123', ['string']); // Throws if not a string

// Hashing
console.log(ArcHash.sha256('hello world'));

// Promise queue
const queue = new PromiseQueue();
queue.addToQueue(fetch('https://api.example.com/data'));
```

---

## ⚙️ Structure

`arc-lib` re-exports each module’s primary export for direct use, and also provides a clean default bundle:

```js
import ArcLib, { Errors, validateTypes, ArcHash } from 'arc-lib';

ArcLib.ArcRouter;     // router instance class
ArcLib.validateTypes; // type validation helper
Errors.NotFound;   // structured HTTP error
```

The default export object has this structure:

```js
{
  is,
  ArcArray,
  ArcCheck,
  ArcDate,
  ArcEvents,
  ArcHash,
  ArcObject,
  PromiseQueue,
  ArcRegExp,
  ArcRouter,
  validateTypes,
  Errors
}
```

---

## 🧩 Example: Custom Error Handling

```js
import { Errors } from 'arc-lib';

try {
  throw new Errors.Unauthorized('Session expired');
} catch (e) {
  if (e.status === 401) {
    console.log('Please reauthenticate');
  }
}
```

---

## 🧪 Example: Promise Queue

```js
import { PromiseQueue } from 'arc-lib';

const queue = new PromiseQueue();
queue.setAllowedActive(2);

queue.addToQueue(new Promise(r => setTimeout(r, 500)));
queue.addToQueue(new Promise(r => setTimeout(r, 500)));
queue.addToQueue(new Promise(r => setTimeout(r, 500)));

await queue.settleQueued();
console.log('All promises settled');
```

---

## 🧠 Example: Date Formatting

```js
import { ArcDate } from 'arc-lib';

const now = new ArcDate();
console.log(now.format('YYYY-MM-DD HH:mm:ss', 'America/New_York'));
```

---

## 🧩 Example: Regex Helper

```js
import { ArcRegExp } from 'arc-lib';

console.log(ArcRegExp.email.test('example@example.com')); // true
```

---

## 📘 License
This project is released under [The Unlicense](https://unlicense.org/), placing it in the public domain.

