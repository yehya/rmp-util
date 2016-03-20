Rmp-Utility Framework
=======

A framework that presents rate my professor data in two beautiful pop-ups. Checkout the live Demo

Want to contribute to Rmp-Utility? Please read `CONTRIBUTING.md`.

Installation 
------------

To install the latest version available on Bower:

    bower install rmp-tip --save

To install the latest development version:

    bower install git+https://github.com/abdallahozaifa/rmp-tip

To install the dependencies:

    bower install

Soon after it will ask you for a suitable version for jquery. 

    Unable to find a suitable version for jquery, please choose one:
        1) jquery#~1.9.0 which resolved to 1.9.1 and is required by opentip#2.4.6
        2) jquery#1.9.1 - 2 which resolved to 1.9.1 and is required by bootstrap#3.3.6
        3) jquery#^2.2.1 which resolved to 2.2.2 and is required by rmp-tip
 
 Please select the option that corresponds to jquery#^2.2.1:

    bower install

Usage 
-----
In order to use the Rmp-Utility, you first have to create an instance of the utility

```javascript
  var RmpUtility = new rmpUtility();
```

The Rmp-Utility includes the tip that appears on the target element provided as well as the comments which appears
from the side of the page. The tip and comments require valid professor data or will display error messages on the console. The target element is the element from which the tip will appear and can be a JQuery or nonJQuery object.

In order to create the Rmp-tip you must invoke the tip method with a target element and professor data object.

```javascript
  RmpUtility.tip(targetElement, prfData);
```

In order to create the Rmp-comments you must invoke the comment method with a target element and commentData object.

```javascript
  RmpUtility.comment(targetElement, commentData);
```

The format of the professor data object should be as following.

```javascript
  var professorData = {
    name: 'Hozaifa Abdalla',
    quality: 4.3,
    avg: 'A',
    chili: 0,
    help: 4.3,
    clarity: 4.2,
    easiness: 2.3
  };
```

The format of the comment data object should be as following.

```javascript
  var commentData = {
    image: "GOOD",
    rating: "GOOD",
    text: "He was the best professor ever. He was so engaging during lectures and really made you think. Yeah there was a lot of work but it wasn't so bad considering you learned a lot from it.",
    tag: "Amazing Lectures"
  };
```

Authors
-------
Rmp-Utility was created by Hozaifa Abdalla and Yehya Awad

Related Projects
----------------
You might also be interested in our [PSU Rate My Professor Plugin](https://chrome.google.com/webstore/detail/psu-rate-my-professor-plu/mgcgmhhcjfknhchpfnkfhkoemaglookl?hl=en)

For More Information
--------------------

+ Documentation is available at [Use Rmp-Utility](http://usejsdoc.org).
+ Contribute to the docs at [Rmp-Utility](https://github.com/awadYehya/rmp-tip).

License
-------

Rmp-Utility is copyright (c) 2016 Hozaifa Abdalla, Yehya Awad. <br>Rmp-Utility is free software, licensed under the MIT License, See
the file `LICENSE.md` in this distribution for more details.



