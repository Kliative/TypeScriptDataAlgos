import { LinkedListTS, LLNode } from "../DataStructures/LinkedList";


describe('LLNode', function () {
    it('LLNode is defined', () => {
        expect(LLNode).toBeTruthy();
    });

    it('has properties "data" and "next"', () => {
        const node = new LLNode('a', 'b');
        expect(node.data).toEqual('a');
        expect(node.next).toEqual('b');
    });


});


describe('LinkedListTS', function () {
    it('LinkedListTS is defined', () => {
        expect(LinkedListTS).toBeTruthy();
    });
    it('appends a node to the start of the list', () => {
        const l = new LinkedListTS();

        l.insertFirst(1);
        if (l.head) expect(l.head.data).toEqual(1);

        l.insertFirst(2);
        if (l.head) expect(l.head.data).toEqual(2);

    });

    test('returns the number of items in the linked list', () => {
        const l = new LinkedListTS();
        expect(l.size()).toEqual(0);
        l.insertFirst(1);
        l.insertFirst(1);
        l.insertFirst(1);
        l.insertFirst(1);
        expect(l.size()).toEqual(4);
    });

    it('returns the first element', () => {
        const l = new LinkedListTS();
        l.insertFirst(1);
        expect(l.getFirst()?.data).toEqual(1);
        l.insertFirst(2);
        expect(l.getFirst()?.data).toEqual(2);
    });


    it('returns the last element', () => {
        const l = new LinkedListTS();
        l.insertFirst(2);
        expect(l.getLast()).toEqual({ data: 2, next: null });
        l.insertFirst(1);
        expect(l.getLast()).toEqual({ data: 2, next: null });
    });


    it('empties out the list', () => {
        const l = new LinkedListTS();
        expect(l.size()).toEqual(0);
        l.insertFirst(1);
        l.insertFirst(1);
        l.insertFirst(1);
        l.insertFirst(1);
        expect(l.size()).toEqual(4);
        l.clear();
        expect(l.size()).toEqual(0);
    });

    it('RemoveLast removes the last node when list is empty', () => {
        const l = new LinkedListTS();
        expect(() => {
            l.removeLast();
        }).not.toThrow();
    });

    it('removes the first node when the list has a size of one', () => {
        const l = new LinkedListTS();
        l.insertFirst('a');
        l.removeFirst();
        expect(l.size()).toEqual(0);
        expect(l.getFirst()).toEqual(null);
    });

    it('adds to the end of the list', () => {
        const l = new LinkedListTS();
        l.insertFirst('a');

        l.insertLast('b');

        expect(l.size()).toEqual(2);
        expect(l.getLast().data).toEqual('b');
    });

    test('returns the node at given index', async () => {
        const l = new LinkedListTS();
        expect(l.getAt(10)).toEqual(null);

        l.insertLast(1);
        l.insertLast(2);
        l.insertLast(3);
        l.insertLast(4);

        let getAt0 = await l.getAt(0); // without type mapping
        if (getAt0 !== null) {
            expect(getAt0.data).toEqual(1);
        }

        let getAt1 = await l.getAt(1); // without type mapping
        if (getAt1 !== null) {
            expect(getAt1.data).toEqual(2);
        }



        let getAt2 = await l.getAt(2); // without type mapping
        if (getAt2 !== null) {
            expect(getAt2.data).toEqual(3);
        }


        let getAt3 = await l.getAt(3); // without type mapping
        if (getAt3 !== null) {
            expect(getAt3.data).toEqual(4);
        }

    });
});
