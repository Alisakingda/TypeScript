// 类型断言
// 语法

{
  // <类型>值
  // or
  // 值 as 类型
}

function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length
  }
}
