// Simple in-memory model for demo purposes
let items = [];
let nextId = 1;

export function getAll() {
  return items;
}

export function getById(id) {
  return items.find((i) => i.id === Number(id));
}

export function create(data) {
  const item = { id: nextId++, ...data };
  items.push(item);
  return item;
}

export function update(id, data) {
  const idx = items.findIndex((i) => i.id === Number(id));
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...data };
  return items[idx];
}

export function remove(id) {
  const idx = items.findIndex((i) => i.id === Number(id));
  if (idx === -1) return false;
  items.splice(idx, 1);
  return true;
}
