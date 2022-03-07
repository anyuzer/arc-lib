# arc-lib

A convenience wrapper around my ARC utilities

## Install
```
$ npm install arc-lib --save
```

## Wraps
* [arc-is](https://github.com/anyuzer/arc-is)
* [arc-array](https://github.com/anyuzer/arc-array)
* [arc-check](https://github.com/anyuzer/arc-check)
* [arc-date](https://github.com/anyuzer/arc-date)
* [arc-events](https://github.com/anyuzer/arc-events)
* [arc-object](https://github.com/anyuzer/arc-object)
* [arc-reg-exp](https://github.com/anyuzer/arc-reg-exp)
* [arc-router](https://github.com/anyuzer/arc-router)
* [arc-hash](https://github.com/anyuzer/arc-hash)
* [arc-scheduler](https://github.com/anyuzer/arc-scheduler)


## Exports
```js
{
    is,
    ArcArray,
    ArcCheck,
    ArcDate,
    ArcEvents,
    ArcObject,
    ArcRegExp,
    ArcRouter,
    ArcHash,
    ArcScheduler
}
```

## Random Utilities
* **arc-is**: Is a simple type checker that honors inheritence, checks most native types properly, and has two modes to check between strict types vs soft types. To use simply: `is(val) === 'array'`
* **arc-check**: Is a complex inclusion/exclusion check.
* **arc-events**: A relatively standard on/emit events model, with some additional features ie. `.once`, `.catchAll` as well as a mixin to turn any object into an even emitter.
* **arc-router**: Is a very thin functional router, for complex URL/Path mapping. It takes a map of urls or paths, and is able to take an evaluation string, and map it to a match while also pulling appropriate variables from the path.
* **arc-hash**: Provides a very simple but consistent approach to generating md5 and sha256 hashes for both scalar and non-scalar types in javascript (objects and arrays in particular).
* **arc-scheduler**: A scheduler and task manager for recurrent tasks. Supports both event based reaction (ie. NEW_HOUR / NEW_DAY / NEW_WEEK) as well as a fully managed task-scheduling suite (ie. Fire a job on the first Monday of every month at 8:00am)

## Type Utilities
* **arc-array**: Is a native array wrapper with a number of convenience methods such as: `.shuffle`, `.rand`, `.pMap` (asynchronous mapping) 
* **arc-object**: Is a native object wrapper with convenience methods such as `.copy` (which performs a deep copy), `.freeze` (make it immutable), and some array like functions.
* **arc-reg-exp**: Is a native object wrapper around RegExp that exposes some convenience methods, such as `.matchAll`, `.matchAndReplace`, `.replaceCallback`
* **arc-date**: Is a very thin Date formatting utility


## Example Usage

```js
const {is,ArcRouter,ArcEvents} = require('arc-lib');

//Pretend we're useful useful
const SomeViewController = {};

//Use ArcEvents to mixin events on the object
ArcEvents.mixin(SomeViewController);

//Bind an event
SomeViewController.on('validPath',(_path,_id)=>{
    console.log(_path,_id);
});

//Setup a functional router
const SomeRouter = new ArcRouter({
    '/some/**path[/]/#id':'validPath'
});

//Travel a path
const routeData = SomeRouter.travel('/some/resource/path/75');

//We should match
if(routeData.match){
    //Path in the resolved path and id from the path
    SomeViewController.emit(routeData.match,[routeData.path,routeData.id]);
}

//Will console.log('resource/path',75) by trigger the validPath event
```