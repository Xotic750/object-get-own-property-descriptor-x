<a
  href="https://travis-ci.org/Xotic750/object-get-own-property-descriptor-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/object-get-own-property-descriptor-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/object-get-own-property-descriptor-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/object-get-own-property-descriptor-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/object-get-own-property-descriptor-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/object-get-own-property-descriptor-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/object-get-own-property-descriptor-x"
  title="npm version">
<img src="https://badge.fury.io/js/object-get-own-property-descriptor-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/object-get-own-property-descriptor-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/object-get-own-property-descriptor-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/object-get-own-property-descriptor-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/object-get-own-property-descriptor-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/object-get-own-property-descriptor-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/object-get-own-property-descriptor-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_object-get-own-property-descriptor-x"></a>

## object-get-own-property-descriptor-x

Sham for ES6 Object.getOwnPropertyDescriptor

<a name="exp_module_object-get-own-property-descriptor-x--module.exports"></a>

### `module.exports` ⇒ <code>Object</code> ⏏

This method returns a property descriptor for an own property (that is,
one directly present on an object and not in the object's prototype chain)
of a given object.

**Kind**: Exported member  
**Returns**: <code>Object</code> - A property descriptor of the given property if it exists on the object, undefined otherwise.

| Param    | Type            | Description                                                    |
| -------- | --------------- | -------------------------------------------------------------- |
| object   | <code>\*</code> | The object in which to look for the property.                  |
| property | <code>\*</code> | The name of the property whose description is to be retrieved. |

**Example**

```js
import getOwnPropertyDescriptor from 'object-get-own-property-descriptor-x';
const obj = {bar: 42};
console.log(getOwnPropertyDescriptor(o, 'bar'));
// {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }
```
