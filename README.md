# chrome-fetch

A Node.js library that wraps the Fetch API to impersonate Chrome browser requests.

Uses [curl-impersonate](https://github.com/lwthiker/curl-impersonate) to impersonate Chrome browser requests.

Useful for bypassing WAFs like Cloudflare

## Installation

```bash
npm install chrome-fetch
```


## Usage


> [!WARNING]  
> You need to pass a valid `user-agent` sometimes that alone maybe be insufficient. I'd recommend using Chrome Dev Tools Network Tab to "copy as fetch" when right clicking on a request to get all the headers.
This adds some additional headers for maximum stealth.

```ts
import { chromeFetch as fetch } from "chrome-fetch";

const response = await fetch("https://example.com", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.dextools.io/app/en/tron/new-socials",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "method": "GET",
  "mode": "cors",
});
console.log(response);
```
