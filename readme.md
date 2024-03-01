# Parse National ID

## Description

This library parses Egyptian national ID and extracts data from it.

## Installation

- You can install the library from npm using the following command:

  ```bash
  npm install parse-national-id
  ```

  then import it in your project:

  ```js
  import { parseNationalId } from "parse-national-id";
  ```

- You can also import the library directly from the CDN:

  ```js
  import { parseNationalId } from "https://unpkg.com/parse-national-id";
  ```

## Usage

The library exports a function called `parseNationalId` that takes Two parameters (the ID) as a string and A default Parameter for the language as a string and returns the parse result in an object in the case of ID is valid, otherwise returns null.

example :

```js
import { parseNationalId } from "parse-national-id";

const result = parseNationalId("30207072500379");

console.log(result);
// {
//   birthDay: '07',
//   birthMonth: '07',
//   birthYear: '2002',
//   birthDate: '07/07/2002',
//   birthOrder: '3',
//   gender: 'Male',
//   birthCity: 'Asyut'
// }
```

```js
import { parseNationalId } from "parse-national-id";

const result = parseNationalId("30207072500379", "ar");

console.log(result);
// {
//   birthDay: '07',
//   birthMonth: '07',
//   birthYear: '2002',
//   birthDate: '07/07/2002',
//   birthOrder: '3',
//   gender: 'ذكر',
//   birthCity: 'أسيوط'
// }
```

In the case of using an invalid ID, the function will return `null`

for example :

```js
import { parseNationalId } from "parse-national-id";

const result = parseNationalId("302070725003");

console.log(result);
// null
```

## Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.

## License
[MIT](https://github.com/ahmedsaleh020/parse-national-id/blob/main/LICENSE.md) License © [Ahmed Saleh](https://github.com/ahmedsaleh020)
