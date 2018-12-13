video: https://www.youtube.com/watch?v=u_srpc8P4H8&index=8&list=PL4cUxeGkcC9hNUJ0j6ccnOAcJIPoTRpO4
selector: https://api.jquery.com/category/selectors/
eg: $( "td:lt(4)" ).css( "backgroundColor", "yellow" );

traversing DOM
eg.$('#eg div p').next.css({border:"3px solid blue"});
next /prev/ parent(s) /children/ *find* / closet

chaining
e.g $('#contact-methods').css({border:"3px solid red"})
  .next().css({border : "3px solid blue"})
  .closest('section').css({border : "2px solid green"});

adding html
e.g $("#eg div p").append(var);
.append /.prepend /.before /.after /.html / .text

clean element
.empty(only clear in tag) .remove


