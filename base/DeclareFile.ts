// 声明文件
// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能

//声明语句
{
  // declare var jQuery: (selector: string) => any
  // jQuery('#foo')
}

// 声明文件
{
  // src / jQuery.d.ts
  // declare var jQuery: (selector: string) => any
  // 声明文件必需以 .d.ts 为后缀。
}

// 第三方声明文件
{
  // npm install @types/jquery --save-dev
}

// 全局变量
{
  // declare var 声明全局变量
  // declare function 声明全局方法
  // declare class 声明全局类
  // declare enum 声明全局枚举类型
  // declare namespace 声明（含有子属性的）全局对象
  // interface 和 type 声明全局类型
}

// npm包
{
  // import
  // export
}

// UMD 库
