var assert = require("assert");
var sinon = require("sinon");
var expect = require("chai").expect;
var should = require("chai").should;

var LinkedList = require("../../src/lists/linkedList");

describe("Linked list test", function(){

    it("should create an empty linked list", function(){
        const linkedList = new LinkedList();

        expect(linkedList).to.be.not.null;
        expect(linkedList).has.property('head');
        expect(linkedList).has.property('tail');
    })

    it("should have method to add item", function(){
        const linkedList = new LinkedList();
        expect(linkedList).to.respondTo('add');
    })

    it("should have a method to remove item", function(){
        const linkedList = new LinkedList();
        expect(linkedList).to.respondTo('delete');
    })

    it("should have a method to retrieve the count", function(){
        const linkedList = new LinkedList();
        expect(linkedList).to.respondTo('count');
    })

    it("should be able to add element to the list", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})

        var count = linkedList.count();
        expect(count).to.be.equal(1);
    })

    it("should be able to retrieve the value at an index", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'})

        const count = linkedList.count();
        expect(count).to.be.equal(4)

        const item = linkedList.getItem(2)
        expect(item.value.firstname).to.be.equal('Yuvika');
    })

    it("should add element at the end of the list", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})

        const count = linkedList.count();
        expect(count).to.be.equal(3)

        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'})
        expect(linkedList.tail.value.firstname).to.be.equal('Kinni')
    })

    it("should have head point to the first element", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})

        const count = linkedList.count();
        expect(count).to.be.equal(3)

        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'})
        expect(linkedList.head.value.firstname).to.be.equal('Shivi')
    })

    it("should sucessfully delete last item", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'})

        let count = linkedList.count();
        expect(count).to.be.equal(4)

        const itemDeleted = linkedList.delete(count - 1);
        count = linkedList.count();
        expect(count).to.be.equal(3);

        const item = linkedList.getItem(2);
        expect(item.next).to.be.undefined;

    })

    it("should successfully delete first item", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'})

        const itemDeleted = linkedList.delete(0);
        let count = linkedList.count();
        expect(count).to.be.equal(3);

        expect(linkedList.head.value.firstname).to.be.equal('Rushil');

        const item = linkedList.getItem(0);
        expect(item.value.firstname).to.be.equal('Rushil');        

        expect(linkedList.head.next.value.firstname).to.be.equal('Yuvika');
    })

    it("should successfully add first item", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})

        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'}, 0)

        let count = linkedList.count();
        expect(count).to.be.equal(4);

        expect(linkedList.head.value.firstname).to.be.equal('Kinni');

        const item = linkedList.getItem(0);
        expect(item.value.firstname).to.be.equal('Kinni');        

        expect(linkedList.head.next.value.firstname).to.be.equal('Shivi');

    })

    it("should successfully delete at index", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'})

        let count = linkedList.count();
        expect(count).to.be.equal(4);

        const itemDeleted = linkedList.delete(2);
        count = linkedList.count();
        expect(count).to.be.equal(3);

        const item = linkedList.getItem(2);
        expect(item.value.firstname).to.be.equal('Kinni');

        expect(item.next).to.be.undefined;
    })

    it("should successfully add item at index", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'}, 2)

        const count = linkedList.count();
        expect(count).to.be.equal(4);

        const item = linkedList.getItem(2);
        expect(item.value.firstname).to.be.equal('Kinni');

        expect(item.next.value.firstname).to.be.equal('Yuvika');
    })

    it("should print the linked list", function(){
        const linkedList = new LinkedList();

        linkedList.add({firstname: 'Shivi', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Rushil', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Yuvika', lastname: 'Bhardwaj'})
        linkedList.add({firstname: 'Kinni', lastname: 'Bhardwaj'}, 2)

        linkedList.print();
    })
})