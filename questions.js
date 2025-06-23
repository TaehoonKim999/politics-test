const questions = [
    {
        id: 1,
        text: "경제 위기 시 정부의 역할",
        description: "2008년 금융위기나 코로나19 같은 경제 위기 상황에서 정부가 적극적으로 시장에 개입하여 기업을 구제하고, 실업자를 지원하며, 공공사업을 확대해야 한다고 생각하십니까?",
        example: "예: 정부가 대규모 경기부양책을 통해 일자리를 창출하고, 어려운 기업에 자금을 지원하는 것",
        category: "economic",
        type: "progressive"
    },
    {
        id: 2,
        text: "대기업 독점 방지 정책",
        description: "네이버, 카카오, 삼성 같은 대기업들이 시장을 독점하는 것을 막기 위해 정부가 강력한 규제를 가해야 한다고 생각하십니까?",
        example: "예: 플랫폼 수수료 상한제, 대기업의 중소기업 영역 진출 제한, 공정거래 강화",
        category: "economic",
        type: "progressive"
    },
    {
        id: 3,
        text: "부유층 세금 정책",
        description: "연소득 10억원 이상의 부유층과 대기업에 대해 현재보다 훨씬 높은 세율을 적용하여, 그 수익으로 복지와 교육에 투자해야 한다고 생각하십니까?",
        example: "예: 부유층 소득세 최고세율을 50% 이상으로 인상, 법인세 인상을 통한 복지 확대",
        category: "economic",
        type: "progressive"
    },
    {
        id: 4,
        text: "최저임금 인상 정책",
        description: "현재 최저임금(시급 9,620원)을 단계적으로 대폭 인상하여 '생활임금' 수준(시급 12,000원 이상)으로 올려야 한다고 생각하십니까?",
        example: "예: 소상공인 부담을 고려하더라도 노동자의 기본 생활을 보장하는 수준으로 임금 인상",
        category: "economic",
        type: "progressive"
    },
    {
        id: 5,
        text: "국가 의료보험 시스템",
        description: "현재의 건강보험을 확대하여 치과, 한방, 성형수술을 제외한 모든 의료비를 국가가 100% 부담하는 시스템을 도입해야 한다고 생각하십니까?",
        example: "예: 암 치료비, 응급실비, 수술비 등을 모두 무료로 제공하는 '무상의료' 시스템",
        category: "economic",
        type: "progressive"
    },
    {
        id: 6,
        text: "자유시장 경제 시스템",
        description: "정부 개입을 최소화하고 기업들이 자유롭게 경쟁하도록 두는 것이 결국 소비자에게도 더 좋은 상품과 서비스를 제공한다고 생각하십니까?",
        example: "예: 규제 완화를 통해 새로운 기업들이 쉽게 시장에 진입하고, 경쟁을 통해 혁신이 일어나는 것",
        category: "economic",
        type: "conservative"
    },
    {
        id: 7,
        text: "공기업 민영화 정책",
        description: "한국전력, 한국가스공사, KBS 같은 공기업들을 민간에 매각하여 경영 효율성을 높이고 국가 부채를 줄여야 한다고 생각하십니까?",
        example: "예: 공기업의 방만한 경영과 적자를 해결하기 위해 민간 기업으로 전환하는 것",
        category: "economic",
        type: "conservative"
    },
    {
        id: 8,
        text: "성소수자 차별금지법",
        description: "직장, 학교, 상점 등에서 성적 지향이나 성 정체성을 이유로 차별하는 것을 법으로 금지하고, 위반 시 처벌받도록 하는 포괄적 차별금지법을 제정해야 한다고 생각하십니까?",
        example: "예: 동성애자라는 이유로 해고하거나 입학을 거부하는 것을 불법으로 규정",
        category: "social",
        type: "progressive"
    },
    {
        id: 9,
        text: "동성 결혼 법제화",
        description: "동성 커플도 이성 커플과 동일하게 법적 결혼을 할 수 있도록 하고, 상속권, 의료진료 동의권 등 모든 배우자 권리를 보장해야 한다고 생각하십니까?",
        example: "예: 동성 부부도 세금 혜택, 건강보험 피부양자 자격, 자녀 입양권 등을 인정받는 것",
        category: "social",
        type: "progressive"
    },
    {
        id: 10,
        text: "임신중지 권리 보장",
        description: "임신 24주 이내에는 여성이 사회적, 경제적 이유로도 자유롭게 임신중지를 선택할 수 있도록 하고, 관련 의료비를 건강보험으로 지원해야 한다고 생각하십니까?",
        example: "예: 미혼모, 경제적 어려움, 학업 중단 우려 등의 이유로도 임신중지를 선택할 권리",
        category: "social",
        type: "progressive"
    },
    {
        id: 11,
        text: "다문화 사회 정책",
        description: "외국인 노동자와 결혼이민자를 위한 한국어 교육, 문화 적응 프로그램을 대폭 확대하고, 이들의 시민권 획득 조건을 완화해야 한다고 생각하십니까?",
        example: "예: 외국인도 5년 거주 후 시민권 신청 가능, 다문화 가정 자녀 교육 지원 확대",
        category: "social",
        type: "progressive"
    },
    {
        id: 12,
        text: "전통 가족 가치 보호",
        description: "부모와 자녀로 구성된 전통적 가족 형태가 사회의 기본 단위이므로, 이를 보호하는 정책을 우선적으로 펼쳐야 한다고 생각하십니까?",
        example: "예: 다자녀 가정 세제 혜택, 전업주부 연금 크레딧, 조손가정보다 핵가족 우선 지원",
        category: "social",
        type: "conservative"
    },
    {
        id: 13,
        text: "국가 안보와 개인정보",
        description: "테러나 국가기밀 유출을 막기 위해서는 정부가 개인의 통신기록, 인터넷 사용기록 등을 일정 조건 하에 감시할 수 있어야 한다고 생각하십니까?",
        example: "예: 국정원의 통신수사, 경찰의 디지털 포렌식, 공항 보안검색 강화 등",
        category: "social",
        type: "conservative"
    },
    {
        id: 14,
        text: "강력 범죄 처벌 강화",
        description: "살인, 성폭력, 아동학대 등 강력범죄에 대해서는 현재보다 훨씬 무거운 형량을 부과하고, 재범 방지를 위해 전자발찌 착용 기간도 연장해야 한다고 생각하십니까?",
        example: "예: 성폭력 최소 형량 10년, 아동학대 가해자 친권 영구 박탈, 살인범 가석방 제한",
        category: "social",
        type: "conservative"
    },
    {
        id: 15,
        text: "기존 정치 제도 유지",
        description: "현재의 대통령제와 정당 중심의 정치 시스템이 안정적이므로, 급진적인 제도 변화보다는 점진적 개선이 바람직하다고 생각하십니까?",
        example: "예: 현행 정당제도 유지, 대통령제 지속, 기존 선거법 틀 내에서 소폭 개선",
        category: "political",
        type: "conservative"
    },
    {
        id: 16,
        text: "정치적 안정성 우선",
        description: "정치적 혼란을 피하기 위해 여론에 따른 정책 변화보다는 일관성 있는 정책 추진이 더 중요하다고 생각하십니까?",
        example: "예: 정권 교체와 관계없이 장기적 국정 방향 유지, 여론 변화에 흔들리지 않는 정책",
        category: "political",
        type: "conservative"
    },
    {
        id: 17,
        text: "국익 우선 외교 정책",
        description: "국제기구 분담금을 줄이고, 개발도상국 원조보다는 국내 복지와 인프라에 예산을 우선 투자해야 한다고 생각하십니까?",
        example: "예: UN 분담금 삭감, 아프리카 원조 중단, 국내 노인복지와 청년 일자리에 집중",
        category: "political",
        type: "conservative"
    },
    {
        id: 18,
        text: "강력한 리더십의 필요성",
        description: "국가적 위기 상황에서는 국회 토론이나 여론 수렴보다는, 유능한 지도자가 신속하게 결정을 내리고 실행하는 것이 더 중요하다고 생각하십니까?",
        example: "예: 코로나19 대응, 경제위기 극복 등에서 대통령의 강력한 결단과 추진력이 우선",
        category: "political",
        type: "conservative"
    },
    {
        id: 19,
        text: "환경보호 vs 경제성장",
        description: "기후변화 대응을 위해 탄소세를 대폭 인상하고, 화석연료 산업을 단계적으로 축소하더라도 일자리 감소와 경제적 손실을 감수해야 한다고 생각하십니까?",
        example: "예: 석탄발전소 조기 폐쇄, 내연기관 자동차 판매 금지, 탄소중립을 위한 산업구조 전환",
        category: "social",
        type: "progressive"
    },
    {
        id: 20,
        text: "전통 문화와 관습 보존",
        description: "제사, 경로 문화, 가족 중심의 명절 문화 등 우리나라 고유의 전통을 현대적으로 계승하고, 이를 학교 교육에서도 적극 가르쳐야 한다고 생각하십니까?",
        example: "예: 학교에서 전통 예절 교육 의무화, 전통 명절의 의미 강조, 효도 문화 장려",
        category: "social",
        type: "conservative"
    }
];

const resultCategories = {
    "very-progressive": {
        name: "매우 진보적",
        description: "당신은 사회 변화와 개혁을 적극 지지하며, 평등과 다양성을 중시합니다. 정부의 역할 확대와 사회적 약자 보호에 강한 관심을 보입니다.",
        range: [1, 2.0]
    },
    "progressive": {
        name: "진보적",
        description: "당신은 사회 진보와 개혁을 지지하면서도 실용적인 접근을 선호합니다. 변화를 추구하되 안정성도 고려하는 편입니다.",
        range: [2.0, 2.5]
    },
    "center-left": {
        name: "중도 진보",
        description: "당신은 온건한 진보 성향을 보이며, 점진적인 사회 변화를 선호합니다. 진보와 보수의 장점을 모두 인정하는 편입니다.",
        range: [2.5, 2.9]
    },
    "center": {
        name: "중도",
        description: "당신은 이념보다는 실용성을 중시하며, 상황에 따라 유연한 관점을 가집니다. 극단적인 정치 성향을 피하고 균형잡힌 시각을 추구합니다.",
        range: [2.9, 3.1]
    },
    "center-right": {
        name: "중도 보수",
        description: "당신은 온건한 보수 성향을 보이며, 안정성과 전통을 존중하면서도 필요한 변화는 수용합니다.",
        range: [3.1, 3.5]
    },
    "conservative": {
        name: "보수적",
        description: "당신은 전통적 가치와 기존 질서를 중시하며, 급진적인 변화보다는 점진적인 개선을 선호합니다.",
        range: [3.5, 4.0]
    },
    "very-conservative": {
        name: "매우 보수적",
        description: "당신은 전통과 질서를 매우 중시하며, 기존 체제의 안정성을 우선시합니다. 급격한 사회 변화에 대해 신중한 입장을 보입니다.",
        range: [4.0, 5]
    }
};