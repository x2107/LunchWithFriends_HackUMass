import { Collection } from 'fireorm';

@Collection()
class Todo {
  id: string;
  text: string;
  done: Boolean;
}