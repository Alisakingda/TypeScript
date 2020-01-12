// 函数的类型
// 函数声明
{
  function sum(x: number, y: number): number {
    return x + y
  }
}
// 函数表达式
{
  // 1
  let mySum = function(x: number, y: number): number {
    return x + y
  }
}
{
  // 2
  let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
  }
}

// 可选参数，参数默认值，剩余参数
{
  function buildName(firstName: string, lastName?: string) {
    if (lastName) {
      return firstName + ' ' + lastName
    } else {
      return firstName
    }
  }
  let tomcat = buildName('Tom', 'Cat')
  let tom = buildName('Tom')
}

{
  function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName
  }
  let tomcat = buildName1('Tom', 'Cat')
  let tom = buildName1('Tom')
}

{
  function push(array, ...items) {
    items.forEach(function(item) {
      array.push(item)
    })
  }

  let a = []
  push(a, 1, 2, 3)
}

// 重载（不做赘述）
