function zigzag(a) {
  var best = 1;
  var left = 0;

  while (left < a.length) {
    // 
    // console.log(left);
    var right = left + 1;
    // 
    // console.log(right);
    while (right < a.length) {
      // 
      console.log(right);
      console.log('====');
      if (right == left + 1) {
        
        if (a[left] == a[right]) {
          break;
        }

      } else {
        // 
        console.log(right);
        console.log("a[right-2]: ", a[right-2]);
        console.log("a[right-1]: ", a[right-1]);
        console.log("a[right]: ", a[right-0]);
        console.log("-----------------");

        // Still not completely sure what this does
        // I BELIEVE This checks to see if the previous two elements fit one of the two descriptions:
        //    1. There are three elements of the same value
        //    2. There are three elements who are either strictly incrementing or strictly decrementing
        // If so, then we do not want to move the right pointer to the next element. We simply want to break
        // out of the inner loop. This could be why we are using a while loop instead of a for loop here.
        // TODO: ======================================================================================
        //   - Make sure you understand what the break keyword does here. Step in, log to the console, etc.
        if ((a[right - 1] - a[right - 2]) * (a[right - 1] - a[right]) <= 0) {
          break;
        }

      }

      right++;
    }

    best=Math.max(best,right-left);
    left=right;
    // Move left backwards so as to check for 3 incrementing or decrementing integers in a row.
    //  If it goes [1, 7, 6, 5, 6] and you break at 5, then keep moving right, you'll end up with 2
    //  as your output, when in actuality, you needed to move the left pointer left one to the 6 (only
    //  if the integer to the left is not equal to the integer at the pointer) in order to grab the 6
    //  that came BEFORE the 5
    if (left < a.length && a[left - 1] != a[left]) {
      left--;
    }
  
  }
  return best;
}

// var a = [2, 1, 4, 4, 1, 4, 4, 1, 2, 0, 1, 0, 0, 3, 1, 3, 4, 1, 3, 4];
// var a = [7, 6, 5, 4, 5, 6, 7];
// var a = [4, 4];
// var a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6];
zigzag(a);