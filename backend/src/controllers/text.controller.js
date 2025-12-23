import * as TextModel from "../models/TextItem.js";

export function list(req, res) {
  res.json(TextModel.getAll());
}

export function get(req, res) {
  const item = TextModel.getById(req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
}

export function createText(req, res) {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "text required" });
  const item = TextModel.create({ text });
  res.status(201).json(item);
}

export function updateText(req, res) {
  const item = TextModel.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
}

export function deleteText(req, res) {
  const ok = TextModel.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: "Not found" });
  res.status(204).end();
}
