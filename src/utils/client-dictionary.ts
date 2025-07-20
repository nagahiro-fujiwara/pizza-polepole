// クライアントコンポーネント用の翻訳関数
export const getClientDictionary = async (locale: 'ja' | 'en') => {
  if (locale === 'en') {
    const dict = await import('../dictionaries/en.json');
    return dict.default;
  } else {
    const dict = await import('../dictionaries/ja.json');
    return dict.default;
  }
};
