class BeeKeeper {
	hasMask: boolean = true;
}

class ZooKeeper {
	nameTag: string = "Mikle";
}

class Animal {
	numLegs: number = 4;
}

class Bee extends Animal {
	keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
	keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
	return new c();
}

createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;
