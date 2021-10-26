import { AnimalQueue, Cat, Dog } from ".";

describe('AnimalQueue', () => {
    let animalQueue: AnimalQueue;
    beforeEach(() => {
        animalQueue = new AnimalQueue();
        const animal1 = new Dog('Labrador Retriever');
        const animal2 = new Dog('Pug');
        const animal3 = new Dog('Shiba Inu');
        const animal5 = new Cat('Tabby cat');
        const animal6 = new Cat('Persian cat');

        animalQueue.enqueue(animal1);
        animalQueue.enqueue(animal2);
        animalQueue.enqueue(animal3);
        animalQueue.enqueue(animal5);
        animalQueue.enqueue(animal6);
    });

    it('returns oldest animal', () => {
        const oldestAnimal = animalQueue.dequeueAny();

        expect(oldestAnimal.name).toBe('Labrador Retriever');
    });

    it('returns oldest dog', () => {
        const oldestDog = animalQueue.dequeueDog();

        expect(oldestDog.name).toBe('Labrador Retriever');
    });

    it('returns oldest cat', () => {
        const oldestCat = animalQueue.dequeueCat();

        expect(oldestCat.name).toBe('Tabby cat');
    });
});
