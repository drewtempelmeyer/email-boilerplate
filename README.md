# gulp-email-boilerplate

Makes email design and development easier. Compile your SCSS, HAML, inline CSS, and easily test your email with [Litmus](https://litmus.com/).

### Requirements

* node

### How to use it

First clone the repository or download as a ZIP archive.

`git clone https://github.com/drewtempelmeyer/gulp-email-boilerplate.git`

Then install all package dependencies

`npm install`

Included are two example files based on the billing template from [Mailgun Transactional Email Templates](http://blog.mailgun.com/transactional-html-email-templates/)

* **index.html** for your email layout
* **sass/main.scss** for your SCSS stylesheet

If you only wish to compile SCSS, run `gulp sass`.

To only inline your CSS (and compile SCSS), you may run `gulp inline`.

If you wish to update your SCSS and inline the CSS into your HTML as you update your code: `gulp watch`.

Your generated CSS will be output to **css/** and **build/css/**. The HTML file with inline styles will be output to **build/filename.html**.

### Running your test with Litmus ###

Modify the **litmusConfig** variable in the **gulpfile.js** file with your credentials and desired testing clients. To get your testing clients, use the application code from https://account.litmus.com/clients.xml.

```javascript
var litmusConfig = {
  username: 'you@example.com',
  password: 'password',
  url: 'https://account.litmus.com',
  applications: [
    'applemail6',
    'gmailnew',
    'ffgmailnew',
    'chromegmailnew',
    'iphone5',
  ]
};
```

**NOTE:** *account* should be replaced with your account subdomain.

After modifying the configuration, run `gulp test`. A test will be generated for each HTML file and sent to [Litmus](https://litmus.com).


