/* eslint-disable no-sequences */

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Favorit Restorant', ({ I }) => {
  // eslint-disable-next-line no-unused-expressions
  I.see('Explore Restaurant', '.content__heading'), I.seeElement('.restaurant-item');
  I.seeElement('.restaurant-item__content a');

  const YangInginKuKlik = locate('.restaurant-item__content a').last();
  I.click(YangInginKuKlik);
  I.seeElement('#likeButtonContainer');

  const YangInginKuSuka = locate('#likeButtonContainer button');
  I.click(YangInginKuSuka);
  I.amOnPage('/#/favorites');
});

Scenario('Menghapus favorit restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item');
  I.seeElement('.restaurant-item__content a');

  const YangInginKuKlik = locate('.restaurant-item__content a').last();
  I.click(YangInginKuKlik);
  I.seeElement('#likeButtonContainer');

  const YangInginKuSuka = locate('#likeButtonContainer button');
  I.click(YangInginKuSuka);
  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');
  I.seeElement('.restaurant-item__content a');

  const YangInginKuTekan = locate('.restaurant-item__content a').last();
  I.click(YangInginKuTekan);
  I.seeElement('#likeButtonContainer');

  const YangInginKuDislike = locate('#likeButtonContainer button');
  I.click(YangInginKuDislike);
});
