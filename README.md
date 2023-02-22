# Getting Captain working with Karma

## 1. 🧪 Ensure Karma produces JSON output

Karma does not ship with a JSON reporter built in, so you'll need to install `karma-json-reporter`:

```sh
npm install --save-dev karma-json-reporter
```

Once `karma-json-reporter` is installed, you can configure Karma with the reporter in your `karma.conf.js` file:

```js
    reporters: ["progress", "json"],
    jsonReporter: {
      stdout: false,
      outputFile: "tmp/results.json",
    },
```

This configuration will produce Captain-compatible JSON output in `tmp/results.json`.

## 2. 🔐 Create an Access Token

Create an Access Token for your organization within [Captain][captain-access-token] ([more documentation here][create-access-token]).

Add the new token as an action secret to your repository. Conventionally, we call this secret `RWX_ACCESS_TOKEN`.

## 3. 💌 Install the Captain CLI and call it when running tests

See the [full documentation on test suite integration][test-suite-integration].

```yaml
- uses: rwx-research/setup-captain@v1
- name: Run tests
  run: |
    captain run \
      --suite-id captain-examples-karma \
      --test-results tmp/results.json \
      --  \
      npm test
  env:
    RWX_ACCESS_TOKEN: ${{ secrets.RWX_ACCESS_TOKEN }}
```

## 4. 🎉 See your test results in Captain!

Take a look at the [final workflow!][workflow-with-captain]

[captain-access-token]: https://account.rwx.com/deep_link/manage/access_tokens
[create-access-token]: https://www.rwx.com/docs/access-tokens
[workflow-with-captain]: https://github.com/captain-examples/karma/blob/main/.github/workflows/ci.yml
[test-suite-integration]: https://www.rwx.com/docs/captain/test-suite-integration
