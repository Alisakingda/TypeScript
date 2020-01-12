// interfaces
// boolean,number,string,void,null,undefined,any

// 定义数组和对象呢？引用interfaces这个概念
interface Person {
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 25
}
// 赋值的时候，变量的形状必须和接口的形状保持一致。

// 可选属性
{
  interface Person {
    name: string
    age?: number
  }

  let tom: Person = {
    name: 'Tom'
  }
}

// 任意属性
{
  interface Person {
    name: string
    age?: number
    [propName: string]: any
  }

  let tom: Person = {
    name: 'Tom',
    gender: 'male'
  }
}
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

// 只读属性
{
  interface Person {
    readonly id: number
    name: string
    age?: number
    [propName: string]: any
  }

  let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
  }

  // tom.id = 9527
  // 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

  // index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
}
