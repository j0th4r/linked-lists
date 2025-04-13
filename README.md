# Linked List Implementation – The Odin Project

This repository contains a JavaScript implementation of a **Linked List** based on the curriculum from [The Odin Project](https://www.theodinproject.com/).

## 📋 Project Description

This project demonstrates a classic data structure: the **Singly Linked List**. The implementation is done using modern JavaScript classes or factory functions, following object-oriented principles.

The `LinkedList` manages a collection of `Node` objects, each containing a `value` and a reference to the `nextNode`.

---

## 🧱 Structure

### Classes / Factories

- **`Node`**  
  Represents a single node in the list.  
  Properties:
  - `value`: stores the data
  - `nextNode`: pointer to the next node (default is `null`)

- **`LinkedList`**  
  Manages the list as a whole and provides methods to interact with it.

---

## 🔧 Features

Implemented methods in the `LinkedList` class/factory:

- `append(value)` – Adds a node to the end of the list.
- `prepend(value)` – Adds a node to the start of the list.
- `size()` – Returns the number of nodes in the list.
- `head()` – Returns the first node.
- `tail()` – Returns the last node.
- `at(index)` – Returns the node at the given index.
- `pop()` – Removes the last node.
- `contains(value)` – Returns `true` if the value exists in the list.
- `find(value)` – Returns the index of the node containing the value, or `null` if not found.
- `toString()` – Returns a string representation of the list:  
  `( value ) -> ( value ) -> null`

---

## 🌟 Extra Credit

Additional features for more robust functionality:

- `insertAt(value, index)` – Inserts a new node at the specified index.
- `removeAt(index)` – Removes the node at the specified index.

These functions update `nextNode` references to maintain proper linkage.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/j0th4r/linked-lists.git
cd linked-list
```
