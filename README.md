SkyModal
========

A very weightless modal plugin. 

Instructions :
=============

1. Add the JS in your header

```
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>

<script type="text/javascript" src="SkyModal.js"></script>
```

2. Add this in your code (still in your header)

 ```<script>
        $(document).ready(function () {
            $('#SkyModal').SkyModal();
        });
    </script>```


If you change the name of your container. Mind to change this one too.


3. Add your container to the body and fill it with some of your magic.


```<div id="SkyModal"></div>```


4. More fun :



For open : ```<button onclick="$('#SkyModal').SkyModal_Open();">```Call me !</button>


For close : ```<button onclick="$('#SkyModal').SkyModal_Close();">```Call me !</button>

Or a click on the overlay close the all too.
