let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    for(let i in arr)
    {
        if(arr[i].profession=='developer')
        console.log(arr[i].profession)
    }
    //Write your code here , just console.log
  }
  
  function addData() {
    //Write your code here, just console.log
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }