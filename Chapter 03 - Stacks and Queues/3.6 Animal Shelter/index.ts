import { Queue } from "data-structures/queue";

export class AnimalQueue {
    dogs = new Queue<Dog>();
    cats = new Queue<Cat>();
    order = 0;

    /**
     * Adds animal to the queue and increments order
     *
     * @param animal - the animal object
     */
    enqueue(animal: Animal): void {
        animal.order = this.order;
        this.order++;

        if (animal instanceof Dog) {
            this.dogs.add(animal);
        } else if (animal instanceof Cat) {
            this.cats.add(animal);
        }
    }

    dequeueDog(): Dog {
        return this.dogs.remove();
    }

    dequeueCat(): Cat {
        return this.cats.remove();
    }

    /**
     * @returns the oldest animal using order
     */
    dequeueAny(): Animal {
        if (this.dogs.isEmpty()) {
            return this.dequeueCat();
        } else if (this.cats.isEmpty()) {
            return this.dequeueDog();
        }

        const dog = this.dogs.peek();
        const cat = this.cats.peek();

        if (dog.isOlderThan(cat)) {
            return this.dequeueDog();
        } else {
            return this.dequeueCat();
        }
    }

}

class Animal {
    order: number;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.order = 0;
    }

    isOlderThan(a: Animal): boolean {
        return this.order < a.order;
    }
}

export class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}

export class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}
