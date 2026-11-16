function countDownSum(n) {
   if (n <= 0) {
return 0
   }
   return n +countDownSum(n - 1);
}