export const translations = {
  zh: {
    nav: {
      home: '首页',
      story: '故事',
      characters: '角色',
      archives: '档案',
      generator: '生成器'
    },
    home: {
      title: 'The Scandal Maker Has Returned',
      subtitle: 'She was framed. She was broken. Now she is back.',
      enterStory: '进入故事',
      viewCharacters: '查看角色'
    },
    story: {
      title: '故事时间线',
      harriet: 'Harriet Listerwell',
      harrietDesc: '被陷害的受害者，觉醒后成为复仇者',
      bella: 'Bella',
      bellaDesc: '陷害 Harriet 的表姐，贪婪且狡诈'
    },
    characters: {
      title: '角色图鉴',
      camps: {
        protagonist: '主角',
        villain: '反派',
        neutral: '中立',
        ally: '盟友'
      }
    },
    archives: {
      title: '丑闻档案馆',
      expand: '展开详情',
      collapse: '收起'
    },
    generator: {
      title: '丑闻生成器',
      subtitle: '创建你的专属丑闻头条',
      inputName: '输入名字',
      generate: '生成丑闻',
      download: '下载图片',
      share: '分享'
    }
  },
  en: {
    nav: {
      home: 'Home',
      story: 'Story',
      characters: 'Characters',
      archives: 'Archives',
      generator: 'Generator'
    },
    home: {
      title: 'The Scandal Maker Has Returned',
      subtitle: 'She was framed. She was broken. Now she is back.',
      enterStory: 'Enter Story',
      viewCharacters: 'View Characters'
    },
    story: {
      title: 'Story Timeline',
      harriet: 'Harriet Listerwell',
      harrietDesc: 'Victim turned avenger after being framed',
      bella: 'Bella',
      bellaDesc: 'The cousin who framed Harriet, greedy and cunning'
    },
    characters: {
      title: 'Character Gallery',
      camps: {
        protagonist: 'Protagonist',
        villain: 'Villain',
        neutral: 'Neutral',
        ally: 'Ally'
      }
    },
    archives: {
      title: 'Scandal Archives',
      expand: 'Expand Details',
      collapse: 'Collapse'
    },
    generator: {
      title: 'Scandal Generator',
      subtitle: 'Create Your Own Scandal Headline',
      inputName: 'Enter Name',
      generate: 'Generate Scandal',
      download: 'Download Image',
      share: 'Share'
    }
  },
  ko: {
    nav: {
      home: '홈',
      story: '스토리',
      characters: '캐릭터',
      archives: '아카이브',
      generator: '생성기'
    },
    home: {
      title: 'The Scandal Maker Has Returned',
      subtitle: 'She was framed. She was broken. Now she is back.',
      enterStory: '스토리 보기',
      viewCharacters: '캐릭터 보기'
    },
    story: {
      title: '스토리 타임라인',
      harriet: 'Harriet Listerwell',
      harrietDesc: '누명을 쓴 피해자에서 복수자로 각성',
      bella: 'Bella',
      bellaDesc: 'Harriet을 모함한 사촌, 탐욕스럽고 교활함'
    },
    characters: {
      title: '캐릭터 도감',
      camps: {
        protagonist: '주인공',
        villain: '악당',
        neutral: '중립',
        ally: '동맹'
      }
    },
    archives: {
      title: '스캔들 아카이브',
      expand: '자세히 보기',
      collapse: '접기'
    },
    generator: {
      title: '스캔들 생성기',
      subtitle: '나만의 스캔들 헤드라인 만들기',
      inputName: '이름 입력',
      generate: '스캔들 생성',
      download: '이미지 다운로드',
      share: '공유'
    }
  }
};

export type Language = keyof typeof translations;
