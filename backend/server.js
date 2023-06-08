require('dotenv').config({
  path: './.env',
});
const cors = require('cors');
const knex = require('./knex.js');
const PORT = process.env.SERVER_PORT ?? 8080;

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

// GET 全てのアイテムをjsonで渡す
app.get('/api/items', async (req, res) => {
  const items = await knex
    .select({
      item_id: 'item.id',
      item_name: 'item.name',
      category_id: 'item.category_id',
      image: 'item.image',
    })
    .from('item')
    .innerJoin('category', `item.category_id`, '=', 'category.id')
    .orderBy('item.id', 'asc');
  res.status(200).send(items);
});

// GET 該当するテーブルのアイテムをjsonで渡す
app.get('/api/items/:tableId', async (req, res) => {
  const targetTbl = await knex.select().from('table').where('id', req.params.tableId).first();
  // サブクエリ
  const sub = knex
    .select({
      item_id: 'item.id',
      item_name: 'item.name',
      image: 'item.image',
      category_id: 'item.category_id',
    })
    .from(targetTbl.name)
    .innerJoin('item', `${targetTbl.name}.item_id`, '=', 'item.id')
    .orderBy('item.id', 'asc')
    .as('sub');
  const items = await knex
    .select({
      item_id: 'sub.item_id',
      item_name: 'sub.item_name',
      category_name: 'category.name',
      image: 'image',
    })
    .from(sub)
    .innerJoin('category', `sub.category_id`, '=', 'category.id');
  res.status(200).send(items);
});

// POST /api/items 新規アイテムを追加
app.post('/api/items', async (req, res) => {
  const newItem = req.body;
  try {
    await knex('item').insert({
      name: newItem.name,
      quantity: newItem.quantity,
      category_id: newItem.categoryId,
    });
    const items = await knex.select().from('item');
    res.status(200).json(items);
  } catch (e) {
    console.error('Error', e);
    res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
});
