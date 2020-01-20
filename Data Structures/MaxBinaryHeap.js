// implement a Max Binary Heap

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    //   push in the new value
    this.values.push(val);
    // check the length of the values array
    let childIdx = this.values.length - 1;
    // if the array length is greater than 1
    if (childIdx > 0) {
      // calculate the value of the parent index
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parent = this.values[parentIdx];
      let child = this.values[childIdx];
      // while the child node is still larger than the parent node
      // bubble up the value
      while (parent < child) {
        //   swap the values of the child and the parent
        this.swap(childIdx, parentIdx);
        // update the child and parent indexes
        childIdx = parentIdx;
        parentIdx = Math.floor((childIdx - 1) / 2);
        // update the values of the child and parent
        parent = this.values[parentIdx];
        child = this.values[childIdx];
      }
    }
  }
  swap(i, j) {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }
}

var a = new MaxBinaryHeap();
a.insert(100);
a.insert(10);
a.insert(50);
a.insert(35);
a.insert(11);
a.insert(123);
a.insert(77);
a.insert(1000);

console.log(a.values);
