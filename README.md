# No Democracy? No Paywall.

## Pay/Adwall Bypass for some news sites 

Abusing global variables.

## How?

Initially when a user loads a site, the whole article is loaded. Moments later, AJAX calls determine whether the article is blocked/shortened.
During these AJAX calls, a website checks whether a user is logged in. These calls & their responses are hooked to global variables.
By setting the global variable to null, we can break the runtime execution of these authentication scripts.
It's difficult to determine when the variable is set & used on a website - for this reason it's executed on a `setTimeout` loop to try and `null` the variable mid-runtime & break functionality before a pay/adwall shows up & content is blocked.

There are definitely better ways of accomplishing this.

This is definitely one of the shortest and easiest ways.
