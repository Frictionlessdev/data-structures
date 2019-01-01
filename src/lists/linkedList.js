function Node(value){
    return {
        value: value,
        next: undefined
    }
}

function LinkedList(){
    return {
        head: undefined,
        tail: undefined,
        add: function(item, index){
            
            const newNode = new Node(item);

            if (this.head == undefined){                
                this.head = newNode;
                this.tail = newNode;
            }
            else if (index === undefined){
                this.tail.next = newNode;
                this.tail = newNode;
            }
            else{
                let count = 0;
                let currNode = this.head;
                let prevNode = this.head;
                while(count <= index){
                    if (index === count){
                        newNode.next = prevNode.next;                        
                        if (currNode === this.head){  
                            newNode.next = this.head;                          
                            this.head = newNode;
                        }
                        else if (currNode === this.tail){
                            prevNode.next = newNode;                                                        
                            this.tail = newNode;
                        }
                        else
                            prevNode.next = newNode;
                        break;
                    }
    
                    count++;
                    prevNode = currNode;
                    currNode = currNode.next;
                }
            }
        },
        delete: function(index){
            if (index === 0){
                this.head = this.head.next;
            }

            let currNode = this.head;
            let prevNode = this.head;
            let count = 0;
            while(count <= index){
                if (index === count){
                    prevNode.next = currNode.next;
                    if (currNode === this.tail)
                        this.tail = prevNode;
                    break;
                }

                count++;
                prevNode = currNode;
                currNode = currNode.next;
            }
            return currNode;
        },
        count: function(){
            let count = 0;
            if (!this.head) return count;

            let currNode = this.head;
            count++;
            //Traverse to find the count
            while(currNode.next !== undefined){
                currNode = currNode.next;
                count++;
            }

            return count;
        },
        getItem: function(index){
            if (index === 0){
                return this.head;
            }
            let count = 0;
            let currNode = this.head;
            while(currNode.next != undefined && count < index){ 
                currNode = currNode.next;
                count++;
            }

            return currNode;
        },
        print: function(){
            let currNode = this.head;
            while(true){
                if (currNode !== this.head){                    
                    console.log(" |");
                    console.log(" |");
                    console.log("\\_/");
                }
                console.log(" _____________________________");
                console.log("|%s %s", currNode.value.firstname, currNode.value.lastname);
                console.log("|%s|", "_____________________________"); 
                
                if(currNode.next === undefined) break;

                currNode = currNode.next;
            }
        }
    }
}

module.exports = LinkedList;