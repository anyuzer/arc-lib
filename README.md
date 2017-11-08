# arc-lib

A convenience wrapper around the ARC Library classes

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
    ArcHash
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