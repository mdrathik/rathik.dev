---
title: 'How to find HCF & LCM in Javascript with Example Code'
date: '2022-12-06'
tags: ['javascript']
draft: false
summary: 'Lets learn how to find HCF and LCM in Javascript'
images: ['/static/images/how-to-fin-hcf-and-lcm-in-javascript-with-example.jpg']
authors: ['default']
---

In this blog post with Javascript, we will learn how to find the HCF (highest common factor) and LCM (lowest common multiple) of two numbers. I will also provide examples of code in javascript, which you can try to implement and understand the process. HCF and LCM are essential concepts to know cause many interviewers ask this question as well.

![HCF & LCM in Javascript](/static/images/how-to-fin-hcf-and-lcm-in-javascript-with-example.jpg)

## What is HCF & LCM ?

HCF and LCM are important mathematical concepts that are used extensively by programmers. HCF stands for Highest Common Factor, while LCM stands for Lowest Common.

## How to to find HCF

To find the HCF of two numbers, you simply need to find the largest number that evenly divides both numbers. For example, the HCF of 12 and 18 is 6.

### Examples code of HCF or GCD in JavaScript

```jsx
// Creating a function to find the HCF
function get_HCF_or_GCD(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') return false
  x = Math.abs(x)
  y = Math.abs(y)
  while (y) {
    var t = y
    y = x % y
    x = t
  }
  return x
}

//take function peramater 60, 72 and the right HCF of 60 & 72 is 12
console.log(get_HCF_or_GCD(60, 72))
```

## How to to find LCM

To find the LCM or GCM of two numbers, you need to find the smallest number that is evenly divisible by both numbers. For example, the LCM of 12 and 18 is 36.

```jsx
// Creating a function to find the LCD
function get_LCM_or_LCD(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') return false
  return !x || !y ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y))
}
function gcd_two_numbers(x, y) {
  x = Math.abs(x)
  y = Math.abs(y)
  while (y) {
    var t = y
    y = x % y
    x = t
  }
  return x
}
//take function peramater 15, 20 and the right LCM of 15 & 20 is 60
console.log(get_LCM_or_LCD(15, 20))
```

I hope you learned something cool ! Love to you hear from you about any feedback or issue you are still facing. Don’t forget to comment in comment box.

More Article about Javascript

- [Some ES6 features example compare to ES5](https://www.rathik.dev/blog/some-es6-features-example-compare-to-es5)
- [Pure Function in Javascript](https://www.rathik.dev/blog/javascript-fundamentals/Pure-function-in-javascript)
- [Javascript Callback Function](https://www.rathik.dev/blog/javascript-fundamentals/what-is-callback-function-in-javascript)
