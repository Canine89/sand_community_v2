export default function EduCategory({ categoryHandler }) {
  return (
    <select
      name="edu_category"
      id="edu_category"
      onChange={categoryHandler}
      className="appearance-none block w-full p-2 bg-gray-100 border-t border-l border-r text-sm font-bold text-gray-700 bg-clip-padding m-0"
    >
      <option value="초등참고서">초등참고서</option>
      <option value="미취학아동/국어/한글">미취학아동/국어/한글</option>
      <option value="미취학아동/수학">미취학아동/수학</option>
      <option value="미취학아동/영어">미취학아동/영어</option>
      <option value="미취학아동/기타">미취학아동/기타</option>
      <option value="미취학아동/기탄 시리즈">미취학아동/기탄 시리즈</option>
      <option value="미취학아동/7세 초능력 시리즈">
        미취학아동/7세 초능력 시리즈
      </option>
      <option value="1학년/국어(초등1)">1학년/국어(초등1)</option>
      <option value="1학년/수학(초등1)">1학년/수학(초등1)</option>
      <option value="1학년/기타(초등1)">1학년/기타(초등1)</option>
      <option value="2학년/국어(초등2)">2학년/국어(초등2)</option>
      <option value="2학년/기타(초등2)">2학년/기타(초등2)</option>
      <option value="3학년/국어(초등3)">3학년/국어(초등3)</option>
      <option value="3학년/수학(초등3)">3학년/수학(초등3)</option>
      <option value="3학년/과학(초등3)">3학년/과학(초등3)</option>
      <option value="3학년/사회(초등3)">3학년/사회(초등3)</option>
      <option value="3학년/영어(초등3)">3학년/영어(초등3)</option>
      <option value="3학년/기타(초등3)">3학년/기타(초등3)</option>
      <option value="4학년/국어(초등4)">4학년/국어(초등4)</option>
      <option value="4학년/수학(초등4)">4학년/수학(초등4)</option>
      <option value="4학년/과학(초등4)">4학년/과학(초등4)</option>
      <option value="4학년/사회(초등4)">4학년/사회(초등4)</option>
      <option value="4학년/영어(초등4)">4학년/영어(초등4)</option>
      <option value="4학년/기타(초등4)">4학년/기타(초등4)</option>
      <option value="5학년/국어(초등5)">5학년/국어(초등5)</option>
      <option value="5학년/수학(초등5)">5학년/수학(초등5)</option>
      <option value="5학년/과학(초등5)">5학년/과학(초등5)</option>
      <option value="5학년/사회(초등5)">5학년/사회(초등5)</option>
      <option value="5학년/영어(초등5)">5학년/영어(초등5)</option>
      <option value="5학년/기타(초등5)">5학년/기타(초등5)</option>
      <option value="6학년/국어(초등6)">6학년/국어(초등6)</option>
      <option value="6학년/수학(초등6)">6학년/수학(초등6)</option>
      <option value="6학년/과학(초등6)">6학년/과학(초등6)</option>
      <option value="6학년/사회(초등6)">6학년/사회(초등6)</option>
      <option value="6학년/영어(초등6)">6학년/영어(초등6)</option>
      <option value="6학년/기타(초등6)">6학년/기타(초등6)</option>
      <option value="예비중">예비중</option>
      <option value="수학전문교재/단계별 계산력/연산력 교재">
        수학전문교재/단계별 계산력/연산력 교재
      </option>
      <option value="수학전문교재/초등 경시/올림피아드">
        수학전문교재/초등 경시/올림피아드
      </option>
      <option value="수학전문교재/기타">수학전문교재/기타</option>
      <option value="국어전문교재/단계별 독해력/어휘력">
        국어전문교재/단계별 독해력/어휘력
      </option>
      <option value="국어전문교재/독서/논술">국어전문교재/독서/논술</option>
      <option value="국어전문교재/받아쓰기/맞춤법">
        국어전문교재/받아쓰기/맞춤법
      </option>
      <option value="한자">한자</option>
      <option value="한국사">한국사</option>
      <option value="영재교육원대비">영재교육원대비</option>
    </select>
  );
}
