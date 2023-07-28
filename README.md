# Language Package Validator

Please add the following lines to your language package respository actions

```yml
...
- uses: actions/setup-node@v3
  with:
    node-version: 16
- name: Validate JSON & CSV Files
  uses: PitcherAG/validate-lang-package@v1
...
```