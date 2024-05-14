# Avatar Component

Avatar is a React typeScript component allows you to render profile image of user or his nickname

documentation is in the "docs" directory.

### Quick start

---

this component use antd library so to make sure it is working right you must install antd :

> npm install antd

### Avatar props

Avatar has multiple props to use with multiple use cases :

#### props:

1. props for Avatar component :

    1. color :  "blue" | "magenta" | "yellow"
    1. userFullName : string
    1. withColorizedBorder : boolean,
    1. shape : 'circle' | 'square'
    1. size : 'large' | 'small' | 'default' | number
    1. src : string
    1. style : CSSProperties
    1. className : string
    1. alt : string
    1. children : ReactNode
    1. onClick : ()=>{}

### Image for avatar component :

![App Screenshot](img/example1.JPG)

### how to use :

first , you should import the component :

```javascript
import {Avatar} from "../../Components";
```

and the example code :

```javascript
<Avatar color={"yellow"}  withColorizedBorder={true} userFullName={"asdasd dasdasd sdasdas qq ss gg"}/>
<Avatar withColorizedBorder={true} color={"blue"} src="https://joeschmoe.io/api/v1/random" userFullName={"asdasd dasdasd sdasdas qq ss gg"}/>
<Avatar color={"magenta"} src="https://joeschmoe.io/api/v1/random" userFullName={"asdasd dasdasd sdasdas qq ss gg"}/>
<Avatar color={"blue"} userFullName={"asdasd dasdasd sdasdas qq ss gg"}/>
<Avatar userFullName={"asdasd dasdasd sdasdas qq ss gg"}/>
```
