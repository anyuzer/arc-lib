# arc-lib

A convenience wrapper around the ARC Library classes

## Install
```
$ npm install arc-reg-exp --save
```

## Wraps
* arc-is
* arc-array
* arc-check
* arc-date
* arc-events
* arc-object
* arc-reg-exp
* arc-router

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
    ArcRouter
}
```

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