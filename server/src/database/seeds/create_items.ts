import Knex from 'knex';


export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.png'},
    { title: 'Pilhas e Baterias', image: 'baterias.png'},
    { title: 'Papéis e Papelão', image: 'papeis-papelao.png'},
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.png'},
    { title: 'Resíduos Orgânicos', image: 'organicos.png'},
    { title: 'Óleo de Cozinha', image: 'oleo.png'},
  ]);
}