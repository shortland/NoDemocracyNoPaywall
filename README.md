# No Democracy? No Paywall.

## Paywall Bypass for The Washington Post

Exploiting global variables.

## How?

Initially when a user loads The WP, the whole article is loaded. Moments later, AJAX calls determine whether the article is blocked/shortened.
During these AJAX calls The WP checks whether a user is logged in. These calls & their responses are hooked to a global variable "TWP".
By setting the global variable "TWP" to null, we can break the runtime execution of these authentication scripts.
It's difficult to determine when the TWP variable is set & used on the website - for this reason it's executed on a `setTimeout` loop to try and `null` the variable mid-runtime & break functionality before a paywall shows up & content is blocked.

There are definitely better ways of accomplishing this, but my priority at that moment was to read an article :)
