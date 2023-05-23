<h2>Motivation</h2>
Solve the problem of module import in content script

<h2>The problem</h2>
download ver 0.1 , invoke it and see the error in the console of https://example.com 'Uncaught SyntaxError: Cannot use import statement outside a module (at content.js:1:1)'

<h2>The solution</h2>
load js file in content script using dynamic import and put these loaded files in web_accessible_resources. i am loading a lion image via the content script to experiment with web_accessible_resources

<h2>Background</h2>
this create tab for https://example.com and show the problem\solution. i am also loading an html file from assets - can it be used to replace popup ??

<h2>reference</h2>
<a href='https://stackoverflow.com/a/53033388'>dynamic import solution</a>
