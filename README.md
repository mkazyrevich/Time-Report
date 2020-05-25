## Tested in environment

```
node --version
v13.12.0
```

```
npm --version
6.14.4
```

```
OS
Windows 7 Professional SP1
```

## How to use this repository

1. **Install Node.js**

2. **Install all dependencies**
```
npm install
```

3. **Calculate time per user**
```
node <path to calculateTime.js> --user <path to source file> <path to target file>
or
node <path to calculateTime.js> -u <path to source file> <path to target file>
```

4. **Calculate time per project**
```
node <path to calculateTime.js> --project <path to source file> <path to target file>
or
node <path to calculateTime.js> -p <path to source file> <path to target file>
```

5. **Calculate time per project with details on each task**
```
node <path to calculateTime.js> --detailedProject <path to source file> <path to target file>
or
node <path to calculateTime.js> -d <path to source file> <path to target file>
```

6. **Run tests**
```
npm test
```
