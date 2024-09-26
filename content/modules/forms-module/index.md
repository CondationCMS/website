---
title: Forms Module
template: content.html
---

# Forms module

The module provides a simple form processing.

## Installation

```shell
java -jar cms-server.jar module get forms-module
```

## Integrate in template code

Forms must be created in templates.


This example integrates a youtube video in markdown.

```html
<form class="row g-3" method="post" 
    action="/module/forms-module/form/submit" 
    enctype="multipart/form-data"
    onsubmit="return validateCaptcha(event)"
    >
    <input type="hidden" name="form" value="test-form" >
    <div class="col-md-12">
        <label for="inputEmail4">Your mail</label>
        <input type="email" name="from" id="inputEmail4" />
    </div>
    <div class="col-md-12">
        <label for="inputMessage">Message</label>
        <textarea type="text" name="message" id="inputMessage" ></textarea>
    </div>
    <div class="col-3">
        <img id="captchaImg" th:src="@{~/module/forms-module/captcha/generate(width=200,height=50,key=${captchaKey})}" />
        <input type="hidden" id="captchaKey" name="key" th:value="${captchaKey}" >
        <span class="reload" id="reloadCaptcha">reload</span>
    </div>
    <div class="col-9">
        <label for="inputCaptcha">Captcha</label>
        <input type="text" id="inputCaptcha" name="code" placeholder="captcha code here" />
    </div>
    <div>
        <button type="submit">Send request</button>
    </div>
</form>
```

Here is a basic implementation to validate the captcha.

```javascript
const validateCaptcha = async (event) => {
    event.preventDefault();
    let request = {
        code: document.getElementById("inputCaptcha").value,
        key: document.getElementById("captchaKey").value
    }

    const response = await fetch('/module/forms-module/captcha/validate', {
        method: 'POST',
        body: JSON.stringify(request)
    })

    const validationResponse = await response.json()

    if (!validationResponse.valid) {
        alert("captcha code is not valid")
        event.preventDefault()
        return false
    } else {
        console.log(event.target)
        event.target.submit()
        return true
    }
}
```

**Processing the form in extension**

```javascript
import { $hooks } from 'system/hooks.mjs';

$hooks.registerAction("forms/test-form/submit", (context) => {
	console.log("test-form submitted", context);
	return null;
})
```