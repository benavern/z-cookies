# Z-Cookies

## What's that ??

Nowadays, a lot of websites are using cookies. They set, get or delete their cookies sometimes with an heavy jQuery plugin, or sometimes with some noobie home made scripts...

Here is our solution: A really lightweight vanilla JS Module to handle your cookies.

It is called Z-cookies, and here is how it works :

## How does it work

_This is a module design pattern. When added to your application, nothing more than calling its methodes is required_

### Get

With this method, you will be able to get the browser cookies data:

#### Get a specific cookie

```javascript
var myCookie = ZCookies.get("numberOne"); // myCookie = "foo"
```

#### Get multiple cookies

```javascript
var myCookies = ZCookies.get("numberOne", "numberTwo"); //  myCookies = {"numberOne": "foo", "numberTwo" : "bar"}
```

#### Get all the cookies as an object

```javascript
var myCookies = ZCookies.get(); // myCookies = {"numberOne": "foo", "numberTwo" : "bar"}
```

### Set / Update

Here if the cookie already exists, it will be updated, otherwise it is created.

```javascript
ZCookies.set("numberThree", "Hello, World!");
```

#### Expiration date

Instead of providing some ununderstandable timestamps, we chose an easyer solution : providing a number of days of validity.

It will be automatically converted so that the browser understands well what you meant.

For example for a cookie that is meant to exist only for three days :


```javascript
ZCookies.set("numberFour", "Where is bryan?", 3);
```

### Delete

```javascript
ZCookies.delete("numberThree"); // now numberThree cookie does not exist anymore.
```

### BONUS

You can chain ZCookies `set` and `delete` methodes.

The `get` method can be added at the end of the chain, it is meant to return a `value`.

```javascript
ZCookies.set("Chaining", "Is").set("A", "realy").set("Awesome", "Feature").delete("A").get(); // {"Chaining": "Is", "Awesome": "Feature"}
```

## Todo

* The module
  * Get
  * Set
  * Delete
* Documentation
  * Content
  * Design

## Contribute

This is an Open-Source project created by ZeZen & Pacejz.

You can contribute, fork, pull request, issue, etc... We will try to answere to each of you :)

## License

[MIT](http://benavern.github.io/MIT/#name=Benjamin%20%26%20Jean-Sebastien)
