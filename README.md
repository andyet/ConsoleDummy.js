#ConsoleDummy.js
Super lightweight solution that lets you leave `console` statements in your JS without consequence. It does nothing for console methods that already exists.

##How do I use it?
Just include the script in your project. Use `console` methods as usual.

##Downloads:
You have 2 options. This one covers you for all known console methods and is approximately 295 bytes:
[https://github.com/andyet/ConsoleDummy.js/raw/master/ConsoleDummy.min.js](ConsoleDummy.min.js)
This one only covers `log`, `info`, `warn` and `error` making it even tinier at 144 bytes:
[https://github.com/andyet/ConsoleDummy.js/raw/master/SlimConsoleDummy.min.js](SlimConsoleDummy.min.js)

##What does it do?
- Creates a window.console object if it doesn't exist
- Creates a no-op function for any non-existant console methods
- Doesn't do anything for methods that already exist

##What if my browser has a console?
It only creates dummy methods for the non-existant ones.

##Which methods does it include?
The slim version supports: 
- `log`
- `info`
- `warn`
- `error`

The full version supports: 
- `assert`
- `count`
- `debug`
- `dir`
- `dirxml`
- `error`
- `exception`
- `group`
- `groupCollapsed`
- `groupEnd`
- `info`
- `log`
- `markTimeline`
- `profile`
- `profileEnd`
- `time`
- `timeEnd`
- `trace`
- `warn`

##Supported browsers
- IE6 and newer
- All modern browsers

##Details
Argue all you want about whether or not leaving console statements in your code in production is a good idea or not. However, in my opinion, there *are* times when leaving simple debug statements in your production code actually makes sense. This thing is small enough that you could even leave it in your code just for the benefit of not breaking your whole site if you accidentally leave a `console.log` somewhere.

I really liked Paul's Irish's window.log() because it's super lightweight. However, I want to use the other awesome methods console provides. Also, I wasn't excited about how Webkit displays log messages when you pass it the arguments object like he does in his approach. The native `console.log()` has a nicer looking output, especially when you're logging arrays because the `arguments` object/quasi-array is already displayed a bit like an array.

Also, most other approaches I've seen expect developers to use some other debug function. I see this as a weakness because I think developers are used to using `console` methods and ultimately, what they want (at least what I want), is protection against leaving one stupid console.log() or console.warn() in your app and all of a sudden breaking everything.

So, "ConsoleDummy.js" seemed like the tiniest solution that would ensure a console object exists and making sure any missing methods are replaced with a no-op function.

If you're wondering, yes, I've seen Ben Alman's solution that Paul Irish worked with him on. There's also Clientcide's dbug. Again, I like those, but they both have the same issue with formatting in webkit — and I still feel they're a tad bit big for a "leave-in" solution.

If the style looks a bit funky, it's because I'm trying to write it so the compiler can compress it as much as possible.

If you have any suggestion for shortening it — please let me know. 

If you have questions or if like this little solution let me know on twitter: [http://twitter.com/HenriJoreteg](http://twitter.com/HenriJoreteg).