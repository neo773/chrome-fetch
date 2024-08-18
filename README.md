# chrome-fetch

A Node.js library that wraps the Fetch API to impersonate Chrome browser requests.

Uses [curl-impersonate](https://github.com/lwthiker/curl-impersonate) to impersonate Chrome browser requests.

Useful for bypassing WAFs like Cloudflare

## Installation

```bash
npm install chrome-fetch
```

## Usage

```ts
import { chromeFetch as fetch } from "chrome-fetch";

const response = await fetch("https://example.com");
console.log(response);
```
