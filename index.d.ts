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
