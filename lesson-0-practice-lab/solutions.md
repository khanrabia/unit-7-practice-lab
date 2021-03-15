# Answers:

**Exercise 1:** I noticed that it is an empty object and there is nothing that is being exported from the `lab.js` file. `Module.exports` default to an empty object.

---

**Exercise 2:** On the terminal I see my three objects printed out with the `keys and the values` that I placed in the `module. exports` objects. It is because of the `module.exports` is an object just like any other JavaScript object.

---

**Exercise 3:** This part of the `module.export` object is not undefined because `getFavoriteNumber` is defined inside the file called `lab.js` and then exported to the `modules.exports` object. This function has access to the variables and the functions that was defined within that file.

---

**Exercise 4:** I might see multiple `modules.exports` objects because normally when functions are invoked multiple times, the output is returned multiple times. However, `node caches modules` after the first time they are loaded. This means that every call to `require('./lab')` will get exactly the same object returned. Provided `require.cache` is not modified, multiple calls to `require('./lab')` will not cause the module code to be executed multiple times.

---
 
**Exercise 5:** In this example, the `client` is the `web browser`. The `server` is `hosted on this computer`. I can view the status of this server within the terminal.

---

