import WaterTrapWhile from "../Algos/WaterTrap/while/WaterTrapWhile";

export class LLNode {
    data: any;
    next: LLNode | null;
    constructor(data: any, next: any = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedListTS {
    head: LLNode | null;
    constructor() {
        this.head = null;
    }

    insertFirst(data: any): void {
        this.head = new LLNode(data, this.head);
    }

    size(): number {
        let counter = 0,
            currentnode = this.head;

        while (currentnode) {
            counter++;
            currentnode = currentnode?.next;
        }
        return counter;
    }

    getFirst(): any {
        return this.head;
    }


    clear(): void {
        this.head = null;
    }

    getLast(): any {
        let currentnode: LLNode | null = this.head;
        while (currentnode) {
            if (!currentnode?.next) {
                return currentnode;
            }
            currentnode = currentnode.next;
        }

        return currentnode;
    }

    removeFirst(): number {

        if (!this.head) {
            return 0;
        }

        let nextNode = this.head.next;
        this.head = null;
        this.head = nextNode;

        return this.size();
    }

    removeLast(): void {
        let lastNode = this.getLast();
        lastNode = null;
    }

    insertLast(data: any): any {
        let lastNode = this.getLast();
        if (!lastNode) {
            return null;
        }
        lastNode.next = new LLNode(data);
        return this.getLast();
    }

    getAt(pos: number): LLNode | null {


        let currentnode: LLNode | null = this.head,
            counter = 0;

  
        while (currentnode) {
            if (counter === pos) {
                return currentnode;
            }
            counter++;
            currentnode = currentnode.next

        }

        return null;
    }


}