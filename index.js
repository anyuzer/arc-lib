// index.js (ESM, slim bundle)

// Single-export libs (functions/classes)
import is from 'arc-is';
import ArcArray from 'arc-array';
import ArcCheck from 'arc-check';
import ArcDate from 'arc-date';
import ArcEvents from 'arc-events';
import ArcHash from 'arc-hash';
import ArcObject from 'arc-object';
import PromiseQueue from 'arc-promise-queue';
import Log from 'arc-logger';
import ArcRegExp from 'arc-reg-exp';
import ArcRouter from 'arc-router';
import validateTypes from 'arc-validate';

// Multi-export lib(s): fold into one named object
import {
    AuthRedirect,
    BadRequest,
    Unauthorized,
    NotFound,
    RateLimit,
    ServerError,
    throwByStatus,
} from 'arc-errors';

export const Errors = {
    AuthRedirect,
    BadRequest,
    Unauthorized,
    NotFound,
    RateLimit,
    ServerError,
    throwByStatus,
};

// Re-export the primary items (one name per lib)
export { is };
export { ArcArray };
export { ArcCheck };
export { ArcDate };
export { ArcEvents };
export { ArcHash };
export { ArcObject };
export { Log }
export { PromiseQueue };
export { ArcRegExp };
export { ArcRouter };
export { validateTypes }; // function (validateTypes)

// Slim default bundle: one entry per library
const ArcLib = {
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

export default ArcLib;
