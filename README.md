# Create random

Node.js shell script that runs a random `npm create` command. 

It works by choosing a random npm package that:
- follows the `create-` naming convention,
- has an executable "bin" script, as defined by `package.json`'s `bin` property, and
- has more than 150 weekly downloads on the npm registry.

### Usage

No installation is required. Just run:

```bash
npm create random
```

Alternatively, but ultimately defeating our appreciation for the syntactic eudaimonia of the "npm create" command, you can also do:

```bash
npx create-random
```

Or, if you are a monster:

```bash
npm exec create-random
```

### More information
- ["npm init" & "npm create" docs.](https://docs.npmjs.com/cli/v8/commands/npm-init)

### Acknowledgments

We want to thank [nice-registry](https://github.com/nice-registry) for his [all-the-package-names](https://github.com/nice-registry/all-the-package-names) repository, faithfully updated every day since 2016.

### License
MIT
