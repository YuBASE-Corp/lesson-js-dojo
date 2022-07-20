const testData = {
  '000': [
    {
      in: 6,
      out: '偶数',
    },
    {
      in: 3,
      out: '奇数',
    },
    {
      in: 1,
      out: '奇数',
    },
    {
      in: 10,
      out: '偶数',
    },
  ],
  '001': [
    {
      in: [5, 1],
      out: '5',
    },
    {
      in: [15, 1],
      out: '15',
    },
    {
      in: [5, 50],
      out: '250',
    },
    {
      in: [15, 50],
      out: '750',
    },
  ],
  '002': [
    {
      in: 'みつき m',
      out: 'みつきくんの通信簿\n',
    },
    {
      in: 'しょうこ f',
      out: 'しょうこちゃんの通信簿\n',
    },
    {
      in: 'なかのおおえのおうじ m',
      out: 'なかのおおえのおうじくんの通信簿\n',
    },
    {
      in: 'り f',
      out: 'りちゃんの通信簿\n',
    },
  ],
  '003': [
    {
      in: 'as soon as possible',
      out: 'asap\n',
    },
    {
      in: 'frequently asked questions',
      out: 'faq\n',
    },
    {
      in: 'z',
      out: 'z\n',
    },
    {
      in: 'yfcbvmiykbknzzishevk qmdetdxrzeebtsgrbfms isewehhgtskisdstgita iyiiuwgrrzcrrxpkrrsy hfefutdivdusduquszam bynqnkagxfafpwjyuqph fqsrdqcsgnhdjcmdmcng ihfxfsrfjanezrfnxwwj grbbmycysuhdmwpdqdfc bxgaiyvtujxfcegydsku',
      out: 'yqiihbfigb\n',
    },
  ],
  '004': [
    {
      in: [3200, 300],
      out: '12900',
    },
    {
      in: [5230, 1200],
      out: '4030',
    },
    {
      in: [3000, 1],
      out: '12999',
    },
    {
      in: [3000, 3000],
      out: '10000',
    },
    {
      in: [100000, 1],
      out: '99999',
    },
    {
      in: [100000, 100000],
      out: '10000',
    },
    {
      in: [3010, 10],
      out: '3000',
    },
  ],
  '005': [
    {
      in: '私はその人を常に先生と呼んでいた',
      out: '私はその人を常に先生と呼んでいた\n',
    },
    {
      in: 'だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚る遠慮というよりも、その方が私にとって自然だからである',
      out: 'だからここでもただ先生と書くだけで本名は...\n',
    },
    {
      in: 'す',
      out: 'す\n',
    },
    {
      in: '何ともみんなに云いた時に、どうしてもその国家の標準がなど見えて下さいべきますば、大分時勢ある相違を広いときめかもだけ、どんなばかりの個性のつけ込むて私のごろごろにお思っからなり高等たい国家観かもは行',
      out: '何ともみんなに云いた時に、どうしてもその...\n',
    },
    {
      in: 'またたとい世間を通っがおきて、人になるて',
      out: 'またたとい世間を通っがおきて、人になるて\n',
    },
    {
      in: '私はどう仮定院を意見始めてとほかのそれとい',
      out: '私はどう仮定院を意見始めてとほかのそれと...\n',
    },
  ],
  '006': [
    {
      in: 'aaaaa',
      out: 'false\n',
    },
    {
      in: 'abcde',
      out: 'true\n',
    },
    {
      in: 'a',
      out: 'false\n',
    },
    {
      in: 'hmauuvcinytnnpcfbjgccvpzshmauuvcinytnnpcfbjgccvpzshmauuvcinytnnpcfbjgccvpzshmauuvcinytnnpcfbjgccvpzs',
      out: 'true\n',
    },
    {
      in: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      out: 'false\n',
    },
  ],
  '007': [
    {
      in: [20, 50, 60],
      out: 'true\n',
    },
    {
      in: [10, 80, 30],
      out: 'false\n',
    },
    {
      in: [1, 2, 1],
      out: 'true\n',
    },
    {
      in: [9999, 10000, 10000],
      out: 'true\n',
    },
    {
      in: [10, 20, 9],
      out: 'false\n',
    },
  ],
  '008': [
    {
      in: '356 435 834',
      out: '435\n',
    },
    {
      in: '6453 2223 9645',
      out: '6453\n',
    },
    {
      in: '1 2 3',
      out: '2\n',
    },
    {
      in: '3 2 1',
      out: '2\n',
    },
    {
      in: '2 1 3',
      out: '2\n',
    },
    {
      in: '2 3 1',
      out: '2\n',
    },
    {
      in: '1 3 2',
      out: '2\n',
    },
    {
      in: '3 1 2',
      out: '2\n',
    },
    {
      in: '99999 100000 99998',
      out: '99999\n',
    },
  ]
};
export default testData;
