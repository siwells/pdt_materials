# Building a web page/portfolio  

Last week you were introduced to Github and created an account. Github does a lot more than merely store your code repositories, it can also be a great way to get free web hosting (a side effect of hosting documentation for open source software projects). A personal web page hosted on Github can be a useful starting place for building a portfolio of your work to help convince employers how brilliant you are.

Add a public repo to your github account that is named the same as your github username. Add a README.md file to it. The contents of your README.md can be whatever you like but they will be displayed at the top of your github account/profile page and it's a useful way to introduce yourself and point out the important things. For example, here is my github account [https://github.com/siwells/](https://github.com/siwells/). Notice the seciont of text starting with "Hi there". Here is the profile repo that populates the "Hi there" text [https://github.com/siwells/siwells](https://github.com/siwells/siwells). The content of the README.md file can be plain text, or it can be written in [markdown](https://docs.github.com/en/rest/markdown).

Create another new public repository called "AboutMe". We're going to make this into a simple personal web page. Clone your new repo and add a new file to it called index.html then commit your changes. Now edit index.html to add some HTML code to it, for example,

```js
 <!DOCTYPE html>
<html>
<body>

<h1>About Me</h1>
<p>Hi folks, I'm Simon. Welcome to me site.</p>

</body>
</html> 
```

You can use any HTML, CSS or JS in this repository. Just remember to add, commit, and push your changes. Check that the repository in Github reflects what you expect to be there by inspecting your files through the Github web interface. Now we need to turn this HTML into a web site. In Github, navigate to your "aboutme" repository then click settings. On the page that is displayed, click "Pages" (displayed in the menu on the left). On the displayed page, click the dropdown below branch and select "main" then hit the save button. Github will now turn your repository containing HTML into a website, available to everyone on the Web to browse and read. The web address for the new site will be displayed at the top of your github pages setting page.
