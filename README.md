# Z-Cookies

## What's that ??

Nowadays, a lot of websites are using cookies. They set, get or delete their cookies sometimes with jQuery, sometimes with some home made scripts...

Here is our solution : A really lightweight vanilla JS Module to handle your cookies.

It is called Z-cookies, and here is how it works :

## How does it work

_This is a module design pattern. When added to your application, nothing more than calling its methodes is required_

### Get

#### Get a specific cookie

```
var myCookie = ZCookies.get("numberOne"); // myCookie = "foo"

```

#### Get all the cookies as an object

```
var myCookies = ZCookies.get(); // myCookies = {"numberOne": "foo", "numberTwo" : "bar"}

```

### Set / Update

Here if the cookie already exists, it will be updated, otherwise it is created.

```
ZCookies.set("numberThree", "Hello, World!");

```

#### Expiration date

Instead of providing some ununderstandable timestamps, we chose an easyer solution : providing a number of days of validity.

It will be automatically conerted so that the browser understands well what you meant.

For example for a cookie that is meant to exist only for three days :


```
ZCookies.set("numberFour", "Where is bryan?", 3);

```

### Delete

```
ZCookies.delete("numberthree"); // now numberthree cookie does not exist anymore.

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

This is an Open-Source project created by ZenZen & Pacejz.

You can contribute, fork, pull request, issue, etc... without problem.

## License

[MIT](http://benavern.github.io/MIT/#name=Benjamin%20%26%20Jean-Sebastien)
