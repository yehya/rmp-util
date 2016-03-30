rmp-util
=======
![image](https://cloud.githubusercontent.com/assets/10437615/13903906/a44200d0-ee63-11e5-9a1e-3d03733b413b.png)


A framework that presents rate my professor data in two beautiful pop-ups. Checkout the live Demo

Want to contribute to rmp-util? Please read `CONTRIBUTING.md`.

Installation 
------------

To install the latest version available on Bower:

    bower install rmp-util --save

To install the latest development version:

    bower install git+https://github.com/awadYehya/rmp-util

Usage 
-----
In order to use the rmp-util, you first have to create an instance of the utility

```javascript
  var rmpUtil = new rmpU();
```

The rmp-util includes the tip that appears on the target element provided, as well as the comments which appears
from the side of the page. The tip and comments require valid professor data or will display error messages on the console. The target element is the element from which the tip will appear and can be a JQuery or nonJQuery object.

In order to create the rmp-tip you must invoke the tip method with a target element and professor data object.

```javascript
  rmpUtil.tip(targetElement, professorData);
```

In order to create the rmp-comments you must invoke the comment method with a target element and commentData array filled with comment data objects.

```javascript
  rmpUtil.commentArea(targetElement, commentDataArray);
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
<html>
    <head>
        <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="../bower_components/opentip/css/opentip.css" rel="stylesheet" type="text/css" />
        <link href="../css/rmp-util.css" rel="stylesheet" type="text/css" />
        <link href="https://986f2877cd23a316c604358edd755defa8ce9026.googledrive.com/host/0BzcasCLBmJFJTmJmZ1hnb19KSzA/league-gothic.regular.ttf">
    </head>
    <body>
        <!-- Regular body -->
    </body>
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>
    <script src="../bower_components/opentip/lib/opentip.js"></script>
    <script src="../bower_components/opentip/lib/adapter-jquery.js"></script>
    <script type="text/javascript" src="../rmp-util.js"></script>
    <script type="text/javascript" src="rmp-utiltest.js"></script>
</html>
```

Authors
-------
rmp-util was created by Hozaifa Abdalla and Yehya Awad

Related Projects
----------------
You might also be interested in our [PSU Rate My Professor Plugin](https://chrome.google.com/webstore/detail/psu-rate-my-professor-plu/mgcgmhhcjfknhchpfnkfhkoemaglookl?hl=en)

For More Information
--------------------

+ Documentation is available at [Use rmp-util](http://usejsdoc.org).
+ Contribute to the docs at [rmp-util](https://github.com/awadYehya/rmp-tip).

License
-------

rmp-util is copyright (c) 2016 Hozaifa Abdalla, Yehya Awad. <br>rmp-util is free software, licensed under the MIT License, See the file `LICENSE.md` in this distribution for more details.



