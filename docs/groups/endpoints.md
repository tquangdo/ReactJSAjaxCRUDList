# Endpoints


## GET /


get all records

> Example request:

```javascript
const url = new URL(
    "http://yourApi.dev/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X GET \
    -G "http://yourApi.dev/" 

```


> Example response (200):

```json
{
 "id": 4,
 "name": "Jessica Jones",
 "roles": ["admin"]
}
```
<div id="execution-results-GET-" hidden>
    <blockquote>Received response<span id="execution-response-status-GET-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GET-"></code></pre>
</div>
<div id="execution-error-GET-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GET-"></code></pre>
</div>

<form id="form-GET-" data-method="GET" data-path="/" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('GET-', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GET-" onclick="tryItOut('GET-');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GET-" onclick="cancelTryOut('GET-');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GET-" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>/</b></code>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>id</code></b>&nbsp;&nbsp;<small>integer</small> 
<input type="number" name="id" data-endpoint="GET-" data-component="url" required hidden>
<br>
The ID of the post.</p>
<p>
<b><code>lang</code></b>&nbsp;&nbsp;<small>string</small> 
    <i>optional</i>
<input type="text" name="lang" data-endpoint="GET-" data-component="url" hidden>
<br>
The language.</p>
</form>

## POST /getMangServer




> Example request:

```javascript
const url = new URL(
    "http://yourApi.dev/getMangServer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://yourApi.dev/getMangServer" 

```


<div id="execution-results-POST-getMangServer" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-getMangServer"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-getMangServer"></code></pre>
</div>
<div id="execution-error-POST-getMangServer" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-getMangServer"></code></pre>
</div>

<form id="form-POST-getMangServer" data-method="POST" data-path="/getMangServer" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('POST-getMangServer', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-getMangServer" onclick="tryItOut('POST-getMangServer');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-getMangServer" onclick="cancelTryOut('POST-getMangServer');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-getMangServer" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/getMangServer</b></code>
</p>
</form>

## POST /addDivThemServer




> Example request:

```javascript
const url = new URL(
    "http://yourApi.dev/addDivThemServer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://yourApi.dev/addDivThemServer" 

```


<div id="execution-results-POST-addDivThemServer" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-addDivThemServer"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-addDivThemServer"></code></pre>
</div>
<div id="execution-error-POST-addDivThemServer" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-addDivThemServer"></code></pre>
</div>

<form id="form-POST-addDivThemServer" data-method="POST" data-path="/addDivThemServer" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('POST-addDivThemServer', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-addDivThemServer" onclick="tryItOut('POST-addDivThemServer');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-addDivThemServer" onclick="cancelTryOut('POST-addDivThemServer');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-addDivThemServer" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/addDivThemServer</b></code>
</p>
</form>

## POST /xoaServer




> Example request:

```javascript
const url = new URL(
    "http://yourApi.dev/xoaServer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://yourApi.dev/xoaServer" 

```


<div id="execution-results-POST-xoaServer" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-xoaServer"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-xoaServer"></code></pre>
</div>
<div id="execution-error-POST-xoaServer" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-xoaServer"></code></pre>
</div>

<form id="form-POST-xoaServer" data-method="POST" data-path="/xoaServer" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('POST-xoaServer', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-xoaServer" onclick="tryItOut('POST-xoaServer');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-xoaServer" onclick="cancelTryOut('POST-xoaServer');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-xoaServer" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/xoaServer</b></code>
</p>
</form>

## POST /luuServer


post & save to server

> Example request:

```javascript
const url = new URL(
    "http://yourApi.dev/luuServer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://yourApi.dev/luuServer" 

```


<div id="execution-results-POST-luuServer" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-luuServer"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-luuServer"></code></pre>
</div>
<div id="execution-error-POST-luuServer" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-luuServer"></code></pre>
</div>

<form id="form-POST-luuServer" data-method="POST" data-path="/luuServer" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('POST-luuServer', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-luuServer" onclick="tryItOut('POST-luuServer');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-luuServer" onclick="cancelTryOut('POST-luuServer');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-luuServer" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/luuServer</b></code>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>id</code></b>&nbsp;&nbsp;<small>integer</small> 
<input type="number" name="id" data-endpoint="POST-luuServer" data-component="url" required hidden>
<br>
The ID of the post.</p>
</form>


