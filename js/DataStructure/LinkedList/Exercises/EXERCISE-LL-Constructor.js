// WRITE NODE CLASS HERE //
//                       //
//                       //
//                       //
//                       //
///////////////////////////

class LinkedList {
	// WRITE LL CONSTRUCTOR HERE //
	//                           //
	//                           //
	//                           //
	//                           //
	///////////////////////////////

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}

export default LinkedList