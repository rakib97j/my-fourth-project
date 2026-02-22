# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### Ans :getElementById → select one element by ID                                                                               getElementsByClassName → select all elements with same class                                                                 querySelector → select first matching element using CSS selector                                                           querySelectorAll → select all matching elements using CSS selector                                                                     Difference: getElementById → single,fast;                                                                                 getElementsByClassName → multiple, live;                                                                                           querySelector → first match;                                                                                            querySelectorAll → all matches, not live                                                                

# 2. How do you create and insert a new element into the DOM?
### Ans :document.createElement("tagName") → create element                                                                        element.innerHTML → add HTML content                                                                                                parent.appendChild(element) → insert element into DOM

# 3. What is Event Bubbling? And how does it work?
### Ans :Event Bubbling হলো একটি DOM event behavior যেখানে event parent elements এ “bubble” করে up করে, অর্থাৎ child element এ event trigger হলে, সেই event automatically তার parent, grandparent ইত্যাদি elements এ propagate হয়।

# 4. What is Event Delegation in JavaScript? Why is it useful?
### Ans :Event Delegation হলো একটি technique যেখানে parent element এর event handler use করে multiple child elements এর events handle করা হয়, instead of adding event listener individually on each child.                                                                 less memory, dynamic elements handle করা যায়, এবং cleaner code হয়।

# 5. What is the difference between preventDefault() and stopPropagation() methods?
### Ans :preventDefault() → stops the browser’s default action                                                                        stopPropagation() → stops the event from reaching parent elements