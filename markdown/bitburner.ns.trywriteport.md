<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bitburner](./bitburner.md) &gt; [NS](./bitburner.ns.md) &gt; [tryWritePort](./bitburner.ns.trywriteport.md)

## NS.tryWritePort() method

Attempt to write to a port.

<b>Signature:</b>

```typescript
tryWritePort(port: number, data: string | number): Promise<boolean>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  port | number | Port or text file that will be written to. |
|  data | string \| number | Data to write. |

<b>Returns:</b>

Promise&lt;boolean&gt;

True if the data is successfully written to the port, and false otherwise.

## Remarks

RAM cost: 0 GB

Attempts to write data to the specified Netscript Port. If the port is full, the data will not be written. Otherwise, the data will be written normally.
