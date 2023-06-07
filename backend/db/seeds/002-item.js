/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('item').del();
  await knex('item').insert([
    { name: 'タイラバロッド', quantity: 1, category_id: 1 },
    { name: 'アジングロッド', quantity: 1, category_id: 1 },
    { name: 'シーバスロッド', quantity: 1, category_id: 1 },
    { name: 'ベイトリール', quantity: 1, category_id: 2 },
    { name: 'スピニングリール', quantity: 1, category_id: 2 },
    { name: '中型電動リール', quantity: 1, category_id: 2 },
    { name: 'シーバス用リール', quantity: 1, category_id: 2 },
    { name: 'TGベイト(60g)', quantity: 1, category_id: 3 },
    { name: 'TGベイト(80g)', quantity: 1, category_id: 3 },
    { name: 'TGベイト(100g)', quantity: 1, category_id: 3 },
    { name: 'TGベイト(120g)', quantity: 1, category_id: 3 },
    { name: 'TGベイト(150g)', quantity: 1, category_id: 3 },
    { name: 'TGベイト(180g)', quantity: 1, category_id: 3 },
    { name: 'TGベイト(200g)', quantity: 1, category_id: 3 },
    { name: 'TGベイト(250g)', quantity: 1, category_id: 3 },
    { name: '円錐ウキ(1.5号)', quantity: 1, category_id: 4 },
    { name: '自立型ウキ', quantity: 1, category_id: 4 },
    { name: 'ナス鉛(1号)', quantity: 1, category_id: 5 },
    { name: 'ナス鉛(2号)', quantity: 1, category_id: 5 },
    { name: 'ナス鉛(3号)', quantity: 1, category_id: 5 },
    { name: 'ナス鉛(4号)', quantity: 1, category_id: 5 },
    { name: 'ナス鉛(5号)', quantity: 1, category_id: 5 },
    { name: 'ガン玉(1号)', quantity: 1, category_id: 5 },
    { name: 'ガン玉(2号)', quantity: 1, category_id: 5 },
    { name: 'ガン玉(3号)', quantity: 1, category_id: 5 },
    { name: 'ガン玉(4号)', quantity: 1, category_id: 5 },
    { name: 'ガン玉(5号)', quantity: 1, category_id: 5 },
    { name: 'ガン玉(6号)', quantity: 1, category_id: 5 },
    { name: 'ナイロン(1.2号)', quantity: 1, category_id: 6 },
    { name: 'ナイロン(3号)', quantity: 1, category_id: 6 },
    { name: 'PE(0.8号)', quantity: 1, category_id: 6 },
    { name: 'PE(1.2号)', quantity: 1, category_id: 6 },
    { name: 'フロロ(1.2号)', quantity: 1, category_id: 6 },
    { name: '船用ハリス(3号)', quantity: 1, category_id: 6 },
    { name: '船用ハリス(4号)', quantity: 1, category_id: 6 },
    { name: 'タイ(フロントフック)(SS)', quantity: 1, category_id: 7 },
    { name: 'タイ(リヤフック)(SS)', quantity: 1, category_id: 7 },
    { name: 'グレ針(1.5号)', quantity: 1, category_id: 7 },
    { name: '伊勢尼(6号)', quantity: 1, category_id: 7 },
    { name: 'サングラス', quantity: 1, category_id: 8 },
    { name: '日焼け止め', quantity: 1, category_id: 8 },
    { name: '酔い止め', quantity: 1, category_id: 8 },
    { name: 'クーラーボックス(27L)', quantity: 1, category_id: 8 },
    { name: 'クーラーボックス(60L)', quantity: 1, category_id: 8 },
    { name: 'ヘッドライト', quantity: 1, category_id: 8 },
    { name: 'ハサミ', quantity: 1, category_id: 8 },
    { name: 'プライヤー', quantity: 1, category_id: 8 },
  ]);
};
