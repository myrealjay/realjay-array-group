# realjay-array-group

This is a vue plugin created to help group array objects by specified key.
Most times we recieve a server response with array of objects and we need to group these object or collect object with specified key, this can suddenly become tricky with large dataset.

This plugin has been created to help with this situation.

#Installation

to install run 
`npm install --save realjay-array-group`

in your main.js

```
import Vue from "vue";
import groupArray from "realjay-array-group";

Vue.use(groupArray);
```

in your component you can then use

```
let array=[
            {month:1,amount:2000,user_id:1,name:'John Doe'},
            {month:2,amount:5000,user_id:2,name:'Mark Chuks'},
            {month:3,amount:3000,user_id:3,name:'Peter James'},
            {month:1,amount:10000,user_id:2,name:'Mark Chuks'},
            {month:1,amount:4000,user_id:1,name:'John Doe'},
            {month:1,amount:7000,user_id:2,name:'Mark Chuks'},
            {month:3,amount:5000,user_id:1,name:'John Doe'},
            {month:3,amount:6000,user_id:2,name:'Mark Chuks'}
        ];

let grouped=this.$group_array(array,'name','object');
console.log(grouped)
```

<img src="groupd_items.PNG" width="400" alt="output image" />

<a href="https://github.com/myrealjay/realjay-array-group/blob/master/groupd_items.PNG">Github Link</a>

usage format
```
this.$group_array(array,key,format)
```

|Parameter|Type|Description|Default|
|---------|----|-----------|-------|
|array    |array|This is the array of objects that you want to group|none|
|key      |string|The key to group by|none|
|format   |string|The format to return the result in|object|
