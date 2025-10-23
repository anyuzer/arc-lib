// index.d.ts
// Root types for arc-lib — automatically merges all submodule declarations.

import is from 'arc-is';
import ArcArray from 'arc-array';
import ArcCheck from 'arc-check';
import ArcDate from 'arc-date';
import ArcEvents from 'arc-events';
import ArcHash from 'arc-hash';
import ArcObject from 'arc-object';
import Log from 'arc-logger';
import PromiseQueue from 'arc-promise-queue';
import ArcRegExp from 'arc-reg-exp';
import ArcRouter from 'arc-router';
import validateTypes from 'arc-validate';
import * as Errors from 'arc-errors';

// Named exports — same as index.js
export {
    is,
    ArcArray,
    ArcCheck,
    ArcDate,
    ArcEvents,
    ArcHash,
    ArcObject,
    Log,
    PromiseQueue,
    ArcRegExp,
    ArcRouter,
    validateTypes,
    Errors,
};

// Re-export submodule **types** so consumers can import from 'arc-lib'
// (Type-only export avoids duplicate value exports like ArcRouter.)
export type * from 'arc-router';
export type * from 'arc-object';
export type * from 'arc-array';
export type * from 'arc-check';
export type * from 'arc-date';
export type * from 'arc-events';
export type * from 'arc-hash';
export type * from 'arc-logger';
export type * from 'arc-promise-queue';
export type * from 'arc-reg-exp';
export type * from 'arc-validate';
export type * from 'arc-errors';

// Default bundle
declare const ArcLib: {
    is: typeof is;
    ArcArray: typeof ArcArray;
    ArcCheck: typeof ArcCheck;
    ArcDate: typeof ArcDate;
    ArcEvents: typeof ArcEvents;
    ArcHash: typeof ArcHash;
    ArcObject: typeof ArcObject;
    Log: typeof Log;
    PromiseQueue: typeof PromiseQueue;
    ArcRegExp: typeof ArcRegExp;
    ArcRouter: typeof ArcRouter;
    validateTypes: typeof validateTypes;
    Errors: typeof Errors;
};

export default ArcLib;
