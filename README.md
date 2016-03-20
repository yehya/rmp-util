rmpUtility Framework
=======

A framework that presents rate my professor data in two beautiful pop-ups. Checkout the live Demo

Want to contribute to rmpUtility? Please read `CONTRIBUTING.md`.

Installation 
------------

To install the latest version available on Bower:

    bower install rmpUtility --save

To install the latest development version:

    bower install git+https://github.com/abdallahozaifa/rmpUtility

Usage 
-----
In order to use the rmpUtility, you first have to create an instance of the utility

```javascript
  var RmpUtility = new rmpUtility();
```

The rmpUtility includes the tip that appears on the target element provided, as well as the comments which appears
from the side of the page. The tip and comments require valid professor data or will display error messages on the console. The target element is the element from which the tip will appear and can be a JQuery or nonJQuery object.

In order to create the rmp-tip you must invoke the tip method with a target element and professor data object.

```javascript
  RmpUtility.tip(targetElement, professorData);
```

In order to create the rmp-comments you must invoke the comment method with a target element and commentData array filled with comment data objects.

```javascript
  RmpUtility.commentArea(targetElement, commentDataArray);
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
  
  var commentDataArray = [commentData,commentData,commentData,......];
```

Include all the proper css and javascript links as follows:

```html
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>
    <script src="../bower_components/opentip/lib/opentip.js"></script>
    <script src="../bower_components/opentip/lib/adapter-jquery.js"></script>
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../bower_components/opentip/css/opentip.css" rel="stylesheet" type="text/css" />
    <link href="../css/rmpUtility.css" rel="stylesheet" type="text/css" />
    <link href="https://986f2877cd23a316c604358edd755defa8ce9026.googledrive.com/host/0BzcasCLBmJFJTmJmZ1hnb19KSzA/league-gothic.regular.ttf">
```

Authors
-------
rmpUtility was created by Hozaifa Abdalla and Yehya Awad

Related Projects
----------------
You might also be interested in our [PSU Rate My Professor Plugin](https://chrome.google.com/webstore/detail/psu-rate-my-professor-plu/mgcgmhhcjfknhchpfnkfhkoemaglookl?hl=en)

For More Information
--------------------

+ Documentation is available at [Use rmpUtility](http://usejsdoc.org).
+ Contribute to the docs at [rmpUtility](https://github.com/awadYehya/rmp-tip).

License
-------

rmpUtility is copyright (c) 2016 Hozaifa Abdalla, Yehya Awad. <br>rmpUtility is free software, licensed under the MIT License, See
the file `LICENSE.md` in this distribution for more details.



