const evenLast = num=> num.length != 0 ? num.filter((_,i)=> i % 2 == 0)
  .reduce((a,c)=> a + +c) * num[num.length - 1] : 0