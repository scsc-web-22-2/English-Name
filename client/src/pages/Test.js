import React from 'react';

function Test() {
    return(
        <div>
      <form action="http://127.0.0.1:8000/api/v1/category" method="post">
        <fieldset>
          <legend>성별 선택</legend>
          <input type="radio" name="gender" value="man" />남
          <input type="radio" name="gender" value="woman" />여
        </fieldset>

        <fieldset>
          <legend>질문1</legend>
          <input type="radio" name="q1" value="-2" />
          전혀 그렇지 않다
          <input type="radio" name="q1" value="-1" />
          그렇지 않다
          <input type="radio" name="q1" value="0" />
          보통이다
          <input type="radio" name="q1" value="1" />
          그렇다
          <input type="radio" name="q1" value="2" />
          매우 그렇다
        </fieldset>

        <fieldset>
          <legend>질문2</legend>
          <input type="radio" name="q2" value="-2" />
          전혀 그렇지 않다
          <input type="radio" name="q2" value="-1" />
          그렇지 않다
          <input type="radio" name="q2" value="0" />
          보통이다
          <input type="radio" name="q2" value="1" />
          그렇다
          <input type="radio" name="q2" value="2" />
          매우 그렇다
        </fieldset>

        <fieldset>
          <legend>질문3</legend>
          <input type="radio" name="q3" value="-2" />
          전혀 그렇지 않다
          <input type="radio" name="q3" value="-1" />
          그렇지 않다
          <input type="radio" name="q3" value="0" />
          보통이다
          <input type="radio" name="q3" value="1" />
          그렇다
          <input type="radio" name="q3" value="2" />
          매우 그렇다
        </fieldset>

        <fieldset>
          <legend>질문4</legend>
          <input type="radio" name="q4" value="-2" />
          전혀 그렇지 않다
          <input type="radio" name="q4" value="-1" />
          그렇지 않다
          <input type="radio" name="q4" value="0" />
          보통이다
          <input type="radio" name="q4" value="1" />
          그렇다
          <input type="radio" name="q4" value="2" />
          매우 그렇다
        </fieldset>

        <fieldset>
          <legend>질문5</legend>
          <input type="radio" name="q5" value="-2" />
          전혀 그렇지 않다
          <input type="radio" name="q5" value="-1" />
          그렇지 않다
          <input type="radio" name="q5" value="0" />
          보통이다
          <input type="radio" name="q5" value="1" />
          그렇다
          <input type="radio" name="q5" value="2" />
          매우 그렇다
        </fieldset>

        <fieldset>
          <legend>질문6</legend>
          <input type="radio" name="q6" value="-2" />
          전혀 그렇지 않다
          <input type="radio" name="q6" value="-1" />
          그렇지 않다
          <input type="radio" name="q6" value="0" />
          보통이다
          <input type="radio" name="q6" value="1" />
          그렇다
          <input type="radio" name="q6" value="2" />
          매우 그렇다
        </fieldset>
        <button type="submit">제출하기</button>
      </form>
    </div>
    );
}

export default Test;