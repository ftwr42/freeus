import { Person } from './older_than_me.js';

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

p1.compareAge(p2);

p2.compareAge(p1);

p1.compareAge(p3);
