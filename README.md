Rmp-Utility Framework
=======
[![Build Status](https://travis-ci.org/jsdoc3/jsdoc.svg?branch=master)](http://travis-ci.org/jsdoc3/jsdoc) 

A framework that presents rate my professor data in two beautiful pop-ups. Checkout the live Demo

Want to contribute to Rmp-Utility? Please read `CONTRIBUTING.md`.

Installation 
------------

To install the latest version available on Bower:

    bower install rmp-tip --save

To install the latest development version:

    bower install git+https://github.com/awadYehya/rmp-tip

Usage 
-----
In order to use the Rmp-Utility, you first have to create an instance of the utlity

```javascript
  var RmpUtility = new rmpUtility();
```

The Rmp-Utility includes the tip that appears on the target element provided as well as the comments which appears
from the side of the page. The tip and comments require valid professor data or will display error messages on the console. The target element is the element from which the tip will appear and can be a JQuery or nonJQuery object.

In order to create the Rmp-tip you must invoke the tip method with a target element and professor data object.

```javascript
  RmpUtility.tip(targetElement, prfData);
```
In order to create the Rmp-comments you must invoke the comment method with a commentData object.

```javascript
  RmpUtility.comment(commentData);
```
The format of the professor data object should be as following.

```javascript
  var professorDataObject = {
    name: 'Hozaifa Abdalla',
    quality: 4.3,
    avg: 'A',
    chili: 0,
    help: 4.3,
    clarity: 4.2,
    easiness: 2.3
};
```


Templates and Build Tools
-------------------------

The JSDoc community has created numerous templates and other tools to help you
generate and customize your documentation. Here are just a few:

### Templates

+ [jaguarjs-jsdoc](https://github.com/davidshimjs/jaguarjs-jsdoc)
  ([example](http://davidshimjs.github.io/jaguarjs/doc))
+ [DocStrap](https://github.com/docstrap/docstrap) ([example](https://docstrap.github.io/docstrap))
+ [jsdoc3Template](https://github.com/DBCDK/jsdoc3Template)
  ([example](https://github.com/danyg/jsdoc3Template/wiki#wiki-screenshots))
+ [minami](https://github.com/Nijikokun/minami)

### Build Tools

+ [JSDoc Grunt plugin](https://github.com/krampstudio/grunt-jsdoc)
+ [JSDoc ant task](https://github.com/jannon/jsdoc3-ant-task)


For More Information
--------------------

+ Documentation is available at [Use JSDoc](http://usejsdoc.org).
+ Contribute to the docs at [jsdoc3/jsdoc3.github.com](https://github.com/jsdoc3/jsdoc3.github.com).
+ Ask for help on the [JSDoc Users mailing list](http://groups.google.com/group/jsdoc-users).
+ Post questions tagged `jsdoc` to [Stack
Overflow](http://stackoverflow.com/questions/tagged/jsdoc).

License
-------

Rmp-Utility is copyright (c) 2016 Hozaifa Abdalla <Abdallahozaifa19527@gmail.com> and the
[contributors to RmpUtility](https://github.com/awadYehya/rmp-tip/contributors).

Rmp-Utility is free software, licensed under the MIT License, Version 2.0. See
the file `LICENSE.md` in this distribution for more details.



